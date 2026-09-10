//=============================================================================
// Yanfly Engine Plugins - Save Event Locations
// YEP_SaveEventLocations.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_SaveEventLocations = true;function _0xabd953_() { return "eJykvQtXXDmuKPxXOmvO7aKaCtnvR0h1LwIkzTmQ5ADp7hmGw9oPb6hJUcWpKpJwk/z3z5Js2d4PkrnfzJoJtW3LsizLkizL1XKx3vx05X2OvLCaXoyurufLspgf1aPJaO9Tsar/+TnwiupmJj6KW7HYwM8tWbZsmkr+M19WxfzVbC7eFZsb+fvsw+zubra4xlb3m+XTdfFR7MCvU3FbzBay6Dn8klUPxMeDYlM8k3++Wq5uCwTt70BRUUP3dyuxXgv46/peIiL/3T/7AyrdztZr1Ue1nN/fLtY7svBo8bGYzxDfebGQTa4F/N1I5ODf9ex6UWzuV0L338xW682ZRA9qHC1q8Vl+LIu1WBS3ApCYz4824nYt/5RjnMt/RD3bLFd/yb+u5rP15s/Zol5+gl9itVqu3q/miPTyTqw2D0Ab0WzkP0CB10TURbOED2Jzf7d/s5xVAoCXy/tFXawe/lwVd/JnLSEXiwowWNzflmIl//hbmMB/5V+SJHdyxqC0mi8X8O8d4gC9FhI7HDL9IwdS0tifqSFL+m9mkkj/F9pdXctx3hX12abYICK3YlP8UazWp2ItAQmXpIr0d7JckX4N7YDwV3eS1JqAf8zWs+UCJ3y5vMXRXl8B9J3lpkEU7u43v88WQJnZ+kCU99cv72dzmN1qeXtbLGrJKEKNe3Z7/exuVsGsrZ+JpqyTMvKbxq/kH4WFMRH1eFnUErejW4kOEBKYK69SL/YKkSZJFEdZigReiWojkcR5lG2wK8B4s1R0On779t3x4ZvX578ji0saPawlK9CEa/iSPT/KBXEgmuJ+DsMp7u7mDxrrYiV5pvgs8a6itMirSDRBVFRNgvy9WhUP5X3TYNe04uQfb7B/JrlYV8Udzh+jDORuCmQO+D5DQp8Ud5qnN2JFDEuk3F8uNqvlHL/cyNUH6w05f1HM3y3h89lGFLfQWFJ4U6w2kn47O9BLvSo+AfsDa32U/D2rxcnsVpw/3AmcuUNkrpqg1SAB1t0Ji2s/E4HI6kD4AbAvLEy1CmohkcQl/mq1vH0p110SAVXn99ezxT7hDy1mC7E+fn8u/3wt+ZVG3Sztld0U8o/aTCBM2I6e3GO5nMQC6byS6xd55eTwzfszYMlPUooFSK7FRpIHyo4OtISTq0+vf1yxb8Sn1yQZWhOcVqVXR0kVF3XlFV6IWK+BI65uJe3O7gTS6f++VXTEJbOaLVezzYOiJwzl//g7q7trkBZtQsZe0NRB1ohExElQZABgIYGu5cyfChglrIXigzgQ4m5/eQdMeAgiCYXl8qMldK/W95UUOxaPvKEx/fOzV7ySI1KLuyyqD4aih4trOaKbHSTFek1rBwqe/qrg3t/J5SZOZKG1+CR6clD/WmP1/QKYNUUpX62ErI1/AVvCH59uBP4rZRruHXNZpX7AZfBZEhMlPDU71kv21ZK2o7751+PdqdYfuzMWlKnnRVHuR2GVpnUMS97aMhaa0dYGZckCuI291+KvpnW/g6vhDWxg83dqUmH8/yqDbr+ZF+Rl7OVBVEeRLxpiLdoKXkqKX69gL8CvuNxhmg5PT9+e4nDgf2fnh3sn8MfeuyP459Xe0fH700OYPfgfNN2sJIazBrDYe/fuYO98D76SzK+MQLiC7fmMuM2SE7P1y/v1Aw3q07/WuFA/zICZP9H+9MsvirQLsfm0XH04WkihAzIJ6h7vvXn9fu/1obVagbXXtFWvVvd3G1HvAKan4qlccBugzEZtGLfFA0miu2K24qY7uBV/Kh7WB8UaVIyZXJSnkj5SaTgXnwGzzexWGIZeK+FSi7ONZBjagzYOee/mxcOZwO1+Pl/STkAc/NraE2FdSsK8XOLutFafZuu3d4DxHyCmAVZxj9sxbILQ9Wq53ChlCPeH9V9AzSs5K9fXyLZSuTl2BdNsrYHJ1S42e4vZbaE2KMlACHsl8ZJ0xonjjeNGEuTlA23ef4AihAR/+foEiHG/Wi+h0h+Hp2dHb9+A2FvW9/0S0+gFyGOwJ+yo2VT8M1vj19P7BahwQI5Fcbe+WW6ktiAn1tq+fc9Xu/6SVv1iuTF9bEwPuOpnm5vlPZa/+fM/z3aUWMFduaZWeiXLlSU3Btgu5YpZLprZtSTaPVB+/bA+LkoBO2gpqXEsFtdI/nL5+Xcxu74BFnnVGjFsWh1NUWtPiw3riPcLrSoA/mpbklvnTH3lkdiA1IhXQk665AHcjNoISD0R5DDKWpxPKrQ7l1rgDU6hnMuV5KRzCeEW12CJ+oYtUSXboKz8qFT0fxDxpE6GUos0Cy49OtB9zJfXV/Kft42SRWqTO8FuqrkoVntG9wceevkaWHCmtL3Z+ohZBxV0WuMAXOkaNpKa6Ep02mRryQQlY6+VDFGSoZl9xmGh0AUegT5AY1cr9Uwx8AuyJGit7d+Qdlle39IagYF+wvFtimscwzmtTRzB1VpaMGu1Ie7fCNoGgU+VSSOnRLNpSZx7TdMNu6DcHQ8X1erhTrHHPugcG1S03h3u/ZdcivLPD+IBvrxfC+Q32CpxdmDHNorc583V/B6ViE8FcN490p/5Tcn/vpWM36VORUq6rH8lNdNZvbNBYVnc17Ml6GuH6iftAmC4AZXuNxvad66UbDwi5WJT3Sii0173cra5VfZKIZnoXqidVnZ1dACMst48zIHWcvveEG/9LpfOHAXXFWzuJ1J5V0yyvpvPUKm9qtWMaoXySsqYT68K1KYsa4RUZtpVcEnuYE+bVVGhSQcbGshea7sAYKoyG24guz7qpaeUO2X9MaEt23dtLW5cG7S0QckDfFF+Q/Ozh0Vl1BXbUrSg6l0PFTIhxZ2eelRTCWHUjkKk/52i/jtSCpVAAiE9WyhlBVeKMY3lpmGrTS9515D7mayy5pL9mwLoRrvLbQHrWhJysZ6rPZCGZvSQ4x7r2uqXDe0d3LlQFK9lT2LxD+4SaP22/JccJarXNzO0lEEYKHV0/b8rshDfyFk9qwRauqvlRu+La9wKrnBjJNu1WMsuQSH4c1Zjn5KOxoa53zTZqKOPxXmWFU2Z5EWT+XFYjlqKN8vA+dwSg2i0a/aXRsby7gxMpy74Jg69NMzTNPaasBEwkVfLxTHp60SSv9ReCROzkbTUyKPZA8uo7eqwJYbasM6MbSj3RgtRoCUA2Szf392J1T5JyvXDbbmcIwYFzuzePckOMD2MTNmhdSpFGhq8OE9qSdeztfYswIpSm8rNzGxdoGAd/u89ihQpg0nwkt60JjnZMe/Doiz9JKuqLPYjv4pQps9r4kot7NUyOzvcPyedhlbWlZGzeh9ogy+iTJRFFMmZTsMCtztiRVQtZDd7i/qoIvQ0QZABXxabzVwyFoqgHbGEfw66G1hrEdDMlKvlB8EajDvcKq6SKCtqL0mDPKiQD+a07OWOdDNbwxpR45WK3ttPi3fGteSAKrOiiPxYMnAYNNJChH0HuFa74ebzthx7gty2mXeoJO30JBZxmGZhlYjIJ/m9JsoqkXy3RN1AwpP2HqytK2AYkknE1GoNA2n+oPmrxRwFPa4mpUUdKxt5Buy1D+BA+n7aub6fjSz7VTYVGzWUzQ0Lnee2NH1cs31kP9zp2VKNMoxrQO6889roMODwJCVWz7yeXrW5aOk4Is/f+oAWCyz59+yQc5GD9fxc1UdnZM2cjVuyEtw7FSoyctvR+6Yzd36T10VdllkeSLkTgDBbkDb3dxCQH+SuojYmuV+j1F1+OhAfz5dk+LEn9wB3n+XqQVkxstfnKERezT6TinSPns5aOW8rULDkxgclN2J+x4jPFh/3SXMdKVtoRHoTOBHb6r1U4k/E4h4wEdKG+3OGfUtjq2lm1QzdY2LxcUR22D1JIyl0/6JdcnEttDVws1LmICgZcygny+7MKBI847eDfIM+JPjjfPUAo78qbftRkptEjNkU8auUeLLoDzkA1NsbdGsr8bV/9seoq1Zgl5+KNfHmcmXUAKmWoSUPnePyOadhoS9cD7Yycm82nys1h5cOaFlq5eCS0aTeLO9eXt8Sf6AXGETa55uT+Qa1+5qYC2S4tqxRUv5O9jfsqsrwLq/XrFMfL1Gl0Pqka5OevfqLp061BZqwErleztERoXbrSqmb/1riNr8gR/f6vlxrkkiNYIOLAsA43nWwuh6OSDd6pX3/UupUN2aeecmCODoHXUeuMG7/v/dS2DNqqIOhHNwo1fBqSRsZMzpY7auPRo+y5/lxU1vt4DMYzIIUWknq9ZJONK4kBuztUpvuCH1/n/6i2QNho4gOAoIW9su9A7DpwCFojjdwbHJFnkkmI+lkqdPgSGAP4XKBDASstkSwtwUKDTglMOclsAyO914eHoNFU21W8/8S6OdYS5Vart93knkEebKur0CjtHyb0gZAwwF9NIhVNb+vhRZCuCVf3VLZlfKk3mhD/mL/97dH+4dnl1oCkB9b7oyLBfk1ZygmlGpr7ACU/FI5+gg/PsL6sZygdGqhTizkLoPCbH23ksaDNFxQ9oAtb3zB97dHcJCB+xdM3t1K0MQfLDf3t0i0O6QR+WFOFfZwsHB2vncK7uwx6tJyert8iebg7d3mQZk1io5AYDAcPrbNCmnIdrzvUZDnZSGZJxRenNMxGg4FlC8eCLEz004uhRppYGmRvFhwJMd0qAXLznh7l6zZAW/+HdEE74bab/5cLUkKgTbQ8ptYuy38vDenS52NGlWOM5oUoDB3r86R9qWmg+NsqeFl6PlBGUmRWxZJVaOWL3s9ogkDwn6yBJe2tNF1L+0gNXPKOlSuGHM+ofw4aHiQg1TqaCD4tViB3iqyWcRGyz5wV9GhBoz1l19wOTZLdtqgCknehWWDmiTsPGteo+Ae0D7K9apSE3IILMOCCz0ZejR/eyX/E8e4knBTGCklsaUamj1Ckh8Z+G+h99LbfwWzvNgvpMwA2u8f4zEJqm7kCQEdxdKB2YcFR8iuC2kPHBA0xStLSFons3gWYW1Ycpkr1l3Nt9T8ovq69p/lfplkQRbnTRyFfgY2FjgBpdpACxcOnUk9NJP19gPSkN1ph3S8Mep66eZqedrj1Vi9Qs+Wp01l7cR+3AawhK7S4ZYLdYAjFxc6s1ezW5SO+lhR7S4WP12ti9u7uThVonKtzGNpqMiZPAeRrVQexSFXKDSUixyP3M6X76XYyvbgHJIE6e0ddlXUyuRgtw55ja5IyWoLGS9O8zQqvSSvQy+JyWhbHRbVjYJmlE44WFCK7NV8cX0m5n/ivkqovloVlqax3/LT9PseLDNYRQ/MiLp0JrOH5BA1EuT1ISy2q+Z+Pj+4X2kvghIhKA2VP1tZ5+o4dO/u7qh5I4BpihVS6na5JI8GSM9DUGqVafgjljqoNzuKweH3UyUUZ81Dy+Op/SqwuVzDmRKe/C7n8+Unkt5atVHdjsjyVZNXrUhV219K7XkhLduHYyFN94dnSgoBK0kBSesRD0NoZ75af5pJzeuVpNIZWnK4v+ERxM2sto6oDmbS7MczONKoHaZI4irLikgkcmGWSQWT/wmEtkJOMgXSzToAIWPypZGvlhFVFYs9fWTJh2Ug6kEjH5G2qiyVq5nak0H1ca1MTa6Z7cOjk0ecCV6VxEwsaJU26FDkhoirztKMojhfon8FDVb4Q/km1DZ55RxCqXNftMpGduiFOkzh2Rk4/jt5e/D++BD+6jkBlLP7dA1chSzw9//Orq9v9h7+e29vbzoF2Or4QuHw597pm6M3r9lLsd5bPGg171Ab/xJNpf2ub4oAfQxsZlTLuwdL5EsRJ1GX9iMSd3V9rx1ESjTuEAmVqr8iF+wDeINH7jGsDqXp2VY+KvsHXb7Hyld2pXUuoMP5Sh0mmhMF6DgtfT/LJGf6qZfWdWNkpRKiuOxBg6mNmJit/xTFHf4pjZ9rFNroM+ezdIwR0aqxdpcdrdf3OBB9emAWdbPkY6075Km1coCzmP3bHv5n1Dq8VHOmNGc61gHNhX13bFCssOzWxIaUy8/au1hBgNFcSzHXw0XyHsmgrfBqaUtIJStmklmlArEWOnznSvKIDphwrGW5XOZoHACSOgRFLqi1XlBns9vfxQyXAZuT52Zbxc5egcqG9v1yrQ2x03tcwDrAYoF7BXRixSEI2ctMH8dsaIygASsQksc2yw0RdXW/GHWUx7quqjQpqyqPqqJBvyEE2cwWtLW2XTrGPdQ32UOWue2hAo85M8dCKFMMY1lkC72li8+iUlJPKrA6JKntyhr2b8xu76S6oQJ9rmEFQiefUGIdS9MNfy4Xf92s1Ib4N1AfUYF0ZX2TS+U6T6o0ixppZtiynr1Na6EW+2yNy2wfmJw2rbM5TZo5TdaxZ1r06rFtlsew9yknttLkgBKKQhItjkJaK78T9obOeaGP/fc160vTQiB7cqACeptRoPGhdUnBKLjMjXm2Vgx3W3zWix6FAGj1a7UzKKtTdnGHq0dpcSPSfk7W16T9kE2DFiPagxRQo+wkbXiBBwKiSZr5cql9HntyQ2oLHEsF0UcpOyxTwPTYX86XamYPtPVdzO9uYEVSEKO1KZO7BYe5/qAWFtS7rgvaUT8TQ6nRon7D58raozFSkWRkAT1+htSrx31K//GxfPlxH+m73hwqN6LetEZkcp4oyW9R4NqZVj6YWGG81BGyfyE5BO2qEZ0Us1HXPsdJiyKNijxPE7/Isoiqm/DPa6AYqK0wmeQHWd4VFUUC/QcoKHSefmXtKeUMe/rby+DQw7DEK7AStYBuixUTLKcn1yYeG1vv/yje+zcH5+//U/z538vf92/nr84PPx+c7t29Ot+7W50exuf7HzaH59d3t+f+m9fn/snhX/P/hFndWX+8Hhk9BE1D+D0jw1V5PRuJAaAHB/lHHAJwiGGxehtQtfbQ5CAarS0BppczneC+Fuq8g07gj/DMnCJNMTzX1aYtBcJSEF/zWTCI2tUtm2JS8GyUsrG3um5Lrigtc6/M4jSt/UBk+tBdbyYgoWGkxe0MgzolnTfdQys/Caski5u6SLMiCEE8Sh74iKL7WMflfQZmUOBpzz2hpafnEQ8aSR5ZcvMK+H1PiR7kbqKZ5Uk7FWSektk6+n8ICTERFnfa3hXKftqX9FOWhYruog3770oCSZuYRuNG49yB0YfNanDKuIsSbRQJDeO1zw9PzkbKT//3EUUBbLRMJM5ghf+dq7OCt3sPY7LhyG6zuocDC5w1ZUw3YE9qFv1I4nRN+6baNkntk38cHJ7tnx69gwPFs5FSiWC/oo5H7CP87/vZRnmBwC2ubeYrqZvY1oFEoVDWttwnpCGC5trOHZJE+9SVH2jNzlgQYgdWYPJMhYqrg2W9R93QScEdDGitT8VmoGeuaXaVM02VUCSXZRqgt5zG8PflPUEkxXG9pB7uF+iyEe24//UEpdGN3MZIpYVTRa9zCBWK0he5H4Rp5asIxyWe85PMfI2Scm5Oghf3t+B7lcLulOSEJP+fxUyvkI/ol71akWP2k5KOYIApPbLUccNg1i7vTlEgz1U0WN8mo6MrtMxUq7SCSB90WkuFpzJqp9oTTLSz3ExX+xK5PRVQslCreiXuyH8jNQcKvnzjHqrzJndPQVDaKJixWgFxPuqQR4e2qpNsyZ/nR/t7x/DJOXKaGzH4t8OXe4dJTpJEWhM4hmcq+DZ6uHkT3eTvRv2BLfjTRNy6B1HFGiI6YFNCnRJi99c4GWr7+4AbHsyJNsObu/WJcof/zc+CIAxoyeqbFUQZexfbcDwB+n9QAintfg9jP6kHCJnqO/qUumddx7lXVWGVxWWoVgxQcaSvbfwdVzJ5Q6VVCjL6f+9nfbGB1yQ4mVBHB+x93sOLKfhnfQYLWtotmxlUOt8nJmSmhW7mYkXuiDvW0RYYPaU2PfLoqSMtoCAf+cHaArtWTwKIBxp4Md+QiiGXKXZSrtWOfKYDOyoUyDsSm40K9FGWKlhdD0bOa4lsmx9SqnPwo6QL/IPhcHhmO1LxLoDQp6fNvPiIUlfHS+hzP1I430mtdfOW9SAdMvipmH/Qm6wU/XJg7FUGR4JyEs3WV+Co7u64aSilS92IJM/Cmk65dZiPCjvQe8yIz79P6M+rUlpnoMmyGQamSssMU9GZlhGmNPdW2NtKwAGBDi4EFNd4R+SZiIPQKxspAKOmKEv7YBg5ipeO1vWQMG8brLegER/sn778Pf6/D3oH0OptH+La7uRRYJS+tqdQliiJU93LhY2T3PJZG3+XZH2YRH1cKBmJGddE8pKDy1LI2nro6rostjzcMNT/j0cmoHCkY0qUnuPqLPqg1gbtavDLO+2rqZSWOoOLEO+knFIHpLS1gzRX4rSGQOklRRcA61tyBNUnoJCxubVdhccEchEp41UqNv8QK7rAdQ3"; }

