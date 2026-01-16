# YWC Retreat App - Project Documentation

## Overview

A React-based facilitation tool for the **Yukon Women's Coalition (YWC) 2026 Retreat**, designed to help 11 member organizations collaboratively plan future coalition projects. The app guides participants through a structured 5-step decision-making process aligned with Canada's National Action Plan to End Gender-Based Violence (NAP GBV).

## Purpose

The YWC is shifting from a reactive to a **proactive coalition model**. This app supports that transition by:

1. Presenting evidence-based project opportunities (gap analysis)
2. Aligning projects with the NAP GBV framework
3. Enabling democratic voting across member organizations
4. Evaluating feasibility through a structured matrix
5. Generating actionable recommendations

## Key Concepts

### NAP GBV Pillars (6 pillars)

The app organizes all projects according to Canada's National Action Plan to End Gender-Based Violence:

| Pillar | Name | Focus |
|--------|------|-------|
| P1 | Support for Survivors | Crisis intervention, shelter, counselling, safety planning |
| P2 | Prevention | Public awareness, education, community-based prevention |
| P3 | Justice System | Legal advocacy, court supports, restorative justice |
| P4 | Indigenous Leadership | Indigenous-led programming, cultural healing, MMIWG2S+ |
| P5 | Social Infrastructure | Capacity building, workforce, governance, funding |
| P6 | Foundation | Research, evaluation, data governance, accountability |

### Member Organizations (11 orgs)

```
DWS    - Dawson Women's Shelter
H&H    - Help & Hope
Les Elles - Les Elles (Francophone)
LAWS   - Legal Aid Yukon Society
PSAC   - PSAC Yukon
VFWC   - Victoria Faulkner Women's Centre
WAWC   - Women's Advocate Workers Coalition
YAWC   - Yukon Aboriginal Women's Council
YSWC   - Yukon Status of Women Council
YWITT  - Yukon Women in Trades & Technology
YWTHS  - Yukon Women's Transition Home Society
```

### Suggested Projects (Comprehensive Gap Analysis)

The 50+ suggested projects were derived through a two-phase process:

**Phase 1: Indicator vs. Workplan Analysis**
1. Reviewed 234 comprehensive GBV indicators ranked by priority
2. Analyzed current deliverables from all 11 member organizations
3. Removed projects that duplicate existing organizational work
4. Rationale documentation for each gap

**Phase 2: GBV Expert Systemic Analysis**
Added projects addressing gaps that don't appear in indicator frameworks but represent critical systemic needs:

- **Lifecycle gaps**: Perinatal intervention, elder abuse, children as primary clients
- **Perpetrator accountability**: Batterer intervention, adolescent intervention
- **Lethal risk factors**: Strangulation protocols, firearms safety, post-separation danger
- **Accessibility**: Disability-informed services, Deaf services
- **Economic dimensions**: Financial abuse, employment sabotage, legal cost barriers
- **System failures**: Child welfare integration, cross-jurisdictional protocols
- **Underserved populations**: Immigration-specific GBV, faith communities

Projects that were **excluded** because they're already being done:
- School-based prevention (Les Elles, LAWS already do this)
- MMIWG2S+ awareness (WAWC leads this)
- Trauma-informed justice training (Les Elles, VFWC have RCMP relationships)
- Cultural healing programs (LAWS, WAWC provide these)
- Francophone services (Les Elles is dedicated to this)

## App Structure

### 5-Step Facilitation Flow

```
Step 1: Brainstorm     → Add project ideas (group activity)
Step 2: NAP Pillars    → Assign projects to pillars (group activity)
Step 3: Vote           → Each org votes for top 4 (per-org activity)
Step 4: Evaluate       → Feasibility matrix for top 4 (per-org activity)
Step 5: Summary        → Results, recommendations, export
```

### Component Architecture

