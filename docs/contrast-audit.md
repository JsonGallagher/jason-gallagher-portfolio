# Contrast audit — current local design system

Audited 2026-10-01. No application styles changed during this audit.

## Verdict

The blue palette passes WCAG AA text contrast on every solid page/surface background in use. All sampled text passes AA, including muted body copy, metadata, the inverted featured case, the footer, buttons, and selected-filter labels. Some control boundaries, selected-state cues, and Shelf graphics need refinement. Focus over screenshots cannot be guaranteed by a single theme-blue outline.

## Standard and scope

WCAG AA requires 4.5:1 for ordinary text, 3:1 for large text (24px regular or 18.67px bold), and 3:1 for essential non-text controls/state indicators. Comparisons use unrounded ratios; displayed values are rounded. Decorative dividers, neutral card borders, and borders around text-labelled buttons are not automatically failures.

Sources: [text contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html), [non-text contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html), [use of color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html).

Method: read computed DOM colors on Home, Projects, and Shelf in both themes; include collection modals, a rated item, active filters and tabs, and a keyboard focus indicator. Composite CSS alpha against ancestor backgrounds, then calculate WCAG sRGB relative luminance. Hover states below are calculated from the actual stylesheet, not browser-forced hover states. Shared project-card colors are reviewed across their common component. Ignore transient reveal-animation opacity.

Photographs and screenshots are not pixel-audited here. Translucent badges over images and carousel focus/dots require image-dependent treatment; ancestor-background calculations alone cannot certify them. This is a color-contrast audit, not a full accessibility certification.

## Blue palette and typography states

| Theme | Use | Foreground | Background | Ratio | Text AA |
| --- | --- | --- | --- | ---: | --- |
| light | Blue/page | #1d4ed8 | #f1f0ed | 5.88:1 | Pass |
| light | Blue/surface | #1d4ed8 | #ffffff | 6.70:1 | Pass |
| light | Hover blue/page | #1e40af | #f1f0ed | 7.65:1 | Pass |
| light | Hover blue/surface | #1e40af | #ffffff | 8.72:1 | Pass |
| light | Primary text/default | #ffffff | #1d4ed8 | 6.70:1 | Pass |
| light | Primary text/hover | #ffffff | #1e40af | 8.72:1 | Pass |
| light | Secondary hover/page | #1d4ed8 | #e6e8ec | 5.46:1 | Pass |
| light | Secondary hover/surface | #1d4ed8 | #f4f6fd | 6.21:1 | Pass |
| light | Choice active | #1d4ed8 | #e0e3eb | 5.22:1 | Pass |
| light | Icon hover/page | #1d4ed8 | #e2e5ec | 5.30:1 | Pass |
| light | Icon hover/surface | #1d4ed8 | #eff3fc | 6.02:1 | Pass |
| light | Body/page | #242423 | #f1f0ed | 13.63:1 | Pass |
| light | Muted/page | #6b6b6b | #f1f0ed | 4.68:1 | Pass |
| light | Muted/surface | #6b6b6b | #ffffff | 5.33:1 | Pass |
| dark | Blue/page | #93c5fd | #1a1a1a | 9.65:1 | Pass |
| dark | Blue/surface | #93c5fd | #232323 | 8.72:1 | Pass |
| dark | Hover blue/page | #bfdbfe | #1a1a1a | 12.25:1 | Pass |
| dark | Hover blue/surface | #bfdbfe | #232323 | 11.06:1 | Pass |
| dark | Primary text/default | #1a1a1a | #93c5fd | 9.65:1 | Pass |
| dark | Primary text/hover | #1a1a1a | #bfdbfe | 12.25:1 | Pass |
| dark | Secondary hover/page | #93c5fd | #202325 | 8.80:1 | Pass |
| dark | Secondary hover/surface | #93c5fd | #292b2e | 7.87:1 | Pass |
| dark | Choice active | #93c5fd | #24282c | 8.26:1 | Pass |
| dark | Icon hover/page | #93c5fd | #22262a | 8.44:1 | Pass |
| dark | Icon hover/surface | #93c5fd | #2b2e32 | 7.54:1 | Pass |
| dark | Body/page | #f1f0ed | #1a1a1a | 15.27:1 | Pass |
| dark | Muted/page | #bebebb | #1a1a1a | 9.34:1 | Pass |
| dark | Muted/surface | #bebebb | #232323 | 8.44:1 | Pass |