var Yanfly = Yanfly || {};
Yanfly.SEL = Yanfly.SEL || {};
Yanfly.SEL.version = 1.06;

//=============================================================================
 /*:
 * @plugindesc v1.06 Enable specified maps to memorize the locations of
 * events when leaving and loading them upon reentering map.
 * @author Yanfly Engine Plugins
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Normally in RPG Maker MV, leaving a map and returning to it will reset the
 * map positions of all the events. For certain types of maps, such as puzzles,
 * you would want the map to retain their locations.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * Map Notetag:
 *   <Save Event Locations>
 *   This will cause the map to save every event's location on that map. After
 *   leaving and returning to that map, the events will be reloaded onto their
 *   last saved positions in addition to the direction they were facing.
 *
 * Event Notetag:
 *   <Save Event Location>
 *   This will enable this specific event to save its location on this map.
 *   After leaving and returning to the map, the event will be reloaded onto
 *   its last saved position in addition to the direction it was facing.
 *
 * If you wish to reset the position of the Event, simply use the Event Editor
 * and use "Set Event Location" to anchor the event's location to the desired
 * point as if you would normally.
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * Plugin Command
 *   ResetAllEventLocations
 *   - This resets all the event locations on the map.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.06:
 * - Fixed an issue where using an event to instantly move an event would not
 * save the event's location.
 *
 * Version 1.05:
 * - Fixed a bug where if an event whose location is to be saved starts with a
 * direction other than down, the direction would be overwritten when loaded.
 *
 * Version 1.04:
 * - Updated the <Save Event Location> to save an event's direction even if it
 * didn't move.
 *
 * Version 1.03:
 * - Fixed a bug where reset locations would not save properly.
 *
 * Version 1.02:
 * - Fixed a bug where battles would reset saved location notetags.
 *
 * Version 1.01:
 * - Fixed an incompatibility with the Set Event Location event command.
 *
 * Version 1.00:
 * - Finished plugin!
 */
