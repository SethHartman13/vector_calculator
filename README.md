# Overview

I wanted to learn what it took to do Web App with Django as Python is my primary programming language and I knew a little bit about HTML5/CSS. More than anything, I am trying to expand the areas that I understand.

Vector Calculator is a web app whose purpose is to calculate reactionary forces where simultaneous equations are necessary to solve. This can be done by an excel document (which I have done), but doing it in a web app was meant to make it more versatile.

Having an engineering minor, I dealt with reacionary forces all the time and having a web app that can help me with solving calculations makes it easier to solve engineering problems.

{Provide a link to your YouTube demonstration.  It should be a 4-5 minute demo of the software running (starting the server and navigating through the web pages) and a walkthrough of the code.}

[Software Demo Video](https://youtu.be/XX8zNL2BK88)

# Web Pages

landing - This is merely the homepage of the website, making it so that you can navigate to the calculators (no dynamic pieces).

2 Equation Simultaneous Solver - The web app transitions from landing to this page via a relative url (that is controlled by the framework).
It uses JavaScript to calculate for 2 unknowns via matricies (basic linear algebra concepts).

3 Equation Simultaneous Solver - The web app transitions from landing to this page via a relative url (that is controlled by the framework).
It uses JavaScript to calculate for 3 unknowns via matricies (basic linear algebra concepts).

# Development Environment

VScode

Python
- django

JavaScript
- none

HTML/CSS

# Useful Websites

* [Java T Point](https://www.javatpoint.com/django-static-files-handling)
* [Django](https://www.djangoproject.com/)

# Future Work

{Make a list of things that you need to fix, improve, and add in the future.}
* Add API support
* Use Python to run calculations
* Better CSS for homepage