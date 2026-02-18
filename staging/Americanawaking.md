---
title: Church History American Awakening
date: 33 - 2000 A.D.
instructor: Russell Richardson
course: Church History
description: ttt
bibleReference: ggg
---

# {{ page.meta.title }}

**Date:** {{ page.meta.date }}  
**Instructor:** {{ page.meta.instructor }}  
**Course:** {{ page.meta.course }}  
**Description:** {{ page.meta.description }}  
**BibleReference:** {{ page.meta.bibleReference }}

## CDI Notes

```mermaid
flowchart TB
  %% DOCTRINAL TREE (starting around the Reformation era often covered near "Chapter 35")
  %% Root split: Calvin / non-Calvin streams, with key preachers & later American expressions.

  A["Reformation & Post-Reformation (1500s→)"] --> B["Calvin / Reformed Doctrine<br/>(Sovereignty of God in salvation; Reformed confessions)"]
  A --> C["Other Major Streams<br/>(Lutheran, Anglican, Anabaptist, Roman Catholic, Arminian/Wesleyan)"]

  %% Calvin / Reformed branch
  B --> B1["John Calvin (Geneva)"]
  B --> B2["Reformed in Scotland"]
  B2 --> K1["John Knox → Presbyterianism"]

  B --> B3["Reformed in England"]
  B3 --> P1["Puritans (many Reformed)"]
  P1 --> C1["Congregational / New England churches"]

  B --> B4["Reformed on the Continent"]
  B4 --> D1["Dutch Reformed"]
  B4 --> H1["French Reformed (Huguenots)"]

  %% Confessional / preaching figures often tied to Reformed trajectories
  C1 --> E1["Jonathan Edwards (New England)"]
  K1 --> E2["George Whitefield (Calvinistic Methodist; trans-Atlantic evangelist)"]

  %% Non-Calvin branches
  C --> L["Lutheran"]
  L --> L1["Martin Luther (Justified by faith)"]

  C --> A1["Anglican (Church of England)"]
  A1 --> A2["Thomas Cranmer (Reformation leader)"]
  A1 --> M1["Methodism (within/alongside Anglicanism)"]
  M1 --> W1["John Wesley (Arminian)"]
  M1 --> W2["Charles Wesley"]

  C --> R1["Arminian / Remonstrant emphasis"]
  R1 --> J1["Jacobus Arminius"]

  C --> N1["Anabaptist / Radical Reformation"]
  N1 --> Z1["Menno Simons (Mennonites)"]
  N1 --> S1["Swiss Brethren (early Anabaptists)"]

  C --> RC["Roman Catholic"]
  RC --> RC1["Council of Trent era reforms (Counter-Reformation)"]

  %% AMERICAN GREAT AWAKENING label
  subgraph G["American Great Awakening (First) — 1730s–1740s"]
    direction TB
    GA1["Revival preaching & renewal in the colonies"]
    GA2["Key voices (often Reformed-leaning):<br/>Jonathan Edwards, George Whitefield"]
  end

  E1 --> GA2
  E2 --> GA2
  GA2 --> GA1
```

### gantt chart

```mermaid
gantt
  title Timeline (Reformation → First Great Awakening)
  dateFormat  YYYY
  axisFormat  %Y

  section Reformation Foundations
  Luther’s public reform surge (Luther)            :milestone, l1, 1517, 1y
  Calvin’s Geneva leadership (Calvin)              :c1, 1536, 1564

  section Reformed / Calvin-linked Developments
  Scottish Reformation influence (Knox → Presby.)  :k1, 1559, 1572
  English Puritan movement (broad period)          :p1, 1560, 1662
  Dutch Reformed consolidation (broad period)      :d1, 1568, 1648

  section Other Protestant Streams
  Anglican Reformation consolidation (broad period):a1, 1534, 1603
  Arminius ministry (Arminius)                     :ar1, 1588, 1609

  section American Revival Marker
  First Great Awakening (American)                 :milestone, ga, 1735, 1y
  Revival preaching wave (Edwards/Whitefield era)  :ga2, 1735, 1745
```
