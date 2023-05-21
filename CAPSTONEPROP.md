# Capstone Proposal

## Greg Ramsower

# New Mountains Wellness
### A website for a friend's yoga and massage business.

This project will produce a website for a yoga and massage business with a focus on pelvic care for all those with female anatomy (regardless of gender presentation or identity). At full build out, the site will:

  - Act as the public-facing landing page for New Mountains Wellness with the following features:
    - Advertisement(s) for upcoming events
    - Calendar showing events and available appointment slots
    - Information regarding the business generally (hours, location, types of care, information about the practioner)
    - Publicly avilable resources, including video resources
    - 'Contact me' form

~~Include a secure client (user) portal containing:~~
    - ~~Patient care notes / treatment records~~
    - ~~Invoicing + connection to company's billing system~~
    - ~~Private online resources available to only clients~~
    - ~~Individualized schedule showing upcoming visits for only that client~~
    - ~~Possibly, this will be made into an app using React Native.~~

  - ~~Include a secure owner (admin) portal with:~~
    - ~~Access to a calendar with full CRUD capability to schedule, move and/or update schedules, events, classes, etc.~~
    - ~~Access to client care notes/ treatment records for each client of the business~~
      - ~~NOTE: depending upon legal (HIPAA) requirements, records may or may not have full CRUD capability.~~
    - ~~Ability to generate new notes / records for each client~~
    - ~~Ability to generate invoices based upon treatment / visits per client~~
    - ~~Connection to payment processing service~~
    - ~~Possibly, this will be made into an app using React Native.~~

### Minimum Viable Product

- Public website with basic information regarding the business including:
  - MapAPI (MapBox) showing business location
  - Ability to handle multimedia --  streaming videos, pictures. Client already has a youtube channel, so we will piggyback off of that going forward.
  - Responsive web design with minimum of three use cases: phone, tablet, desktop. Review Semantic-UI and Material-UI.
  - 'Contact me' form
  ~~Multiple views to organize information + resources available to all site users~~
  - ~~Calendar displaying upcoming public events (group yoga, meditation, etc.) .~~
  - ~~Owner portal allowing changes to calendar (this is the minimum portal functionality)~~

### Tech Stack

  - Frontend: Javascript/React, ~~Next.js,~~ 
  - ~~Backend: Likely NoSQL, possibly Firebase.~~ 

### Notes / Scratchpad
~~- Authentication to be implemented with two levels:~~

  - Business Owner: 
    - will need access to all site functions, including:
      - ability to set appointment availability, view, edit, and delete public events, private client appointments, etc., for all clients on one calendar
      - make treatment notes for a client
        - (as noted, depending on legal requirements, make edits to notes and/or delete notes [possible solution: allow notes to be edited by creating a copy of the note, allowing edits to new copy, and hiding the original note to ensure a record of changes is made])
      - invoice generation for a client
      - ability to apply payments to invoice upon reciept

  - Clients:
    - ability to make and change appointments on calendar (availability is set by owner)
    - view all previous appointments
    - view all previous invoices (paid and outstanding)
    - view treatment notes (limited view?)~~

- Update: May 7, 2023: No API or other public resources available for Noterro, the current client management system used.  No backend possible.

- April 6, 2023, and April 27, 2023:
  * Planning for first project meeting, time/date: May 5, 2023, 9:30 am (1 hr duration)
    - Walk through detailed understanding of project scope, aims/audience, use cases, client wishlist
  * Initial needs: 
      - all graphics and color schemes to implement styling correctly
      - access to previously recorded videos; greater understanding of client's use of Youtube in the past
      - understanding of legal requirements for data privacy (HIPAA compliance?)
      - Complete overview of client's work process, to include:
        - what happens when a client wants to sign up? 
        - what happens when she needs to bill a client? 
        - how are appointments made when not made directlyby the client (the business owner)?
        - how does she manage the business on a day-to-day basis, in terms of her app/tech interactions?