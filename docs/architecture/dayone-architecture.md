# Day One Architecture

```mermaid
---
title: Egal Day One Architecture
---
    erDiagram
        PRACTICE ||--|{ LAWYER : "has many"
        
        LAWYER ||..o{ CASE : "manages"

        ASSISTANT ||..o{ CASE : "assists on"

        CASE }|..|| CLIENT : "relates to"
        
        CASE }|..o{ CASE_EVENT: "has many"


        PRACTICE {
            string title
            string email
            string phone
            string address
            string city
            string state
            string postcode
            string country
            practice_type pacticeType
        }

        LAWYER {
            string salutation
            string firstName
            string lastName
            string email
            string phone
        }

        ASSISTANT {
            string salutation
            string firstName
            string lastName
            string email
        }
        
        CLIENT {
            string title
            string firstName
            string lastName
            string email
            string phone
            string address
            string city
            string state
            string postcode
            string country
        }
        
        CASE {
            string readableId
            string title
            string[] notes
            case_event[] caseEvents
            lawyer[] lawyers
            assistant assistant
        }
        
        CASE_EVENT {
            case case
            string type
            string summary
            string detail
            string status
        }
        
```
