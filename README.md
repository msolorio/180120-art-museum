**_Work in Progress_**

An art museum inventory management tool using object oriented design with
JavaScript prototypes.

__Initial Challenges__

In order to fulling take advantage of an object oriented design with prototypes
I wanted the user to be able to interact directly with the data model and not just
the persistence layer (JSON file). In order to do this I realized the user would
need to interact with the app on a continuously running node process. This is
achieved via a recursive command prompt illustrated in `./app/init`.
