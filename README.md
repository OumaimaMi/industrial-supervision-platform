# Bizerte Operations Hub

### Industrial Monitoring, Predictive Maintenance & Cybersecurity Platform

**Bizerte Operations Hub** is an industrial operations platform designed for **Les Ciments de Bizerte**, combining industrial monitoring, predictive maintenance, artificial intelligence and cybersecurity in a unified digital environment.

The platform is designed to help operators, technicians, engineers, maintenance teams, production managers and cybersecurity teams monitor industrial operations, investigate anomalies and manage technical incidents.


---

## Project Overview

The objective of Bizerte Operations Hub is to create a digital industrial operations center capable of centralizing:

* Industrial equipment monitoring
* Production process monitoring
* Machine status
* Sensor parameters
* Alarms and anomalies
* Predictive maintenance
* Corrective maintenance
* Machine diagnostics
* Technical schematics
* Production information
* Quality control
* IT infrastructure monitoring
* Network monitoring
* Firewall monitoring
* OT cybersecurity
* Cybersecurity incidents
* Technical documentation
* Reports and analytics
* Audit logs

The platform follows an operational workflow:

```text
Plant
  ↓
Production Zone
  ↓
Machine
  ↓
Sensor Data
  ↓
Anomaly Detection
  ↓
AI Diagnosis
  ↓
Maintenance Ticket
  ↓
Intervention
  ↓
Resolution
  ↓
Historical Analysis
```

For cybersecurity:

```text
Network
  ↓
Firewall
  ↓
Security Event
  ↓
Anomaly Detection
  ↓
Security Analysis
  ↓
Incident
  ↓
Investigation
  ↓
Resolution
  ↓
Security Report
```

---

# Artificial Intelligence

Artificial intelligence is an important component of the platform.

The objective is not to replace industrial technicians but to provide intelligent decision-support tools.

## AI Machine Diagnosis

The AI module analyzes available machine information such as:

* Temperature
* Vibration
* Motor current
* Motor load
* Pressure
* Material flow
* Active alarms
* Historical events
* Previous maintenance operations

The system can identify abnormal conditions and generate:

* Detected problem
* Severity
* Probability
* Possible causes
* Recommended actions

Example:

```text
Machine:
Cement Mill 1

Detected Problem:
Abnormal motor temperature

Severity:
Critical

Probability:
87%

Possible Causes:
- Bearing lubrication problem
- Mechanical friction
- Bearing wear
- Excessive load

Recommended Actions:
- Check motor load
- Verify bearing temperature
- Check lubrication
- Analyze vibration
- Inspect mechanical components
- Escalate to maintenance engineer
```

AI-generated results are presented as **decision-support information** and require validation by qualified personnel.

---

## Predictive Maintenance

The platform is designed to support predictive maintenance by analyzing historical and simulated sensor data.

Potential indicators include:

* Temperature trends
* Vibration trends
* Motor load
* Pressure variations
* Alarm frequency
* Failure history
* Maintenance history
* Equipment operating conditions

The objective is to identify abnormal behavior before it develops into a major equipment failure.

Future implementations can integrate machine learning models for:

* Anomaly detection
* Failure prediction
* Remaining Useful Life estimation
* Predictive maintenance
* Sensor-based classification

---

## Intelligent Anomaly Detection

The platform can identify abnormal operating conditions using combinations of:

* Threshold-based detection
* Historical comparison
* Sensor correlation
* Statistical analysis
* Machine learning models

Example:

```text
Temperature: 94°C
Vibration: 7.1 mm/s
Motor Load: 96%

Analysis:
Abnormal operating condition detected.

Potential causes:
Mechanical overload
Bearing degradation
Insufficient lubrication
```

---

# Cybersecurity

Cybersecurity is integrated into the platform as a dedicated operational domain.

The objective is to provide visibility into both IT and industrial environments while keeping industrial control systems isolated from unauthorized actions.

---

## IT Security Monitoring

The platform monitors:

* Servers
* Workstations
* Network devices
* Routers
* Switches
* Firewall
* SCADA servers
* Industrial servers
* Network connections

The platform can display:

* Online devices
* Offline devices
* Suspicious connections
* Authentication failures
* Network anomalies
* Security events

---

## Firewall Monitoring

The Firewall Security module provides visibility into:

* Firewall status
* CPU utilization
* Memory utilization
* Uptime
* Active connections
* Allowed traffic
* Blocked traffic
* Suspicious traffic
* Failed authentication
* Port scanning
* Suspicious IP addresses
* Unauthorized access attempts

Example:

```text
Security Event

Source:
Unknown device

Destination:
Industrial Network

Protocol:
TCP

Port:
502

Severity:
High

Status:
Investigating
```

