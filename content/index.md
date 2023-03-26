---
title: "James Phillips"
description: "Unleash your digital potential with a stunning web presence that captivates your audience. Let's work together to bring your brand to life."
hero_pretitle: "Hi, my name is"
hero_title: "James Phillips."
hero_description: "Hey there! I'm a website developer based in Somerset, and I love building awesome digital experiences. Whether it's designing a stunning website or crafting engaging interfaces, I've got you covered. Right now, I'm working with Haysto to level up their internal web tools."
cards:
  - name: "Haysto"
    description: "This is the Haysto description"
    link: "https://www.haysto.com"
    skills:
      - name: "Vue"
        color: "lime"
      - name: "Tailwind"
        color: "cyan"
      - name: "Statamic"
        color: "pink"
  - name: "SEHBAC"
    description: "This is the SEHBAC description"
    link: "https://www.sehbac.com"
    skills:
      - name: "Wordpress"
        color: "blue"
      - name: "Vanilla JS"
        color: "yellow"
---

::hero
#pretitle
Hi, my name is
#title
James Phillips.
#description
Hey there! I'm a website developer based in Somerset, and I love building awesome digital experiences. Whether it's designing a stunning website or crafting engaging interfaces, I've got you covered. Right now, I'm working with Haysto to level up their internal web tools.
::

<CardGrid :cards="cards" />