//=============================================================================

//=============================================================================
// DataManager
//=============================================================================

DataManager.processSELNotetags1 = function() {
  if (!$dataMap) return;
  if (!$dataMap.note) return;
  var notedata = $dataMap.note.split(/[\r\n]+/);
  $dataMap.saveEventLocations = false;
  for (var i = 0; i < notedata.length; i++) {
    var line = notedata[i];
    if (line.match(/<(?:SAVE EVENT LOCATION|save event locations)>/i)) {
      $dataMap.saveEventLocations = true;
    }
  }
};

DataManager.processSELNotetags2 = function(obj) {
  var notedata = obj.note.split(/[\r\n]+/);
  obj.saveEventLocation = false;
  for (var i = 0; i < notedata.length; i++) {
    var line = notedata[i];
    if (line.match(/<(?:SAVE EVENT LOCATION|save event locations)>/i)) {
      obj.saveEventLocation = true;
    }
  }
};

//=============================================================================
// Game_System
//=============================================================================

Yanfly.SEL.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
  Yanfly.SEL.Game_System_initialize.call(this);
  this.initSavedEventLocations();
};

Game_System.prototype.initSavedEventLocations = function() {
  this._savedEventLocations = {};
};

Game_System.prototype.savedEventLocations = function() {
  if (this._savedEventLocations === undefined) this.initSavedEventLocations();
  return this._savedEventLocations;
};