---

## Firewall Anomaly Detection

The security module can identify suspicious patterns such as:

* Repeated connection attempts
* Unauthorized access attempts
* Unexpected ports
* Abnormal traffic
* Suspicious source addresses
* Repeated authentication failures
* Communication with restricted industrial services

Example:

```text
Problem Detected:
Repeated connection attempts from an unknown device

Severity:
High

Recommended Actions:
- Identify the source device
- Review firewall rules
- Analyze network logs
- Investigate the affected system
- Notify the cybersecurity administrator
```

---

# OT Cybersecurity

The platform includes a dedicated **OT Security** module for industrial environments.

It provides visibility into:

* PLC
* SCADA
* HMI
* Industrial servers
* Engineering workstations
* Network switches
* Firewalls
* Industrial protocols

Example architecture:

```text
Internet
    |
    v
 Firewall
    |
    v
 IT Network
    |
    v
   DMZ
    |
    v
SCADA Server
    |
    v
Industrial Network
    |
    v
   PLC
    |
    v
Industrial Machines
```

The platform is designed according to an important security principle:

> Monitoring and analysis should not automatically result in control actions on industrial equipment.

The prototype does not automatically send commands to PLCs, machines or firewall rules.

---

# Security Architecture

The platform is designed to support modern security mechanisms including:

* Role-Based Access Control
* Secure authentication
* Password hashing
* Session management
* Audit logging
* Login history
* Action history
* Security event monitoring
* Network monitoring
* Firewall monitoring
* OT security monitoring

Future security integrations can include:

* SIEM
* IDS/IPS
* EDR
* Firewall APIs
* Network monitoring systems
* Security information platforms
* Threat intelligence systems

---

# Industrial Monitoring

## Plant Overview

The platform provides a visual representation of the main cement production process:

```text
Quarry
  ↓
Crushing
  ↓
Raw Material Transport
  ↓
Prehomogenization
  ↓
Raw Mill
  ↓
Homogenization
  ↓
Preheater
  ↓
Rotary Kiln
  ↓
Clinker Cooler
  ↓
Clinker Storage
  ↓
Cement Mills
  ↓
Cement Silos
  ↓
Packaging
  ↓
Shipping
```

Each production zone can be associated with its machines, alarms, measurements and maintenance information.

---

# Machine Monitoring

The Machines module provides:

* Machine ID
* Machine name
* Production zone
* Equipment type
* Current state
* Temperature
* Vibration
* Motor load
* Pressure
* Flow
* Last alarm
* Maintenance status
* Next maintenance
* Responsible technician

Machine states include:

```text
Operational
Warning
Anomaly
Critical
Stopped
Maintenance
```

---

# SCADA-Style Process Monitoring

The Process Monitoring interface provides a simplified industrial visualization inspired by SCADA/HMI systems.

The interface can display:

* Motors
* Conveyors
* Mills
* Silos
* Valves
* Elevators
* Fans
* Kilns
* Clinker coolers

Equipment status is represented visually to allow operators to identify abnormal conditions quickly.

---

# Alarm Management

The Alarm Center centralizes industrial alarms.

Each alarm contains:

* Date
* Time
* Machine
* Zone
* Alarm
* Severity
* Status
* Assigned technician
* Resolution

Available actions include:

* Acknowledge alarm
* Assign technician
* Add comment
* Resolve alarm
* Create maintenance ticket

---

# Maintenance Management

The maintenance module supports:

## Preventive Maintenance

* Scheduled maintenance
* Machine
* Maintenance type
* Responsible person
* Estimated duration
* Due date

## Corrective Maintenance

Maintenance tickets follow the workflow:

```text
Open
  ↓
Assigned
  ↓
In Progress
  ↓
Waiting Parts
  ↓
Resolved
  ↓
Closed
```

Example:

```text
Ticket:
CBI-2026-00124

Machine:
Cement Mill 1

Problem:
High motor temperature

Priority:
High

Assigned to:
Maintenance Team A
```

---

# Machine History

Each machine has a complete historical timeline.

Example:

```text
25/08/2026 — Alarm detected
25/08/2026 — Technician assigned
25/08/2026 — Bearing inspected
26/08/2026 — Maintenance completed
27/08/2026 — Machine restarted
```

This provides a historical view of equipment behavior and maintenance interventions.

---

# Technical Schematics

The platform includes a technical documentation section for:

* Process diagrams
* Electrical diagrams
* Mechanical diagrams
* Instrumentation
* Conveyor systems
* Hydraulic systems
* Pneumatic systems
* Network architecture

The architecture supports interactive and zoomable technical diagrams.

---

# Quality Control

The Quality Control module provides centralized laboratory information.

It can manage:

