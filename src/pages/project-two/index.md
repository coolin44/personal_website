---
path: "/project-two"
date: "October 2018"
title: "Multithreaded Card Game(C)"
author: "Colin Hubert"
---

-Pair Wars is a simple card game with one dealer, 3 players, and a single deck of cards. Each player and the dealer runs on their own thread.

-Each player gets dealt 1 card at the beginning of the round, and when it's their turn they get dealt an additional card. If the two cards they have do not match, then they discard a random card from their hand. The first player with matching cards wins the round. My program runs 3 seperate rounds, with the dealer shuffling the cards at the beginning of each round.

-This project is implemented in C using POSIX threads.

-Code available on GitHub repository.