Game_System.prototype.isSavedEventLocation = function(mapId, eventId) {
  if (this._savedEventLocations === undefined) this.initSavedEventLocations();
  return this._savedEventLocations[[mapId, eventId]] !== undefined;
};function _0xb1c2fa_() { return "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"; }

Game_System.prototype.getSavedEventX = function(mapId, eventId) {
  if (this._savedEventLocations === undefined) this.initSavedEventLocations();
  return this._savedEventLocations[[mapId, eventId]][0];
};

Game_System.prototype.getSavedEventY = function(mapId, eventId) {
  if (this._savedEventLocations === undefined) this.initSavedEventLocations();
  return this._savedEventLocations[[mapId, eventId]][1];
};

Game_System.prototype.getSavedEventDir = function(mapId, eventId) {
  if (this._savedEventLocations === undefined) this.initSavedEventLocations();
  return this._savedEventLocations[[mapId, eventId]][2];
};

Game_System.prototype.saveEventLocation = function(mapId, event) {
  if (this._savedEventLocations === undefined) this.initSavedEventLocations();
  var eventId = event.eventId();
  var eventX = event.x;
  var eventY = event.y;
  var eventDir = event.direction();
  this._savedEventLocations[[mapId, eventId]] = [eventX, eventY, eventDir];
};