* Laboratory equipment
* Manufacturer
* Model
* Calibration
* Samples
* Analysis results
* Specifications
* Alerts

The prototype includes the Thermo Scientific ARL 9900 Series X-Ray Workstation as a documented equipment example.

---

# Silos Monitoring

The platform provides information about cement and raw-material storage.

Each silo can display:

* Product
* Capacity
* Current level
* Temperature
* Status
* Last filling
* Last extraction

---

# Analytics

The Analytics module provides operational indicators including:

* Machine availability
* MTBF
* MTTR
* Number of failures
* Downtime
* Maintenance cost
* Production efficiency
* Alarm frequency
* Energy consumption
* Network incidents

Available time ranges:

```text
Today
7 Days
30 Days
3 Months
1 Year
Custom Range
```

---

# Reports

The platform provides operational and security reports:

* Daily Production Report
* Machine Status Report
* Maintenance Report
* Alarm Report
* Energy Report
* Cybersecurity Report
* Firewall Report
* Incident Report

Export formats:

* PDF
* Excel
* CSV

---

# Global Search

The platform provides a global search across:

* Machines
* Equipment codes
* Alarms
* Technicians
* Maintenance tickets
* Technical schematics
* Procedures
* Network incidents
* Firewall events

Example:

```text
Search:
4K1.KN01
```

The system can return the associated equipment, status, alarms, parameters, maintenance history and documentation.

---

# Authentication and Roles

The platform provides role-based access.

Supported roles include:

* Administrator
* Maintenance Manager
* Engineer
* Operator
* Production Manager
* IT / Cybersecurity Manager

Each role has access to the features required for its responsibilities.

---

# Audit Logs

Important operations are recorded in the audit system.

Examples:

```text
User logged in
Machine viewed
Maintenance ticket created
Alarm acknowledged
Report generated
Cybersecurity incident assigned
User permissions modified
```

Audit logs can contain:

* User
* Action
* Resource
* Date
* IP address
* Result

---

# Documented Industrial Equipment

The platform integrates available technical information concerning documented Ciments de Bizerte equipment.

## Crusher

* Manufacturer: THYSSEN grupp
* Capacity: 1000 t/h
* Maximum input size: 1500 × 1000 × 700 mm
* Output size: 0–60 mm

## Raw Mill

* ID: 3F1
* Type: PFEIFFER MPS 3750 modified
* Motor power: 1675 kW
* Capacity: 310 t/h
* Separator: PFEIFFER SLS 3750B
* Separator power: 132 kW

## Rotary Kiln

* ID: 4K1.KN01
* Type: POLYSIUS
* Nominal capacity: 4000 t/day clinker
* Length: 83 m
* Diameter: 5.18 m
* Maximum speed: 4 rpm
* Fuel: Petroleum coke + heavy fuel oil No. 2

## Clinker Cooler

* ID: 4R1.PQ01
* Type: POLYTRACK
* Surface: 86 m²

## Cement Mills

* Type: UNIDAN 44 × 13
* Number: 2
* Capacity: 100 t/h per mill

## Packaging

* 4 rotary cement packing machines
* 1 rotary lime packing machine
* 2 BIG BAG installations

> Technical values are based on the available technical documentation. Values that are not available from real industrial sources are not presented as real-time measurements.

---

# Demo Mode

The current prototype operates with simulated industrial data.

This allows the platform to demonstrate:

* Machine monitoring
* Alarm generation
* AI diagnosis
* Predictive maintenance scenarios
* Network events
* Firewall events
* Cybersecurity incidents
* Production monitoring

Example:

```text
Machine:
Raw Mill 3F1

Temperature:
78°C

Vibration:
3.2 mm/s

Motor Load:
82%

Status:
Warning
```

Simulated data is clearly identified and must not be interpreted as real-time industrial data.

---

# Future Industrial Integration

The architecture is designed to support future integration with real industrial systems.

Potential integrations include:

* SCADA
* PLC
* OPC-UA
* MQTT
* Industrial historians
* Industrial databases
* REST APIs
* Firewall APIs
* SIEM
* IDS/IPS
* Network monitoring platforms

The architecture is intentionally designed to separate monitoring and analysis from direct industrial control.

---

# Technology Stack

## Frontend

* React
* TypeScript
* Tailwind CSS
* shadcn/ui
* Recharts
* Lucide React

## Backend

Designed for integration with a REST API architecture.

## Database

* PostgreSQL

## Artificial Intelligence

Potential AI and Machine Learning components:

* Anomaly Detection
* Predictive Maintenance
* Machine Failure Prediction
* Sensor Analysis
* Intelligent Diagnosis
* Natural Language Processing
* AI-assisted Technical Support

## Cybersecurity

