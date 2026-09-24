import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppLayout } from "@/components/app-layout";
import { MultiLine } from "@/components/charts";
import { KpiCard, Metric, PageHeader, Panel, StatusBadge } from "@/components/industrial";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LAB_EQUIPMENT, LAB_RESULTS } from "@/lib/demo-data";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: "Contrôle qualité — CBI Control" },
      {
        name: "description",
        content:
          "Laboratoire de la cimenterie : résultats d'analyses cru, clinker et ciment, conformité aux spécifications et état des équipements de mesure.",
      },
      { property: "og:title", content: "Contrôle qualité — CBI Control" },
      { property: "og:description", content: "Analyses laboratoire, conformité et calibration des appareils." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: QualityPage,
});

const TRENDS = Array.from({ length: 12 }, (_, i) => ({
  d: `${14 + i}/08`,
  blaine: 3180 + Math.round(Math.sin(i / 1.8) * 140),
  so3: Math.round((3.2 + Math.sin(i / 2.3) * 0.35) * 100) / 100,
  chauxLibre: Math.round((1.4 + Math.cos(i / 2.1) * 0.28) * 100) / 100,
}));

function QualityPage() {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("all");

  const rows = LAB_RESULTS.filter((r) => {
    const term = q.trim().toLowerCase();
    return (
      (!term || (r.id + r.material + r.analysis).toLowerCase().includes(term)) &&
      (status === "all" || r.status === status)
    );
  });

  const nc = LAB_RESULTS.filter((r) => r.status === "non conforme").length;
  const rate = Math.round(((LAB_RESULTS.length - nc) / LAB_RESULTS.length) * 1000) / 10;

  return (
    <AppLayout>
      <PageHeader
        title="Contrôle qualité"
        subtitle="Résultats du laboratoire : farine crue, clinker et ciments finis comparés aux spécifications."
      />

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="Taux de conformité" value={rate} unit="%" tone={nc > 0 ? "warn" : "ok"} />
        <KpiCard label="Échantillons du jour" value={LAB_RESULTS.length} tone="info" />
        <KpiCard label="Non conformes" value={nc} tone="critical" />
        <KpiCard label="Appareils labo" value={LAB_EQUIPMENT.length} tone="neutral" />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Panel className="lg:col-span-2" title="Tendances qualité (12 jours)" subtitle="Finesse Blaine, SO₃ et chaux libre">
          <MultiLine
            data={TRENDS}
            xKey="d"
            lines={[
              { key: "blaine", label: "Blaine (cm²/g)", color: "var(--color-info)" },
              { key: "so3", label: "SO₃ (%)", color: "var(--color-warn)" },
              { key: "chauxLibre", label: "Chaux libre (%)", color: "var(--color-ok)" },
            ]}
          />
        </Panel>

        <Panel title="Spécifications de référence">
          <div className="grid grid-cols-2 gap-2">
            <Metric label="LSF cru" value="96 – 99" />
            <Metric label="Chaux libre" value="< 1.80" unit="%" />
            <Metric label="Blaine CEM I" value="3 000 – 3 600" />
            <Metric label="SO₃" value="< 3.50" unit="%" />
            <Metric label="Résistance 2 j" value="> 20" unit="MPa" />
            <Metric label="CaCO₃ carrière" value="> 85" unit="%" />
          </div>
        </Panel>
      </div>

      <Panel title="Résultats d'analyses">
        <div className="grid gap-2 sm:grid-cols-2">
          <Input placeholder="Rechercher (échantillon, matière, analyse)..." value={q} onChange={(e) => setQ(e.target.value)} />
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les résultats</SelectItem>
              <SelectItem value="conforme">Conformes</SelectItem>
              <SelectItem value="non conforme">Non conformes</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mt-4 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Échantillon</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Matière</TableHead>
                <TableHead>Analyse</TableHead>
                <TableHead>Résultat</TableHead>
                <TableHead>Spécification</TableHead>
                <TableHead>Conformité</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((r) => (
                <TableRow key={r.id}>
                  <TableCell className="text-mono-num text-xs">{r.id}</TableCell>
                  <TableCell className="text-mono-num text-xs">{r.date}</TableCell>
                  <TableCell className="text-sm">{r.material}</TableCell>
                  <TableCell className="text-sm">{r.analysis}</TableCell>
                  <TableCell className="text-mono-num text-sm font-semibold">{r.result}</TableCell>
                  <TableCell className="text-mono-num text-xs text-muted-foreground">{r.spec}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={r.status === "conforme" ? "text-ok text-[10px]" : "text-critical text-[10px]"}
                    >
                      {r.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
              {rows.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} className="py-8 text-center text-sm text-muted-foreground">Aucun résultat.</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </Panel>

      <Panel title="Équipements du laboratoire" subtitle="Calibration et charge d'analyses">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {LAB_EQUIPMENT.map((e) => (
            <div key={e.name} className="rounded-md border border-border bg-background/40 p-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="text-sm font-medium">{e.name}</div>
                  <div className="text-xs text-muted-foreground">{e.manufacturer} — {e.model}</div>
                </div>
                <StatusBadge status={e.status} />
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <Metric label="Dernière calibration" value={e.lastCalibration} />
                <Metric label="Prochaine" value={e.nextCalibration} />
                <Metric label="Échantillons" value={e.samples} />
                <Metric label="Alertes" value={e.alerts} />
              </div>
            </div>
          ))}
        </div>
      </Panel>
    </AppLayout>
  );
}