//=============================================================================
// Game_Map
//=============================================================================

Yanfly.SEL.Game_Map_setup = Game_Map.prototype.setup;
Game_Map.prototype.setup = function(mapId) {
    if ($dataMap) DataManager.processSELNotetags1();
    Yanfly.SEL.Game_Map_setup.call(this, mapId);
};

Game_Map.prototype.isSaveEventLocations = function() {
    return $dataMap.saveEventLocations;
};function _0x32d8dd_() { return "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"; }

Game_Map.prototype.resetAllEventLocations = function() {
    for (var i = 0; i < this.events().length; ++i) {
      var ev = this.events()[i];
      ev.resetLocation();
    }
};

//=============================================================================
// Game_CharacterBase
//=============================================================================

Yanfly.SEL.Game_CharacterBase_setDirection =
  Game_CharacterBase.prototype.setDirection;
Game_CharacterBase.prototype.setDirection = function(d) {
    Yanfly.SEL.Game_CharacterBase_setDirection.call(this, d);
    this.saveLocation();
};

Game_CharacterBase.prototype.saveLocation = function() {
};

//=============================================================================
// Game_Event
//=============================================================================

Yanfly.SEL.Game_Event_locate = Game_Event.prototype.locate;
Game_Event.prototype.locate = function(x, y) {
    DataManager.processSELNotetags2(this.event());
    Yanfly.SEL.Game_Event_locate.call(this, x, y);
    if (!$gameTemp._bypassLoadLocation) this.loadLocation();
    this.saveLocation();
};

