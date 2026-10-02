# Portfolio design system

Shared tokens and component roles live in `src/styles/globals.css`; Tailwind exposes the semantic `accent`, `ink`, `muted`, and `surface` colors. Change these centrally rather than adding per-component shades.

| Role | Choice |
| --- | --- |
| Accent | Original blue #1d4ed8; #93c5fd in dark mode |
| Palette | Warm page background, neutral ink and muted text, white/charcoal surfaces |
| Display | Instrument Serif, 48–96px, normal weight, 1.05 line height |
| Section | Instrument Serif, 36–48px, 1.1 line height |
| Case/project title | Instrument Serif, 32–40px; featured case 40–60px |
| Body | DM Sans, 16px; lead 18–20px; metadata 14px |
| Rhythm | 4/8px spacing increments; section padding 48px mobile / 64px desktop |
| Controls/surfaces | 4px corners, 1px neutral borders, 44px control targets |
| Interaction | 150ms color/border changes; blue focus outline; reduced-motion override |

Use `display-title`, `section-title`, `case-title`, `feature-title`, `item-title`, `lead`, `body-copy`, `metadata`, and `metric` for repeated typography roles. Serif uses its real 400 weight, including italic; avoid synthetic bold.

Use `btn` with `btn-primary` or `btn-secondary`, `text-link`, `nav-link`, `icon-button`, `choice-button`, and `field` for interactive elements. Active navigation uses `aria-current`; selected choices use `aria-pressed`. Use `surface` and `divider` for borders. Primary actions use blue; secondary actions use a neutral outline. Hover changes color or border rather than moving or zooming content.

The homepage keeps open case-study columns, aligned supporting metrics, and a static closer crop of the dashboard. The featured case and footer retain contrasting neutral backgrounds. Green result indicators and yellow/rose collection ratings retain their meaning. Real portraits remain circular; carousel position dots remain small circles.

The temporary query-based design variant has been removed. The default preview now uses this system. No dependencies were added; Framer Motion remains in use for the project carousel and collection views.