Footer link text is 9.65:1 and hover text 12.25:1 in both themes, because the footer always uses the charcoal surface and pale blue. Normal green “Shipped” text is 5.02:1 on white and 9.02:1 on charcoal.

## Control and indicator calculations

| Theme | Use | Foreground | Background | Ratio | 3:1 threshold |
| --- | --- | --- | --- | ---: | --- |
| light | Link underline/page | #9cafe5 | #f1f0ed | 1.90:1 | Below |
| light | Link underline/surface | #a5b8ef | #ffffff | 1.96:1 | Below |
| light | Input boundary/outside page | #dedede | #f1f0ed | 1.18:1 | Below |
| light | Input boundary/inside field | #dedede | #ffffff | 1.34:1 | Below |
| light | Input hover boundary/outside page | #8ea6ec | #f1f0ed | 2.08:1 | Below |
| light | Input hover boundary/inside field | #8ea6ec | #ffffff | 2.37:1 | Below |
| light | Selected-choice fill/page | #e0e3eb | #f1f0ed | 1.13:1 | Below |
| light | Selected-choice border/page | #afbee6 | #f1f0ed | 1.63:1 | Below |
| light | Selected-choice border/fill | #afbee6 | #e0e3eb | 1.45:1 | Below |
| light | Focus outline/page | #1d4ed8 | #f1f0ed | 5.88:1 | Pass |
| light | Focus outline/surface | #1d4ed8 | #ffffff | 6.70:1 | Pass |
| light | Carousel outline/dark screenshot example | #1d4ed8 | #1a1a1a | 2.60:1 | Below |
| light | Carousel outline/light screenshot example | #1d4ed8 | #ffffff | 6.70:1 | Pass |
| dark | Link underline/page | #4a5e75 | #1a1a1a | 2.62:1 | Below |
| dark | Link underline/surface | #50647a | #232323 | 2.57:1 | Below |
| dark | Input boundary/outside page | #484847 | #1a1a1a | 1.90:1 | Below |
| dark | Input boundary/inside field | #484847 | #232323 | 1.72:1 | Below |
| dark | Input hover boundary/outside page | #5b7490 | #1a1a1a | 3.60:1 | Pass |
| dark | Input hover boundary/inside field | #5b7490 | #232323 | 3.25:1 | Pass |
| dark | Selected-choice fill/page | #24282c | #1a1a1a | 1.17:1 | Below |
| dark | Selected-choice border/page | #404f60 | #1a1a1a | 2.07:1 | Below |
| dark | Selected-choice border/fill | #404f60 | #24282c | 1.78:1 | Below |
| dark | Focus outline/page | #93c5fd | #1a1a1a | 9.65:1 | Pass |
| dark | Focus outline/surface | #93c5fd | #232323 | 8.72:1 | Pass |
| dark | Carousel outline/dark screenshot example | #93c5fd | #1a1a1a | 9.65:1 | Pass |
| dark | Carousel outline/light screenshot example | #93c5fd | #ffffff | 1.80:1 | Below |
| light | Footer underline | #4a5e75 | #1a1a1a | 2.62:1 | Below |
| dark | Footer underline | #4a5e75 | #1a1a1a | 2.62:1 | Below |
| both | White heart badge over #000000 | #ffffff | #e26678 | 3.29:1 | Pass |
| both | White heart badge over #ffffff | #ffffff | #fb7f91 | 2.45:1 | Below |

The selected-choice text passes, but the state is communicated by hue and a low-contrast tinted fill/border; add a shape cue such as an underline/check and use full-contrast blue for that indicator. Active navigation also benefits from an underline rather than hue alone.

The faint link underline is worth strengthening to full opacity, especially because blue and adjacent muted text do not differ by 3:1. A visible underline provides the non-color cue; the current semi-transparent treatment is weaker than the text.

The search field has a weak boundary in both themes. Its internal/external backgrounds also differ by only 1.14:1 in light and 1.11:1 in dark. Placeholder text is readable, but does not clearly distinguish a text input from static text. Use a separate control-border token that meets 3:1; decorative borders can stay quiet.

Secondary button boundaries are decorative when readable button text identifies the control; their low border ratio is not itself a failure. Hover is supplemental and need not differ by 3:1 from the resting state, but text and essential graphics must retain their contrast.