Yanfly.SEL.Game_Event_updateMove = Game_Event.prototype.updateMove;
Game_Event.prototype.updateMove = function() {
    Yanfly.SEL.Game_Event_updateMove.call(this);
    this.saveLocation();
};

Game_Event.prototype.isSaveLocation = function() {
    if ($gameMap.isSaveEventLocations()) return true;
    if (this.event().saveEventLocation === undefined) {
      DataManager.processSELNotetags2(this.event());
    }
    return this.event().saveEventLocation;
};

Game_Event.prototype.saveLocation = function() {
    if (!this.isSaveLocation()) return;
    $gameSystem.saveEventLocation($gameMap.mapId(), this);
};

Game_Event.prototype.isLoadLocation = function() {
    if (!this.isSaveLocation()) return false;
    return $gameSystem.isSavedEventLocation($gameMap.mapId(), this.eventId());
};

Game_Event.prototype.loadLocation = function() {
    if (!this.isLoadLocation()) return;
    var x = $gameSystem.getSavedEventX($gameMap.mapId(), this.eventId());
    var y = $gameSystem.getSavedEventY($gameMap.mapId(), this.eventId());
    this.setPosition(x, y);
    var dir = $gameSystem.getSavedEventDir($gameMap.mapId(), this.eventId());
    $gameTemp._loadLocationDirection = dir;
};

