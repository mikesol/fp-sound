module FPSound.C02.FadeNoteAlt where

import WAGS.Lib.Learn (player, Player)
import WAGS.Lib.Learn.Pitch (c4)
import WAGS.Lib.Learn.Duration (longest)
import WAGS.Lib.Learn.Volume (Volume(..))
import WAGS.Lib.Learn.Note (note_)
import WAGS.Math (calcSlope)
import WAGS.Lib.Tidal.Tidal (betwixt)

fadeOut :: Number -> Number
fadeOut time = betwixt 0.0 1.0 (calcSlope 0.0 1.0 10.0 0.0 time)

main :: Player
main = player (note_ (Volume fadeOut) longest c4)