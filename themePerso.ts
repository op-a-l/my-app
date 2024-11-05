
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #ff9efc 
		"--color-primary-50": "255 240 255", // #fff0ff
		"--color-primary-100": "255 236 254", // #ffecfe
		"--color-primary-200": "255 231 254", // #ffe7fe
		"--color-primary-300": "255 216 254", // #ffd8fe
		"--color-primary-400": "255 187 253", // #ffbbfd
		"--color-primary-500": "255 158 252", // #ff9efc
		"--color-primary-600": "230 142 227", // #e68ee3
		"--color-primary-700": "191 119 189", // #bf77bd
		"--color-primary-800": "153 95 151", // #995f97
		"--color-primary-900": "125 77 123", // #7d4d7b
		// secondary | #1aff34 
		"--color-secondary-50": "221 255 225", // #ddffe1
		"--color-secondary-100": "209 255 214", // #d1ffd6
		"--color-secondary-200": "198 255 204", // #c6ffcc
		"--color-secondary-300": "163 255 174", // #a3ffae
		"--color-secondary-400": "95 255 113", // #5fff71
		"--color-secondary-500": "26 255 52", // #1aff34
		"--color-secondary-600": "23 230 47", // #17e62f
		"--color-secondary-700": "20 191 39", // #14bf27
		"--color-secondary-800": "16 153 31", // #10991f
		"--color-secondary-900": "13 125 25", // #0d7d19
		// tertiary | #f1ff29 
		"--color-tertiary-50": "253 255 223", // #fdffdf
		"--color-tertiary-100": "252 255 212", // #fcffd4
		"--color-tertiary-200": "252 255 202", // #fcffca
		"--color-tertiary-300": "249 255 169", // #f9ffa9
		"--color-tertiary-400": "245 255 105", // #f5ff69
		"--color-tertiary-500": "241 255 41", // #f1ff29
		"--color-tertiary-600": "217 230 37", // #d9e625
		"--color-tertiary-700": "181 191 31", // #b5bf1f
		"--color-tertiary-800": "145 153 25", // #919919
		"--color-tertiary-900": "118 125 20", // #767d14
		// success | #7ad3ff 
		"--color-success-50": "235 248 255", // #ebf8ff
		"--color-success-100": "228 246 255", // #e4f6ff
		"--color-success-200": "222 244 255", // #def4ff
		"--color-success-300": "202 237 255", // #caedff
		"--color-success-400": "162 224 255", // #a2e0ff
		"--color-success-500": "122 211 255", // #7ad3ff
		"--color-success-600": "110 190 230", // #6ebee6
		"--color-success-700": "92 158 191", // #5c9ebf
		"--color-success-800": "73 127 153", // #497f99
		"--color-success-900": "60 103 125", // #3c677d
		// warning | #ffbb00 
		"--color-warning-50": "255 245 217", // #fff5d9
		"--color-warning-100": "255 241 204", // #fff1cc
		"--color-warning-200": "255 238 191", // #ffeebf
		"--color-warning-300": "255 228 153", // #ffe499
		"--color-warning-400": "255 207 77", // #ffcf4d
		"--color-warning-500": "255 187 0", // #ffbb00
		"--color-warning-600": "230 168 0", // #e6a800
		"--color-warning-700": "191 140 0", // #bf8c00
		"--color-warning-800": "153 112 0", // #997000
		"--color-warning-900": "125 92 0", // #7d5c00
		// error | #3d0ac7 
		"--color-error-50": "226 218 247", // #e2daf7
		"--color-error-100": "216 206 244", // #d8cef4
		"--color-error-200": "207 194 241", // #cfc2f1
		"--color-error-300": "177 157 233", // #b19de9
		"--color-error-400": "119 84 216", // #7754d8
		"--color-error-500": "61 10 199", // #3d0ac7
		"--color-error-600": "55 9 179", // #3709b3
		"--color-error-700": "46 8 149", // #2e0895
		"--color-error-800": "37 6 119", // #250677
		"--color-error-900": "30 5 98", // #1e0562
		// surface | #8fffbf 
		"--color-surface-50": "238 255 245", // #eefff5
		"--color-surface-100": "233 255 242", // #e9fff2
		"--color-surface-200": "227 255 239", // #e3ffef
		"--color-surface-300": "210 255 229", // #d2ffe5
		"--color-surface-400": "177 255 210", // #b1ffd2
		"--color-surface-500": "143 255 191", // #8fffbf
		"--color-surface-600": "129 230 172", // #81e6ac
		"--color-surface-700": "107 191 143", // #6bbf8f
		"--color-surface-800": "86 153 115", // #569973
		"--color-surface-900": "70 125 94", // #467d5e
		
	}
}