## Shelf graphics

| Graphic | Light | Dark | Assessment |
| --- | ---: | ---: | --- |
| Life-Changing filter star, idle | 1.68:1 | 9.08:1 | Weak in light; label repeats meaning |
| Life-Changing filter star, selected | 1.19:1 | 9.73:1 | Weak in light; label repeats meaning |
| Rating filled star / modal | 1.92:1 | 8.19:1 | Light visual rating needs a darker color |
| Rating empty star / modal | 1.22:1 | 1.94:1 | Weak in both; use a visible empty outline |
| Liked filter heart, idle | 3.22:1 | 4.74:1 | Pass |
| White heart / rose badge | image-dependent | image-dependent | Worst-case 2.45:1; use an opaque darker badge |
| Brown star / yellow badge | image-dependent | image-dependent | 4.56–5.88:1 over black/white image extremes |

The numeric rating remains readable. Filter-label text also passes, so redundant filter icons should not be mistaken for text failures. Image badges and the rating graphics themselves still deserve stronger contrast.

## Recommended changes

Keep the blue. Add an accessible control-border token for fields; strengthen active indicators and link underlines; use a two-tone focus ring on image controls; darken yellow in light mode; make empty-star outlines visible; and give heart badges an opaque darker rose background. Do not increase every decorative separator to 3:1.

## All measured distinct text and icon color pairs

