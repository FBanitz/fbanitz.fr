---
title: Flutter - Espacement des Row et Column 
categories:
  - dev
tags:
  - flutter
  - ui
  - layout
datetime: "2025-01-10T21:46:19.463A" 
---

Petit ajout dans la dernière [mise à jour 3.27 de Flutter](https://medium.com/flutter/whats-new-in-flutter-3-27-28341129570c) qui ne paie pas de mine mais qui ne m'a pas laissé de marbre; la possibilité de définir un espacement régulier des enfants des `Colomn` et `Row` directement dans les paramètres des celles-ci.

![Capture d'écran démontrant cette fonctionnalité]( {{ site.url }}/assets/attachments/flutter-flex-spacing/attachment_1.webp)

Cette nouvelle fonctionnalité réponds à un léger problème qui me tracassait depuis longtemps. Comment gérer l'espacement des enfants des deux implémentations du widget `Flex`, lorsque qu'il est le même entre chaque enfant, de manière standardisé et en limitant la redondance.

Jusqu'à maintenant j'utilisais deux méthodes différentes pour le même résultat :

## En utilisant des `Sizedbox`
```dartColomn(
  children: [
    Text('Mon élément 1'),
    Sizedbox(height : 5),
    Text('Mon élément 2'),
    Sizedbox(height : 5),
    Text('Mon élément 3'),
    Sizedbox(height : 5),
    ...
  ],
)
```

## En utilisant les propriété `margin` et/ou `padding` des widgets enfants
```dart
Colomn(
  children: [
    Padding(
      padding: EdgeInsets.only(bottom: 5),
      child: Text('Mon élément 1'),
    ),
    Padding(
      padding: EdgeInsets.only(bottom: 5),
      child: Text('Mon élément 2'),
    ),
    Padding(
      padding : EdgeInsets.only(bottom: 5),
      child: Text('Mon élément 3'),
    ),
    ...
    Text('Mon élément N'),
  ],
)
```

Aucune des ces solutions ne me convenait pour les raisons que j'ai exposé précédemment. Mais en plus je n'était jamais réelement sur que quelle solutions utiliser quand. Ce qui créait des incohérences et rendait mon code plus difficile à maintenir. 

Cette nouvelle fonctionnalité, bien que mineure me semble représenter un pas en avant vers la standardisation et la simplification des procédés de développement d'applications avec Flutter et je l'accueille avec enthousiasme.

*François BANITZ pour [son blog](https://fbanitz.fr/).*