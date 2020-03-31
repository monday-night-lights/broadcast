# Cast Game

An 'Around the Horn' style game for the MNL podcast.  Simply keeps score for 4 players to be able to compete in a talking head analysis competition.

## Score keeping

To scorekeep, go to https://scorekeeper.mnlhl.com/cast-game.  All four players scores will be shown and can be updated via `up` and `down` buttons.

## Scores

Scores can be displayed on stream via Browser Overlays.  To display a score, use the same url (https://scorekeeper.mnlhl.com/cast-game) and use the following query parameters:

| Parameter | Parameter Name | Accepted Values | **Required?**  *(Default)* |
|---|---|---|---|
| Player Score | `show` | [1,4] | **Yes** |
| White Text | `white` | "true", "false" | _"false"_ |