| Theme | Kind | Foreground | Background | Ratio | Threshold | Example |
| --- | --- | --- | --- | ---: | ---: | --- |
| dark | icon | #4ade80 | #1a1a1a | 9.99:1 | 3:1 | SVG icon |
| dark | icon | #5f4e1b | #232323 | 1.94:1 | 3:1 | SVG icon |
| dark | icon | #713f12 | #e5bb17 | 4.74:1 | 3:1 | SVG icon |
| dark | icon | #93c5fd | #22262a | 8.44:1 | 3:1 | SVG icon |
| dark | icon | #93c5fd | #24282c | 8.26:1 | 3:1 | SVG icon |
| dark | icon | #bebebb | #1a1a1a | 9.34:1 | 3:1 | SVG icon |
| dark | icon | #eab308 | #1a1a1a | 9.08:1 | 3:1 | SVG icon |
| dark | icon | #eab308 | #232323 | 8.20:1 | 3:1 | SVG icon |
| dark | icon | #f1f0ed | #1a1a1a | 15.27:1 | 3:1 | SVG icon |
| dark | icon | #f1f0ed | #22262a | 13.36:1 | 3:1 | SVG icon |
| dark | icon | #f1f0ed | #232323 | 13.79:1 | 3:1 | SVG icon |
| dark | icon | #f43f5e | #1a1a1a | 4.74:1 | 3:1 | SVG icon |
| dark | icon | #facc15 | #24282c | 9.73:1 | 3:1 | SVG icon |
| dark | icon | #ffffff | #1a1a1a | 17.40:1 | 3:1 | SVG icon |
| dark | icon | #ffffff | #e6697b | 3.14:1 | 3:1 | SVG icon |
| dark | text | #1a1a1a | #93c5fd | 9.65:1 | 4.5:1 | Get in touch |
| dark | text | #1a1a1a | #f1f0ed | 15.27:1 | 4.5:1 | Skip to content |
| dark | text | #242423 | #f1f0ed | 13.63:1 | 3:1 | 2× |
| dark | text | #242423 | #f1f0ed | 13.63:1 | 4.5:1 | RE/MAX Properties |
| dark | text | #4ade80 | #232323 | 9.02:1 | 4.5:1 | Shipped |
| dark | text | #6b6b6b | #f1f0ed | 4.68:1 | 4.5:1 | I shifted Google and Meta spend to higher-converting audiences, then expand |
| dark | text | #93c5fd | #1a1a1a | 9.65:1 | 3:1 | 21% |
| dark | text | #93c5fd | #1a1a1a | 9.65:1 | 4.5:1 | Explore the project |
| dark | text | #93c5fd | #24282c | 8.26:1 | 4.5:1 | All |
| dark | text | #bbbab8 | #1a1a1a | 9.02:1 | 4.5:1 | 2026 |
| dark | text | #bebebb | #1a1a1a | 9.34:1 | 4.5:1 | 1 of 32 films |
| dark | text | #bebebb | #232323 | 8.44:1 | 4.5:1 | / |
| dark | text | #bebebb | #252525 | 8.18:1 | 4.5:1 | Range: Why Generalists Triumph in a Specialized World |
| dark | text | #f1f0ed | #1a1a1a | 15.27:1 | 3:1 | $300M+ |
| dark | text | #f1f0ed | #1a1a1a | 15.27:1 | 4.5:1 | 8½ |
| dark | text | #f1f0ed | #232323 | 13.79:1 | 3:1 | Beverly Hills Cop |
| dark | text | #f1f0ed | #232323 | 13.79:1 | 4.5:1 | Approach |
| dark | text | #f1f0ed | #393939 | 10.13:1 | 4.5:1 | Ability |
| light | icon | #15803d | #f1f0ed | 4.40:1 | 3:1 | SVG icon |
| light | icon | #1d4ed8 | #e0e3eb | 5.22:1 | 3:1 | SVG icon |
| light | icon | #242423 | #e2e5ec | 12.29:1 | 3:1 | SVG icon |
| light | icon | #242423 | #f1f0ed | 13.63:1 | 3:1 | SVG icon |
| light | icon | #242423 | #ffffff | 15.54:1 | 3:1 | SVG icon |
| light | icon | #6b6b6b | #f1f0ed | 4.68:1 | 3:1 | SVG icon |
| light | icon | #713f12 | #f8ce29 | 5.73:1 | 3:1 | SVG icon |
| light | icon | #eab308 | #f1f0ed | 1.68:1 | 3:1 | SVG icon |
| light | icon | #eab308 | #ffffff | 1.92:1 | 3:1 | SVG icon |
| light | icon | #f43f5e | #f1f0ed | 3.22:1 | 3:1 | SVG icon |
| light | icon | #f9e8b5 | #ffffff | 1.22:1 | 3:1 | SVG icon |
| light | icon | #facc15 | #e0e3eb | 1.19:1 | 3:1 | SVG icon |
| light | icon | #ffffff | #1a1a1a | 17.40:1 | 3:1 | SVG icon |
| light | icon | #ffffff | #f97c8e | 2.52:1 | 3:1 | SVG icon |
| light | icon | #ffffff | #fa7e90 | 2.48:1 | 3:1 | SVG icon |
| light | text | #15803d | #ffffff | 5.02:1 | 4.5:1 | Shipped |
| light | text | #1d4ed8 | #e0e3eb | 5.22:1 | 4.5:1 | All |
| light | text | #1d4ed8 | #f1f0ed | 5.88:1 | 3:1 | 21% |
| light | text | #1d4ed8 | #f1f0ed | 5.88:1 | 4.5:1 | Explore the project |
| light | text | #242423 | #f1f0ed | 13.63:1 | 3:1 | $300M+ |
| light | text | #242423 | #f1f0ed | 13.63:1 | 4.5:1 | 8½ |
| light | text | #242423 | #ffffff | 15.54:1 | 3:1 | Beverly Hills Cop |
| light | text | #242423 | #ffffff | 15.54:1 | 4.5:1 | Approach |
| light | text | #6b6b6b | #f1f0ed | 4.68:1 | 4.5:1 | 1 of 32 films |
| light | text | #6b6b6b | #ffffff | 5.33:1 | 4.5:1 | / |
| light | text | #93c5fd | #1a1a1a | 9.65:1 | 4.5:1 | X (Twitter) |
| light | text | #bbbab8 | #1a1a1a | 9.02:1 | 4.5:1 | 2026 |
| light | text | #c6c5c3 | #1a1a1a | 10.10:1 | 4.5:1 | I shifted Google and Meta spend to higher-converting audiences, then expand |
| light | text | #f1f0ed | #1a1a1a | 15.27:1 | 3:1 | 2× |
| light | text | #f1f0ed | #1a1a1a | 15.27:1 | 4.5:1 | RE/MAX Properties |
| light | text | #ffffff | #1d4ed8 | 6.70:1 | 4.5:1 | Get in touch |

Icon rows on translucent image badges show the DOM background composite only; use the worst-case image checks above for the badge conclusion. Green arrows are decorative/redundant to adjacent result labels. Empty-star and filter icons are explicitly classified above rather than treating every SVG below 3:1 as a universal WCAG failure.