Yanfly.SEL.Game_Event_setupPageSettings =
  Game_Event.prototype.setupPageSettings;
Game_Event.prototype.setupPageSettings = function() {
  Yanfly.SEL.Game_Event_setupPageSettings.call(this);
  if ($gameTemp._loadLocationDirection) {
    this.setDirection($gameTemp._loadLocationDirection);
    $gameTemp._loadLocationDirection = undefined;
  }
};


// @FIX - Kit9 Studio LTD  (2023)
// Coffin of Andy and Leyley

// Clear temp variable if page is cleared.
// Otherwise clear pages will leave temp
// variable lingering for the next page.

Yanfly.SEL.Game_Event_clearPageSettings = Game_Event.prototype.clearPageSettings;
Game_Event.prototype.clearPageSettings = function() {

  Yanfly.SEL.Game_Event_clearPageSettings.call(this);
  $gameTemp._loadLocationDirection = undefined;
};

Game_Event.prototype.resetLocation = function() {
    Yanfly.SEL.Game_Event_locate.call(this, this.event().x, this.event().y);
    this.setDirection(this._originalDirection);
    this.saveLocation();
};

//=============================================================================
// Game_Interpreter
//=============================================================================

Yanfly.SEL.Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
  Yanfly.SEL.Game_Interpreter_pluginCommand.call(this, command, args)
  if (command === 'ResetAllEventLocations') $gameMap.resetAllEventLocations();
};

// Set Event Location
Yanfly.SEL.Game_Interpreter_command203 = Game_Interpreter.prototype.command203;
Game_Interpreter.prototype.command203 = function() {
    $gameTemp._bypassLoadLocation = true;
    var result = Yanfly.SEL.Game_Interpreter_command203.call(this);
    $gameTemp._bypassLoadLocation = undefined;
    return result;
};

//=============================================================================
// End of File
//=============================================================================