```
YWCRetreatApp (main)
├── Header (step navigation)
├── Step1Brainstorm
│   ├── Suggested projects grid (with rationale expansion)
│   ├── Search and pillar filters
│   ├── Custom project input
│   └── Current project cards
├── Step2Group
│   ├── Unassigned projects section
│   ├── Pillar columns with drag/assign
│   └── Coverage summary
├── Step3Vote
│   ├── Organization selector
│   ├── Project cards with vote counts
│   └── Vote limit tracker (4 per org)
├── Step4Matrix
│   ├── Top 4 project tabs
│   ├── 11 evaluation questions
│   └── Cross-org response grid
└── Step5Summary
    ├── Pillar coverage analysis
    ├── Feasibility scores
    ├── Recommendations
    └── JSON export
```

### Key Data Structures

```javascript
// Project object
{
  id: number,           // Unique ID (Date.now())
  name: string,         // Project title
  description: string,  // What the project does
  pillars: number[],    // Array of pillar IDs [1-6]
  rationale: string,    // Why this gap exists (suggested projects only)
  votes: string[],      // Array of org IDs that voted
  matrix: {             // Feasibility responses by org
    [orgId]: {
      [questionId]: string  // 'Yes' | 'No' | 'Maybe' | option
    }
  }
}

// Matrix questions
- mandate: Does it fit with our mandate & values?
- contribute: Will it contribute to our mandate?
- guidelines: Does it follow our guidelines?
- timeframe: Is it short term or long term?
- interest: Does it interest you?
- time: Do you have capacity to contribute time?
- money: Do you have capacity to contribute $$?
- lead: Are you willing to lead the project?
- funding: Does it fit with any potential funding avenues?
- pursuefunding: Are you willing to pursue funding?
- host: Can you host the funding & provide reporting?
```

## Technical Details

### Stack
- React 18 with functional components and hooks
- Tailwind CSS for styling
- Single-file architecture (ywc-retreat-app.jsx)
- No external state management (useState only)

### Key Features
- **Responsive design**: Works on tablets for retreat use
- **Per-org voting**: Organization selector for Steps 3-4
- **Pillar filtering**: Filter suggested projects by NAP pillar
- **Search**: Full-text search across project names and descriptions
- **Rationale expansion**: "Why this gap?" toggle on each suggestion
- **Real-time vote counts**: Visual vote tracking with org avatars
- **Feasibility scoring**: Automatic calculation from matrix responses
- **JSON export**: Download results for post-retreat analysis

### State Management

All state lives in the root `YWCRetreatApp` component:

```javascript
const [currentStep, setCurrentStep] = useState(1);
const [currentOrg, setCurrentOrg] = useState('dws');
const [projects, setProjects] = useState([]);
```

Projects array is passed down and modified through `setProjects` prop.

## Source Data

The app's suggested projects were derived from:

1. **Comprehensive Indicators CSV**: 234 indicators ranked by category and priority
2. **Organizational Workplans CSV**: Current deliverables from all 11 YWC members (HSS, WEF, IWEF funding streams)

These files informed the gap analysis that produced the 20 suggested projects.

## Future Enhancements

Potential improvements for future retreats:

1. **Persistence**: Save/load state to localStorage or backend
2. **Real-time sync**: Multi-device collaboration during retreat
3. **Admin mode**: Facilitator controls for advancing steps
4. **Print view**: Formatted summary for documentation
5. **Historical comparison**: Compare results across retreats
6. **Funding database**: Link projects to known funding opportunities

## Usage Notes

### For Facilitators
- Steps 1-2 are **group activities** (one screen, collaborative)
- Steps 3-4 require **organization selector** (pass device around or use multiple devices)
- Step 5 generates **exportable results** for post-retreat documentation

### For Developers
- All constants (pillars, orgs, questions, projects) are at top of file
- PillarBadge component is reusable across all steps
- Feasibility calculation is in Step5Summary's `calculateFeasibility` function
- Pillar coverage analysis also in Step5Summary

## File Structure

```
retreat app ywc/
├── ywc-retreat-app.jsx    # Main React application
├── CLAUDE.md              # This documentation file
└── (source data files were in /mnt/uploads/)
```

## Contact

This app was developed for the Yukon Women's Coalition 2026 Retreat planning process.