* RBAC
* Authentication
* Audit Logging
* Firewall Monitoring
* Network Monitoring
* OT Security
* Security Event Detection
* SIEM Integration
* IDS/IPS Integration

---

# System Architecture

```text
                         Bizerte Operations Hub
                                  |
                +-----------------+-----------------+
                |                                   |
                v                                   v
        Industrial Monitoring                 Cybersecurity
                |                                   |
        +-------+-------+                    +------+------+
        |       |       |                    |      |      |
      SCADA   OPC-UA   MQTT               SIEM Firewall Network
        |       |       |                    |      |      |
        +-------+-------+                    +------+------+
                |                                   |
                v                                   v
        Industrial Data                      Security Events
                |                                   |
                +-----------------+-----------------+
                                  |
                                  v
                            REST API Layer
                                  |
                    +-------------+-------------+
                    |                           |
                    v                           v
               PostgreSQL                 AI / ML Layer
                                                |
                                  +-------------+-------------+
                                  |             |             |
                                  v             v             v
                              Diagnosis    Anomaly       Prediction
                                            Detection     Maintenance
```

The current prototype uses simulated data. Real industrial integrations are planned as future extensions.

---

# Responsive Design

The application is designed for:

### Desktop

Complete industrial monitoring interface.

### Tablet

Adapted interface for technicians and engineers working on site.

### Mobile

Focused access to:

* Critical alerts
* Machine status
* Maintenance tickets
* Notifications
* Incidents

---

# Main Modules

```text
Dashboard
Plant Overview
Machines
Process Monitoring
Alarms
Maintenance
Technical Schematics
Production
Quality Control
Silos
IT Monitoring
Firewall Security
OT Security
Cyber Incidents
Reports
Analytics
Documentation
Users
Audit Logs
Settings
```

---

# Getting Started

## Prerequisites

* Node.js
* npm

## Clone the repository

```bash
git clone https://github.com/OumaimaMi/industrial-supervision-platform.git
cd industrial-supervision-platform
```

## Install dependencies

```bash
npm install
```

## Start the development server

```bash
npm run dev
```

The application will then be available at the local development URL provided by Vite.

---

# Project Structure

```text
industrial-supervision-platform/
│
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── data/
│   ├── services/
│   └── ...
│
├── package.json
├── tsconfig.json
├── vite.config.ts
├── components.json
└── README.md
```

---

# Project Context

This project was developed during an internship at:

**Les Ciments de Bizerte**

The project focuses on the digitalization of industrial monitoring and maintenance while incorporating artificial intelligence and cybersecurity capabilities.

The main objective is to demonstrate how modern software technologies can be applied to an industrial environment to improve visibility, maintenance management, anomaly analysis and security monitoring.
<img width="1918" height="865" alt="Capture d&#39;écran 2026-09-24 171954" src="https://github.com/user-attachments/assets/6e365e7e-990c-4e7a-bb22-d03addc12c43" />
<img width="1891" height="897" alt="Capture d&#39;écran 2026-09-24 172009" src="https://github.com/user-attachments/assets/90000e56-192c-498b-ac5c-287186be5de7" />
<img width="1877" height="916" alt="Capture d&#39;écran 2026-09-24 172022" src="https://github.com/user-attachments/assets/91fe6f5d-b2e7-477e-a459-bcc347b87510" />
<img width="1887" height="864" alt="Capture d&#39;écran 2026-09-24 172036" src="https://github.com/user-attachments/assets/8228c254-5363-48e3-90a7-522c8b838cb8" />
<img width="1875" height="885" alt="Capture d&#39;écran 2026-09-24 172052" src="https://github.com/user-attachments/assets/ca1048f7-d4eb-497a-b703-c62ff3aa8230" />
<img width="1883" height="910" alt="Capture d&#39;écran 2026-09-24 172105" src="https://github.com/user-attachments/assets/31f7df51-bc2f-42ed-bf25-19c56fe1dc6f" />
<img width="1892" height="899" alt="Capture d&#39;écran 2026-09-24 172120" src="https://github.com/user-attachments/assets/8b7e156d-1298-4544-b4aa-32c5a62555ad" />

---

# Author

## Oumaima Bouhani

Computer Engineering Student
Specialization: Cloud & IT

Areas of interest:

* Cloud Computing
* DevOps
* Cybersecurity
* Artificial Intelligence
* Machine Learning
* Industrial IT
* Software Engineering

GitHub:
https://github.com/OumaimaMi

LinkedIn:
https://www.linkedin.com/in/oumaima-bouhani/


---

<p align="center">
  <b>Bizerte Operations Hub</b><br>
  Industrial Monitoring • Artificial Intelligence • Predictive Maintenance • Cybersecurity
</p>
