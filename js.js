"use strict";

const Config = {
	PALETTES: {
		Acorn: {
			"BBC Micro": [
				"#000000",
				"#FF0000",
				"#00FF00",
				"#FFFF00",
				"#0000FF",
				"#FF00FF",
				"#00FFFF",
				"#FFFFFF",
				"#800000",
				"#008000",
				"#808000",
				"#000080",
				"#800080",
				"#008080",
				"#808080",
				"#C0C0C0"
			],
			Archimedes: [
				"#000000",
				"#0000FF",
				"#00FF00",
				"#00FFFF",
				"#FF0000",
				"#FF00FF",
				"#FFFF00",
				"#FFFFFF",
				"#808080",
				"#000080",
				"#008000",
				"#008080",
				"#800000",
				"#800080",
				"#808000",
				"#C0C0C0"
			]
		},
		Amstrad: {
			"CPC 464": [
				"#000000",
				"#000080",
				"#0000FF",
				"#800000",
				"#800080",
				"#808000",
				"#808080",
				"#C0C0C0",
				"#FF0000",
				"#FF00FF",
				"#FFFF00",
				"#FFFFFF",
				"#008000",
				"#008080",
				"#00FF00",
				"#00FFFF",
				"#808040",
				"#804000",
				"#FF8040",
				"#004000",
				"#404000",
				"#804040",
				"#404080",
				"#408080",
				"#408040",
				"#804080",
				"#FF8080",
				"#80FF80",
				"#FFFF80",
				"#80FFFF",
				"#FF80FF",
				"#8080FF"
			]
		},
		Apple: {
			"Apple II": [
				"#000000",
				"#901740",
				"#4074A9",
				"#D0D0D0",
				"#1A1C1A",
				"#4B4B4B",
				"#FFFFFF",
				"#FF4A4A",
				"#8DFF4A",
				"#4A4AFF",
				"#FF4AFF",
				"#4AFFFF",
				"#FFFF4A",
				"#FF8D4A",
				"#8D8DFF",
				"#FF8D8A"
			],
			"Apple IIGS": [
				"#000000",
				"#DD0033",
				"#880000",
				"#FF6666",
				"#007700",
				"#00DD00",
				"#008800",
				"#55FF55",
				"#0000DD",
				"#000077",
				"#6666FF",
				"#5555FF",
				"#DDDD00",
				"#FFDD00",
				"#DD8800",
				"#FFFF55",
				"#880088",
				"#DD00DD",
				"#FF55FF",
				"#005588",
				"#0088DD",
				"#55FFFF",
				"#00DDDD",
				"#AAAAAA",
				"#DDDDDD",
				"#FFFFFF"
			]
		},
		Commodore: {
			C16: [
				"#000000",
				"#FFFFFF",
				"#FF0000",
				"#00FF00",
				"#0000FF",
				"#FFFF00",
				"#00FFFF",
				"#FF00FF",
				"#FF8000",
				"#808080",
				"#C0C0C0",
				"#800000",
				"#008000",
				"#000080",
				"#808000",
				"#008080"
			],
			C128: [
				"#000000",
				"#0000FF",
				"#FF0000",
				"#FF00FF",
				"#00FF00",
				"#00FFFF",
				"#FFFF00",
				"#FFFFFF",
				"#808080",
				"#000080",
				"#008000",
				"#008080",
				"#800000",
				"#800080",
				"#808000",
				"#C0C0C0"
			],
			C64: [
				"#000000",
				"#FFFFFF",
				"#68372B",
				"#70A4B2",
				"#6F3D86",
				"#588D43",
				"#352879",
				"#B8C76F",
				"#6F4F25",
				"#433900",
				"#9A6759",
				"#444444",
				"#6C6C6C",
				"#9AD284",
				"#6C5EB5",
				"#959595"
			],
			"VIC-20": [
				"#000000",
				"#FFFFFF",
				"#FF0000",
				"#00FF00",
				"#0000FF",
				"#FFFF00",
				"#00FFFF",
				"#FF00FF",
				"#FF8000",
				"#808080",
				"#C0C0C0",
				"#800000",
				"#008000",
				"#000080",
				"#808000",
				"#008080"
			]
		},
		Nintendo: {
			Gameboy: ["#0F380F", "#306230", "#8BAC0F", "#9BBC0F"],
			NES: [
				"#000000",
				"#FCFCFC",
				"#F8F8F8",
				"#ECECEC",
				"#DCDCDC",
				"#C0C0C0",
				"#A0A0A0",
				"#808080",
				"#606060",
				"#404040",
				"#202020",
				"#0000FC",
				"#0000E8",
				"#0000D4",
				"#0000C0",
				"#0000A8",
				"#000094",
				"#000080",
				"#00006C",
				"#000058",
				"#000044",
				"#000030",
				"#0058FC",
				"#0054E8",
				"#0050D4",
				"#004CC0",
				"#0048A8",
				"#004494",
				"#004080",
				"#003C6C",
				"#003858",
				"#003444",
				"#003030",
				"#00FCFC",
				"#00E8E8",
				"#00D4D4",
				"#00C0C0",
				"#00A8A8",
				"#009494",
				"#008080",
				"#006C6C",
				"#005858",
				"#004444",
				"#003030",
				"#00FC00",
				"#00E800",
				"#00D400",
				"#00C000",
				"#00A800",
				"#009400",
				"#008000",
				"#006C00",
				"#005800",
				"#004400",
				"#003000",
				"#FCFC00",
				"#E8E800",
				"#D4D400",
				"#C0C000",
				"#A8A800",
				"#949400",
				"#808000",
				"#6C6C00",
				"#585800",
				"#444400",
				"#303000",
				"#FC0000",
				"#E80000",
				"#D40000",
				"#C00000",
				"#A80000",
				"#940000",
				"#800000",
				"#6C0000",
				"#580000",
				"#440000",
				"#300000",
				"#FC00FC",
				"#E800E8",
				"#D400D4",
				"#C000C0",
				"#A800A8",
				"#940094",
				"#800080",
				"#6C006C",
				"#580058",
				"#440044",
				"#300030"
			]
		},
		Sega: {
			"Game Gear": [
				"#000000",
				"#0A0A0A",
				"#151515",
				"#202020",
				"#2A2A2A",
				"#353535",
				"#404040",
				"#4A4A4A",
				"#555555",
				"#606060",
				"#6A6A6A",
				"#757575",
				"#808080",
				"#8A8A8A",
				"#959595",
				"#A0A0A0",
				"#AAAAAA",
				"#B5B5B5",
				"#C0C0C0",
				"#CACACA",
				"#D5D5D5",
				"#E0E0E0",
				"#EAEAEA",
				"#F5F5F5",
				"#FFFFFF",
				"#001500",
				"#002A00",
				"#004000",
				"#005500",
				"#006A00",
				"#008000",
				"#009500",
				"#00AA00",
				"#00C000",
				"#00D500",
				"#00EA00",
				"#00FF00",
				"#150000",
				"#2A0000",
				"#400000",
				"#550000",
				"#6A0000",
				"#800000",
				"#950000",
				"#AA0000",
				"#C00000",
				"#D50000",
				"#EA0000",
				"#FF0000",
				"#000015",
				"#00002A",
				"#000040",
				"#000055",
				"#00006A",
				"#000080",
				"#000095",
				"#0000AA",
				"#0000C0",
				"#0000D5",
				"#0000EA",
				"#0000FF",
				"#151500",
				"#2A2A00",
				"#404000",
				"#555500",
				"#6A6A00",
				"#808000",
				"#959500",
				"#AAAA00",
				"#C0C000",
				"#D5D500",
				"#EAEA00",
				"#FFFF00"
			],
			"Master System": [
				"#000000",
				"#550000",
				"#AA0000",
				"#FF0000",
				"#005500",
				"#555500",
				"#AA5500",
				"#FF5500",
				"#00AA00",
				"#55AA00",
				"#AAAA00",
				"#FFAA00",
				"#00FF00",
				"#55FF00",
				"#AAFF00",
				"#FFFF00",
				"#000055",
				"#550055",
				"#AA0055",
				"#FF0055",
				"#005555",
				"#555555",
				"#AA5555",
				"#FF5555",
				"#00AA55",
				"#55AA55",
				"#AAAA55",
				"#FFAA55",
				"#00FF55",
				"#55FF55",
				"#AAFF55",
				"#FFFF55",
				"#0000AA",
				"#5500AA",
				"#AA00AA",
				"#FF00AA",
				"#0055AA",
				"#5555AA",
				"#AA55AA",
				"#FF55AA",
				"#00AAAA",
				"#55AAAA",
				"#AAAAAA",
				"#FFAAAA",
				"#00FFAA",
				"#55FFAA",
				"#AAFFAA",
				"#FFFFAA",
				"#0000FF",
				"#5500FF",
				"#AA00FF",
				"#FF00FF",
				"#0055FF",
				"#5555FF",
				"#AA55FF",
				"#FF55FF",
				"#00AAFF",
				"#55AAFF",
				"#AAAAFF",
				"#FFAAFF",
				"#00FFFF",
				"#55FFFF",
				"#AAFFFF",
				"#FFFFFF"
			]
		},
		Sinclair: {
			QL: [
				"#000000",
				"#0000FF",
				"#FF0000",
				"#FF00FF",
				"#00FF00",
				"#00FFFF",
				"#FFFF00",
				"#FFFFFF"
			],
			ZX81: ["#000000", "#FFFFFF"],
			"ZX Spectrum": [
				"#000000",
				"#0000D7",
				"#D70000",
				"#D700D7",
				"#00D700",
				"#00D7D7",
				"#D7D700",
				"#D7D7D7",
				"#000000",
				"#0000FF",
				"#FF0000",
				"#FF00FF",
				"#00FF00",
				"#00FFFF",
				"#FFFF00",
				"#FFFFFF"
			]
		},
		Atari: {
			2600: [
				"#000000",
				"#404040",
				"#6C6C6C",
				"#909090",
				"#B8B8B8",
				"#444400",
				"#6C6C00",
				"#909000",
				"#B8B800",
				"#44FF00",
				"#6CFF00",
				"#90FF00",
				"#B8FF00",
				"#004400",
				"#006C00",
				"#009000",
				"#00B800",
				"#004444",
				"#006C6C",
				"#009090",
				"#00B8B8",
				"#0044FF",
				"#006CFF",
				"#0090FF",
				"#00B8FF",
				"#440044",
				"#6C006C",
				"#900090",
				"#B800B8",
				"#4400FF",
				"#6C00FF",
				"#9000FF",
				"#B800FF",
				"#FF0044",
				"#FF006C",
				"#FF0090",
				"#FF00B8",
				"#FF4400",
				"#FF6C00",
				"#FF9000",
				"#FFB800",
				"#FFFFFF"
			],
			5200: [
				"#000000",
				"#0055AA",
				"#AA0055",
				"#FFFFFF",
				"#555555",
				"#00AAFF",
				"#FF00AA",
				"#AAAAAA",
				"#AA5500",
				"#00FFFF",
				"#FF5500",
				"#55FFFF",
				"#FFAA00",
				"#55FF00",
				"#FFFF55",
				"#AAFFAA"
			],
			7800: [
				"#000000",
				"#1A1A1A",
				"#3F3F3F",
				"#5E5E5E",
				"#7A7A7A",
				"#959595",
				"#ADADAD",
				"#C4C4C4",
				"#D9D9D9",
				"#ECECEC",
				"#FFFFFF",
				"#440000",
				"#770000",
				"#AA0000",
				"#DD0000",
				"#FF0000",
				"#004400",
				"#007700",
				"#00AA00",
				"#00DD00",
				"#00FF00",
				"#000044",
				"#000077",
				"#0000AA",
				"#0000DD",
				"#0000FF",
				"#444400",
				"#777700",
				"#AAAA00",
				"#DDDD00",
				"#FFFF00",
				"#440044",
				"#770077",
				"#AA00AA",
				"#DD00DD",
				"#FF00FF"
			]
		}
	},
	PALETTE_INFO: {
		"BBC Micro": { colors: 16, desc: "BBC Micro 16 colors" },
		C64: { colors: 16, desc: "VIC-II 16 colors" },
		Gameboy: { colors: 4, desc: "Game Boy 4 shades" },
		NES: { colors: 54, desc: "PPU 54 colors" },
		"Master System": { colors: 64, desc: "TMS9918 64 colors" },
		"ZX Spectrum": { colors: 16, desc: "ULA 16 colors" },
		2600: { colors: 40, desc: "Atari 2600 TIA colors" },
		5200: { colors: 16, desc: "Atari 5200 GTIA colors" },
		7800: { colors: 38, desc: "Atari 7800 MARIA colors" }
	}
};

const App = {
	State: {
		tool: "pencil",
		color: "#000000",
		zoom: 10,
		width: 64,
		height: 64,
		paletteName: "C64",
		isDrawing: false,
		transEnabled: false,
		transColor: "#ffffff",
		lightMode: true,
		clipboard: null,
		selection: null,
		startX: 0,
		startY: 0,
		previewImageData: null,
		history: [],
		historyIndex: -1,
		maxHistory: 50,
		mirrorH: false,
		mirrorV: false,
		initialized: false
	},

	DOM: {},

	init: () => {
		if (App.State.initialized) {
			console.warn("App already initialized");
			return;
		}

		try {
			App.DOM.canvas = document.getElementById("main-canvas");
			App.DOM.gridCanvas = document.getElementById("grid-canvas");
			App.DOM.previewCanvas = document.getElementById("preview-canvas");
			App.DOM.selectionBox = document.getElementById("selection-box");
			App.DOM.ctx = App.DOM.canvas.getContext("2d", { willReadFrequently: true });
			App.DOM.gridCtx = App.DOM.gridCanvas.getContext("2d");
			App.DOM.previewCtx = App.DOM.previewCanvas.getContext("2d");
			App.DOM.paletteGrid = document.getElementById("palette-grid");
			App.DOM.transHelper = document.getElementById("trans-helper");
			App.DOM.posDisplay = document.getElementById("pos-display");
			App.DOM.sizeDisplay = document.getElementById("size-display");
			App.DOM.paletteSelect = document.getElementById("palette-select");
			App.DOM.paletteInfo = document.getElementById("palette-info");
			App.DOM.zoomSelect = document.getElementById("zoom-select");
			App.DOM.canvasViewport = document.getElementById("canvas-viewport");
			App.DOM.canvasStack = document.getElementById("canvas-stack");

			if (!App.DOM.canvas || !App.DOM.ctx) {
				throw new Error("Critical canvas elements not found");
			}

			App.Palette.populateSelect();
			App.Palette.load("Commodore|C64");

			App.DOM.ctx.fillStyle = "#ffffff";
			App.DOM.ctx.fillRect(0, 0, App.State.width, App.State.height);

			App.Canvas.zoom(App.State.zoom);

			App.Preview.update();

			const restored = App.AutoSave.restore();

			if (!restored) {
				App.State.transColor = "#ffffff";
			}
			App.Palette.updateTransHelper();

			App.History.saveState();
			App.Events.bind();

			App.Security.init();

			App.bindTransHelper();

			App.AutoSave.start();
			App.AutoSave.updateStatus();

			App.Tools.updateCursor();

			App.Layers.init();
			App.Animation.init();

			App.State.initialized = true;

			console.log("Retro Pixel Studio Pro initialized successfully");
		} catch (err) {
			console.error("Initialization failed:", err);
			App.UI.showToast("Initialization error - please refresh");
		}
	},

	bindTransHelper: () => {
		const transHelper = App.DOM.transHelper;
		if (!transHelper) return;

		transHelper.addEventListener("click", () => {
			App.Palette.setTransColor();
		});
		transHelper.addEventListener("keydown", (e) => {
			if (e.key === "Enter" || e.key === " ") {
				e.preventDefault();
				App.Palette.setTransColor();
			}
		});
	},

	Canvas: {
		resize: (size) => {
			try {
				size = parseInt(size, 10);
				if (isNaN(size) || size < 1 || size > 512) {
					console.warn("Invalid canvas size rejected:", size);
					return;
				}

				App.State.width = size;
				App.State.height = size;
				App.DOM.canvas.width = size;
				App.DOM.canvas.height = size;
				App.DOM.previewCanvas.width = size;
				App.DOM.previewCanvas.height = size;

				App.DOM.ctx.fillStyle = "#ffffff";
				App.DOM.ctx.fillRect(0, 0, size, size);

				App.State.selection = null;
				App.UI.hideSelectionBox();
				const btnDelete = document.getElementById("btn-delete");
				if (btnDelete) btnDelete.style.display = "none";

				App.Layers.resize(size, size);
				App.Animation.resize(size, size);

				App.Canvas.zoom(App.State.zoom);
				App.Preview.update();
				App.DOM.sizeDisplay.textContent = `${size}x${size}`;
				App.History.reset();
				App.History.saveState();
			} catch (err) {
				console.error("Resize failed:", err);
				App.UI.showToast("Resize failed");
			}
		},

		zoom: (level) => {
			try {
				level = parseInt(level, 10);
				if (isNaN(level) || level < 1) return;

				level = Math.max(1, Math.min(64, level));

				App.State.zoom = level;
				const displayW = App.State.width * level;
				const displayH = App.State.height * level;

				App.DOM.canvas.style.width = `${displayW}px`;
				App.DOM.canvas.style.height = `${displayH}px`;
				App.DOM.gridCanvas.style.width = `${displayW}px`;
				App.DOM.gridCanvas.style.height = `${displayH}px`;

				App.DOM.gridCanvas.width = displayW;
				App.DOM.gridCanvas.height = displayH;

				App.UI.drawGrid();

				if (App.State.selection) {
					App.UI.updateSelectionBox(App.State.selection);
				}

				if (App.DOM.zoomSelect && App.DOM.zoomSelect.value !== String(level)) {
					const validZooms = [4, 8, 10, 12, 16, 20, 24, 32];
					const closestZoom = validZooms.reduce((prev, curr) =>
						Math.abs(curr - level) < Math.abs(prev - level) ? curr : prev
					);
					App.DOM.zoomSelect.value = closestZoom;
				}
			} catch (err) {
				console.error("Zoom failed:", err);
			}
		}
	},

	Palette: {
		populateSelect: () => {
			try {
				App.DOM.paletteSelect.innerHTML = "";
				const sortedMfr = Object.keys(Config.PALETTES).sort();
				sortedMfr.forEach((m) => {
					const og = document.createElement("optgroup");
					og.label = m;
					const sortedGroup = Object.entries(Config.PALETTES[m]).sort();
					sortedGroup.forEach(([name]) => {
						const opt = document.createElement("option");
						opt.value = `${m}|${name}`;
						opt.textContent = name;
						og.appendChild(opt);
					});
					App.DOM.paletteSelect.appendChild(og);
				});
			} catch (err) {
				console.error("Palette populate failed:", err);
			}
		},

		load: (val) => {
			try {
				const parts = val.split("|");
				if (parts.length !== 2) return;
				const [m, name] = parts;
				const colors = Config.PALETTES[m]?.[name];
				if (!colors || !Array.isArray(colors)) return;

				App.State.paletteName = name;

				App.DOM.paletteGrid.innerHTML = "";

				colors.forEach((c) => {
					const el = document.createElement("div");
					el.className = "swatch";
					el.style.backgroundColor = c;
					el.setAttribute("role", "option");
					el.setAttribute("tabindex", "0");
					el.setAttribute("aria-label", `Couleur ${c}`);
					el.dataset.color = c;

					el.addEventListener("click", () => {
						document.querySelectorAll(".swatch").forEach((s) => {
							s.classList.remove("active");
							s.setAttribute("aria-selected", "false");
						});
						el.classList.add("active");
						el.setAttribute("aria-selected", "true");
						App.State.color = c;
					});

					el.addEventListener("keydown", (e) => {
						if (e.key === "Enter" || e.key === " ") {
							e.preventDefault();
							el.click();
						}
					});

					if (c === App.State.color) {
						el.classList.add("active");
						el.setAttribute("aria-selected", "true");
					}
					App.DOM.paletteGrid.appendChild(el);
				});

				const info = Config.PALETTE_INFO[name];
				if (info) {
					App.DOM.paletteInfo.textContent = `${info.colors} colors - ${info.desc}`;
				} else {
					App.DOM.paletteInfo.textContent = `${colors.length} colors`;
				}

				App.Palette.updateTransHelper();
			} catch (err) {
				console.error("Palette load failed:", err);
			}
		},

		setTransColor: () => {
			try {
				App.State.transColor = App.State.color;
				App.Palette.updateTransHelper();
				App.UI.showToast(`Transparency: ${App.State.transColor}`);
			} catch (err) {
				console.error("Set trans color failed:", err);
			}
		},

		updateTransHelper: () => {
			try {
				if (App.DOM.transHelper) {
					App.DOM.transHelper.style.backgroundColor = App.State.transColor;
				}
			} catch (err) {
				console.error("Update trans helper failed:", err);
			}
		},

		getCurrentPalette: () => {
			try {
				const val = App.DOM.paletteSelect?.value;
				if (!val) return [];
				const parts = val.split("|");
				if (parts.length !== 2) return [];
				const [m, name] = parts;
				return Config.PALETTES[m]?.[name] || [];
			} catch (err) {
				console.error("Get current palette failed:", err);
				return [];
			}
		}
	},

	Tools: {
		names: {
			pencil: "PENCIL",
			eraser: "ERASER",
			line: "LINE",
			rect: "BOX",
			circle: "CIRCLE",
			fill: "FILL",
			select: "SELECT",
			picker: "PICK"
		},

		set: (t) => {
			try {
				App.State.tool = t;
				document.querySelectorAll(".tool-btn").forEach((b) => {
					b.classList.remove("active");
					b.setAttribute("aria-pressed", "false");
				});
				const btn = document.getElementById(`tool-${t}`);
				if (btn) {
					btn.classList.add("active");
					btn.setAttribute("aria-pressed", "true");
				}

				const toolIndicator = document.getElementById("current-tool-name");
				if (toolIndicator && App.Tools.names[t]) {
					toolIndicator.textContent = App.Tools.names[t];
				}

				if (t !== "select" && App.State.selection) {
					App.UI.hideSelectionBox();
					App.State.selection = null;
					const btnDelete = document.getElementById("btn-delete");
					if (btnDelete) btnDelete.style.display = "none";
				}

				App.Tools.updateCursor();
			} catch (err) {
				console.error("Tool set failed:", err);
			}
		},

		updateCursor: () => {
			try {
				const stack = App.DOM.canvasStack;
				if (!stack) return;

				stack.classList.remove(
					"tool-eraser",
					"tool-fill",
					"tool-picker",
					"tool-select"
				);

				const tool = App.State.tool;
				if (tool === "eraser") {
					stack.classList.add("tool-eraser");
				} else if (tool === "fill") {
					stack.classList.add("tool-fill");
				} else if (tool === "picker") {
					stack.classList.add("tool-picker");
				} else if (tool === "select") {
					stack.classList.add("tool-select");
				}
			} catch (err) {
				console.error("Update cursor failed:", err);
			}
		},

		drawPixel: (x, y, color) => {
			try {
				x = Math.max(0, Math.min(Math.floor(x), App.State.width - 1));
				y = Math.max(0, Math.min(Math.floor(y), App.State.height - 1));

				if (App.Brushes.size === 1) {
					App.DOM.ctx.fillStyle = color;
					App.DOM.ctx.fillRect(x, y, 1, 1);
				} else {
					const points = App.Brushes.getPoints(x, y);
					points.forEach((p) => {
						if (
							p.x >= 0 &&
							p.x < App.State.width &&
							p.y >= 0 &&
							p.y < App.State.height
						) {
							App.DOM.ctx.fillStyle = color;
							App.DOM.ctx.fillRect(p.x, p.y, 1, 1);
						}
					});
				}
			} catch (err) {
				console.error("Draw pixel failed:", err);
			}
		}
	},

	Mirror: {
		toggle: (dir) => {
			try {
				const btn = document.getElementById(`btn-mirror-${dir}`);
				if (dir === "h") {
					App.State.mirrorH = !App.State.mirrorH;
					if (btn) {
						btn.classList.toggle("btn-mirror-active", App.State.mirrorH);
						btn.setAttribute("aria-pressed", App.State.mirrorH);
					}
				} else if (dir === "v") {
					App.State.mirrorV = !App.State.mirrorV;
					if (btn) {
						btn.classList.toggle("btn-mirror-active", App.State.mirrorV);
						btn.setAttribute("aria-pressed", App.State.mirrorV);
					}
				}
				const mode = [];
				if (App.State.mirrorH) mode.push("H");
				if (App.State.mirrorV) mode.push("V");
				App.UI.showToast(mode.length ? `Mirror: ${mode.join("+")}` : "Mirror: Off");
			} catch (err) {
				console.error("Mirror toggle failed:", err);
			}
		},

		getMirroredPoints: (x, y, outArray = null) => {
			const w = App.State.width;
			const h = App.State.height;
			const points = outArray || [];
			points.length = 0;

			points.push({ x, y });

			if (App.State.mirrorH) {
				points.push({ x: w - 1 - x, y: y });
			}
			if (App.State.mirrorV) {
				points.push({ x: x, y: h - 1 - y });
			}
			if (App.State.mirrorH && App.State.mirrorV) {
				points.push({ x: w - 1 - x, y: h - 1 - y });
			}

			return points;
		}
	},

	Brushes: {
		size: 1,
		shape: "square",
		shapes: {
			square: (ctx, x, y, size, color) => {
				const half = Math.floor(size / 2);
				ctx.fillStyle = color;
				ctx.fillRect(x - half, y - half, size, size);
			},
			circle: (ctx, x, y, size, color) => {
				const radius = size / 2;
				ctx.fillStyle = color;
				ctx.beginPath();
				ctx.arc(x + 0.5, y + 0.5, radius, 0, Math.PI * 2);
				ctx.fill();
			},
			diamond: (ctx, x, y, size, color) => {
				const half = Math.floor(size / 2);
				ctx.fillStyle = color;
				ctx.beginPath();
				ctx.moveTo(x, y - half);
				ctx.lineTo(x + half, y);
				ctx.lineTo(x, y + half);
				ctx.lineTo(x - half, y);
				ctx.closePath();
				ctx.fill();
			}
		},

		setSize: (s) => {
			try {
				App.Brushes.size = Math.max(1, Math.min(8, parseInt(s, 10) || 1));
				const display = document.getElementById("brush-size-display");
				if (display) display.textContent = `${App.Brushes.size}px`;
				const slider = document.getElementById("brush-size");
				if (slider) slider.value = App.Brushes.size;
			} catch (err) {
				console.error("Set brush size failed:", err);
			}
		},

		setShape: (shape) => {
			try {
				if (!App.Brushes.shapes[shape]) return;
				App.Brushes.shape = shape;
				document.querySelectorAll(".brush-shape-btn").forEach((btn) => {
					btn.classList.remove("active");
					btn.setAttribute("aria-pressed", "false");
				});
				const btn = document.getElementById(`brush-${shape}`);
				if (btn) {
					btn.classList.add("active");
					btn.setAttribute("aria-pressed", "true");
				}
			} catch (err) {
				console.error("Set brush shape failed:", err);
			}
		},

		draw: (ctx, x, y, color) => {
			try {
				const drawFunc = App.Brushes.shapes[App.Brushes.shape];
				if (drawFunc) {
					drawFunc(ctx, x, y, App.Brushes.size, color);
				}
			} catch (err) {
				console.error("Brush draw failed:", err);
			}
		},

		getPoints: (cx, cy) => {
			const points = [];
			const size = App.Brushes.size;
			const half = Math.floor(size / 2);

			if (App.Brushes.shape === "square") {
				for (let dy = 0; dy < size; dy++) {
					for (let dx = 0; dx < size; dx++) {
						points.push({ x: cx - half + dx, y: cy - half + dy });
					}
				}
			} else if (App.Brushes.shape === "diamond") {
				for (let dy = -half; dy <= half; dy++) {
					const width = half - Math.abs(dy);
					for (let dx = -width; dx <= width; dx++) {
						points.push({ x: cx + dx, y: cy + dy });
					}
				}
			} else {
				for (let dy = -half; dy <= half; dy++) {
					for (let dx = -half; dx <= half; dx++) {
						if (dx * dx + dy * dy <= half * half + half) {
							points.push({ x: cx + dx, y: cy + dy });
						}
					}
				}
			}
			return points;
		}
	},

	Layers: {
		list: [],
		activeIndex: 0,
		nextId: 1,

		init: () => {
			try {
				App.Layers.list = [];
				App.Layers.activeIndex = 0;
				App.Layers.nextId = 1;
				App.Layers.add("Background");
				App.Layers.render();
			} catch (err) {
				console.error("Layers init failed:", err);
			}
		},

		add: (name = null) => {
			try {
				const id = App.Layers.nextId++;
				const layerName = name || `Layer ${id}`;
				const canvas = document.createElement("canvas");
				canvas.width = App.State.width;
				canvas.height = App.State.height;
				const ctx = canvas.getContext("2d");
				ctx.fillStyle = "#ffffff";
				ctx.fillRect(0, 0, App.State.width, App.State.height);

				App.Layers.list.push({
					id,
					name: layerName,
					visible: true,
					opacity: 1,
					canvas,
					ctx
				});
				App.Layers.activeIndex = App.Layers.list.length - 1;
				App.Layers.render();
				App.Layers.compose();
				App.UI.showToast(`Added: ${layerName}`);
			} catch (err) {
				console.error("Layer add failed:", err);
			}
		},

		remove: () => {
			try {
				if (App.Layers.list.length <= 1) {
					App.UI.showToast("Cannot remove last layer");
					return;
				}
				const removed = App.Layers.list.splice(App.Layers.activeIndex, 1)[0];
				if (App.Layers.activeIndex >= App.Layers.list.length) {
					App.Layers.activeIndex = App.Layers.list.length - 1;
				}
				App.Layers.render();
				App.Layers.compose();
				App.UI.showToast(`Removed: ${removed.name}`);
			} catch (err) {
				console.error("Layer remove failed:", err);
			}
		},

		select: (index) => {
			try {
				if (index >= 0 && index < App.Layers.list.length) {
					App.Layers.activeIndex = index;
					App.Layers.render();
					App.Layers.compose();
				}
			} catch (err) {
				console.error("Layer select failed:", err);
			}
		},

		toggleVisibility: (index) => {
			try {
				if (App.Layers.list[index]) {
					App.Layers.list[index].visible = !App.Layers.list[index].visible;
					App.Layers.render();
					App.Layers.compose();
				}
			} catch (err) {
				console.error("Toggle visibility failed:", err);
			}
		},

		moveUp: () => {
			try {
				const idx = App.Layers.activeIndex;
				if (idx < App.Layers.list.length - 1) {
					[App.Layers.list[idx], App.Layers.list[idx + 1]] = [
						App.Layers.list[idx + 1],
						App.Layers.list[idx]
					];
					App.Layers.activeIndex = idx + 1;
					App.Layers.render();
					App.Layers.compose();
				}
			} catch (err) {
				console.error("Layer move up failed:", err);
			}
		},

		moveDown: () => {
			try {
				const idx = App.Layers.activeIndex;
				if (idx > 0) {
					[App.Layers.list[idx], App.Layers.list[idx - 1]] = [
						App.Layers.list[idx - 1],
						App.Layers.list[idx]
					];
					App.Layers.activeIndex = idx - 1;
					App.Layers.render();
					App.Layers.compose();
				}
			} catch (err) {
				console.error("Layer move down failed:", err);
			}
		},

		mergeDown: () => {
			try {
				const idx = App.Layers.activeIndex;
				if (idx <= 0) {
					App.UI.showToast("No layer below");
					return;
				}
				const upper = App.Layers.list[idx];
				const lower = App.Layers.list[idx - 1];

				lower.ctx.globalAlpha = upper.opacity;
				lower.ctx.drawImage(upper.canvas, 0, 0);
				lower.ctx.globalAlpha = 1;

				App.Layers.list.splice(idx, 1);
				App.Layers.activeIndex = idx - 1;
				App.Layers.render();
				App.Layers.compose();
				App.UI.showToast("Merged down");
			} catch (err) {
				console.error("Merge down failed:", err);
			}
		},

		getActiveLayer: () => {
			return App.Layers.list[App.Layers.activeIndex];
		},

		getActiveCtx: () => {
			const layer = App.Layers.getActiveLayer();
			return layer ? layer.ctx : null;
		},

		compose: () => {
			try {
				const mainCtx = App.DOM.ctx;
				mainCtx.clearRect(0, 0, App.State.width, App.State.height);
				mainCtx.fillStyle = "#ffffff";
				mainCtx.fillRect(0, 0, App.State.width, App.State.height);

				App.Layers.list.forEach((layer) => {
					if (layer.visible) {
						mainCtx.globalAlpha = layer.opacity;
						mainCtx.drawImage(layer.canvas, 0, 0);
					}
				});
				mainCtx.globalAlpha = 1;
				App.Preview.update();
			} catch (err) {
				console.error("Compose failed:", err);
			}
		},

		render: () => {
			try {
				const panel = document.getElementById("layers-panel");
				if (!panel) return;

				panel.innerHTML = "";

				[...App.Layers.list].reverse().forEach((layer, reverseIdx) => {
					const idx = App.Layers.list.length - 1 - reverseIdx;
					const item = document.createElement("div");
					item.className = `layer-item${
						idx === App.Layers.activeIndex ? " active" : ""
					}`;
					item.setAttribute("role", "listitem");
					item.onclick = (e) => {
						if (e.target.type !== "checkbox") {
							App.Layers.select(idx);
						}
					};

					const checkbox = document.createElement("input");
					checkbox.type = "checkbox";
					checkbox.checked = layer.visible;
					checkbox.onchange = () => App.Layers.toggleVisibility(idx);
					checkbox.setAttribute("aria-label", `Toggle ${layer.name} visibility`);

					const preview = document.createElement("canvas");
					preview.className = "layer-preview";
					preview.width = 24;
					preview.height = 24;
					const previewCtx = preview.getContext("2d");
					previewCtx.drawImage(layer.canvas, 0, 0, 24, 24);

					const name = document.createElement("span");
					name.className = "layer-name";
					name.textContent = layer.name;

					item.appendChild(checkbox);
					item.appendChild(preview);
					item.appendChild(name);
					panel.appendChild(item);
				});
			} catch (err) {
				console.error("Layers render failed:", err);
			}
		},

		resize: (w, h) => {
			try {
				App.Layers.list.forEach((layer) => {
					const tempCanvas = document.createElement("canvas");
					tempCanvas.width = w;
					tempCanvas.height = h;
					const tempCtx = tempCanvas.getContext("2d");
					tempCtx.fillStyle = "#ffffff";
					tempCtx.fillRect(0, 0, w, h);
					tempCtx.drawImage(layer.canvas, 0, 0);
					layer.canvas.width = w;
					layer.canvas.height = h;
					layer.ctx.fillStyle = "#ffffff";
					layer.ctx.fillRect(0, 0, w, h);
					layer.ctx.drawImage(tempCanvas, 0, 0);
				});
			} catch (err) {
				console.error("Layers resize failed:", err);
			}
		}
	},

	Animation: {
		frames: [],
		currentFrame: 0,
		fps: 12,
		isPlaying: false,
		playInterval: null,
		onionSkin: false,
		loop: true,

		init: () => {
			try {
				App.Animation.frames = [];
				App.Animation.currentFrame = 0;
				App.Animation.isPlaying = false;
				App.Animation.addFrame();
				App.Animation.updateFrameIndicator();
			} catch (err) {
				console.error("Animation init failed:", err);
			}
		},

		addFrame: () => {
			try {
				const canvas = document.createElement("canvas");
				canvas.width = App.State.width;
				canvas.height = App.State.height;
				const ctx = canvas.getContext("2d");
				ctx.fillStyle = "#ffffff";
				ctx.fillRect(0, 0, App.State.width, App.State.height);
				ctx.drawImage(App.DOM.canvas, 0, 0);

				App.Animation.frames.push({
					canvas,
					ctx
				});
				App.Animation.currentFrame = App.Animation.frames.length - 1;
				App.Animation.renderThumbnails();
				App.Animation.updateFrameIndicator();
				App.UI.showToast(`Frame ${App.Animation.frames.length} added`);
			} catch (err) {
				console.error("Add frame failed:", err);
			}
		},

		removeFrame: () => {
			try {
				if (App.Animation.frames.length <= 1) {
					App.UI.showToast("Cannot remove last frame");
					return;
				}
				App.Animation.frames.splice(App.Animation.currentFrame, 1);
				if (App.Animation.currentFrame >= App.Animation.frames.length) {
					App.Animation.currentFrame = App.Animation.frames.length - 1;
				}
				App.Animation.renderThumbnails();
				App.Animation.loadFrame(App.Animation.currentFrame);
				App.UI.showToast("Frame removed");
			} catch (err) {
				console.error("Remove frame failed:", err);
			}
		},

		duplicateFrame: () => {
			try {
				const current = App.Animation.frames[App.Animation.currentFrame];
				const canvas = document.createElement("canvas");
				canvas.width = App.State.width;
				canvas.height = App.State.height;
				const ctx = canvas.getContext("2d");
				ctx.fillStyle = "#ffffff";
				ctx.fillRect(0, 0, App.State.width, App.State.height);
				ctx.drawImage(current.canvas, 0, 0);

				App.Animation.frames.splice(App.Animation.currentFrame + 1, 0, {
					canvas,
					ctx
				});
				App.Animation.currentFrame++;
				App.Animation.renderThumbnails();
				App.Animation.updateFrameIndicator();
				App.UI.showToast("Frame duplicated");
			} catch (err) {
				console.error("Duplicate frame failed:", err);
			}
		},

		saveCurrentFrame: () => {
			try {
				const frame = App.Animation.frames[App.Animation.currentFrame];
				if (frame) {
					frame.ctx.clearRect(0, 0, App.State.width, App.State.height);
					frame.ctx.drawImage(App.DOM.canvas, 0, 0);
					App.Animation.renderThumbnails();
				}
			} catch (err) {
				console.error("Save frame failed:", err);
			}
		},

		loadFrame: (index) => {
			try {
				if (index < 0 || index >= App.Animation.frames.length) return;

				App.Animation.saveCurrentFrame();
				App.Animation.currentFrame = index;

				const frame = App.Animation.frames[index];
				App.DOM.ctx.clearRect(0, 0, App.State.width, App.State.height);
				App.DOM.ctx.fillStyle = "#ffffff";
				App.DOM.ctx.fillRect(0, 0, App.State.width, App.State.height);
				App.DOM.ctx.drawImage(frame.canvas, 0, 0);

				App.Preview.update();
				App.Animation.renderThumbnails();
				App.Animation.updateFrameIndicator();
			} catch (err) {
				console.error("Load frame failed:", err);
			}
		},

		selectFrame: (index) => {
			App.Animation.loadFrame(index);
		},

		prevFrame: () => {
			try {
				const totalFrames = App.Animation.frames.length;
				if (totalFrames <= 1) return;

				let newIndex = App.Animation.currentFrame - 1;
				if (newIndex < 0) {
					newIndex = totalFrames - 1;
				}

				App.Animation.loadFrame(newIndex);
				App.UI.showToast(`Frame ${newIndex + 1}/${totalFrames}`);
			} catch (err) {
				console.error("Previous frame failed:", err);
			}
		},

		nextFrame: () => {
			try {
				const totalFrames = App.Animation.frames.length;
				if (totalFrames <= 1) return;

				let newIndex = App.Animation.currentFrame + 1;
				if (newIndex >= totalFrames) {
					newIndex = 0;
				}

				App.Animation.loadFrame(newIndex);
				App.UI.showToast(`Frame ${newIndex + 1}/${totalFrames}`);
			} catch (err) {
				console.error("Next frame failed:", err);
			}
		},

		updateFrameIndicator: () => {
			try {
				const indicator = document.getElementById("frame-indicator");
				if (indicator) {
					const current = App.Animation.currentFrame + 1;
					const total = App.Animation.frames.length;
					indicator.textContent = `${current}/${total}`;
				}
			} catch (err) {
				console.error("Update frame indicator failed:", err);
			}
		},

		renderThumbnails: () => {
			try {
				const container = document.getElementById("frames-container");
				if (!container) return;

				container.innerHTML = "";

				App.Animation.frames.forEach((frame, idx) => {
					const thumb = document.createElement("canvas");
					thumb.className = "frame-thumb";
					if (idx === App.Animation.currentFrame) thumb.classList.add("active");
					if (
						App.Animation.onionSkin &&
						Math.abs(idx - App.Animation.currentFrame) === 1
					) {
						thumb.classList.add("onion");
					}
					thumb.width = 40;
					thumb.height = 40;
					thumb.onclick = () => App.Animation.selectFrame(idx);
					thumb.setAttribute("role", "button");
					thumb.setAttribute("aria-label", `Frame ${idx + 1}`);
					thumb.setAttribute("tabindex", "0");
					thumb.onkeydown = (e) => {
						if (e.key === "Enter" || e.key === " ") {
							e.preventDefault();
							App.Animation.selectFrame(idx);
						}
					};

					const thumbCtx = thumb.getContext("2d");
					thumbCtx.fillStyle = "#ffffff";
					thumbCtx.fillRect(0, 0, 40, 40);
					thumbCtx.drawImage(frame.canvas, 0, 0, 40, 40);

					container.appendChild(thumb);
				});
			} catch (err) {
				console.error("Render thumbnails failed:", err);
			}
		},

		play: () => {
			try {
				if (App.Animation.isPlaying) return;
				App.Animation.isPlaying = true;

				const playBtn = document.getElementById("anim-play");
				if (playBtn) playBtn.classList.add("active");

				App.Animation.playInterval = setInterval(() => {
					let nextFrame = App.Animation.currentFrame + 1;
					if (nextFrame >= App.Animation.frames.length) {
						if (App.Animation.loop) {
							nextFrame = 0;
						} else {
							App.Animation.stop();
							return;
						}
					}
					App.Animation.loadFrame(nextFrame);
				}, 1000 / App.Animation.fps);
			} catch (err) {
				console.error("Play failed:", err);
			}
		},

		stop: () => {
			try {
				App.Animation.isPlaying = false;
				if (App.Animation.playInterval) {
					clearInterval(App.Animation.playInterval);
					App.Animation.playInterval = null;
				}
				const playBtn = document.getElementById("anim-play");
				if (playBtn) playBtn.classList.remove("active");
			} catch (err) {
				console.error("Stop failed:", err);
			}
		},

		setFPS: (fps) => {
			App.Animation.fps = parseInt(fps, 10) || 12;
		},

		toggleOnion: () => {
			App.Animation.onionSkin = !App.Animation.onionSkin;
			App.Animation.renderThumbnails();
		},

		toggleLoop: () => {
			App.Animation.loop = !App.Animation.loop;
		},

		exportGIF: async () => {
			try {
				App.Animation.saveCurrentFrame();
				App.UI.showToast("Creating GIF...");

				const frames = App.Animation.frames;
				if (!frames || frames.length === 0) {
					App.UI.showToast("No frames to export");
					return;
				}

				const width = App.State.width;
				const height = App.State.height;
				const fps = App.Animation.fps;
				const delay = Math.round(1000 / fps);

				const gif = new GIF({
					workers: 2,
					quality: 10,
					width: width,
					height: height,
					workerScript:
						"https://cdnjs.cloudflare.com/ajax/libs/gif.js/0.2.0/gif.worker.js"
				});

				frames.forEach((frame) => {
					const tempCanvas = document.createElement("canvas");
					tempCanvas.width = width;
					tempCanvas.height = height;
					const tempCtx = tempCanvas.getContext("2d");
					tempCtx.fillStyle = "#ffffff";
					tempCtx.fillRect(0, 0, width, height);
					tempCtx.drawImage(frame.canvas, 0, 0);
					gif.addFrame(tempCanvas, { delay: delay, copy: true });
				});

				gif.on("finished", (blob) => {
					const link = document.createElement("a");
					link.download = `animation-${width}x${height}-${frames.length}frames.gif`;
					link.href = URL.createObjectURL(blob);
					link.click();
					URL.revokeObjectURL(link.href);
					App.UI.showToast("GIF exported successfully!");
				});

				gif.on("error", (err) => {
					console.error("GIF encoding error:", err);
					App.UI.showToast("GIF export failed");
				});

				gif.render();
			} catch (err) {
				console.error("GIF export failed:", err);
				App.UI.showToast("GIF export failed: " + err.message);
			}
		},

		resize: (w, h) => {
			try {
				App.Animation.frames.forEach((frame) => {
					const tempCanvas = document.createElement("canvas");
					tempCanvas.width = w;
					tempCanvas.height = h;
					const tempCtx = tempCanvas.getContext("2d");
					tempCtx.fillStyle = "#ffffff";
					tempCtx.fillRect(0, 0, w, h);
					tempCtx.drawImage(frame.canvas, 0, 0);
					frame.canvas.width = w;
					frame.canvas.height = h;
					frame.ctx.fillStyle = "#ffffff";
					frame.ctx.fillRect(0, 0, w, h);
					frame.ctx.drawImage(tempCanvas, 0, 0);
				});
				App.Animation.renderThumbnails();
			} catch (err) {
				console.error("Animation resize failed:", err);
			}
		}
	},

	AutoSave: {
		interval: null,
		STORAGE_KEY: "retroPixelStudio_canvas",
		INTERVAL_MS: 30000,

		start: () => {
			try {
				if (App.AutoSave.interval) {
					clearInterval(App.AutoSave.interval);
					App.AutoSave.interval = null;
				}
				App.AutoSave.interval = setInterval(() => {
					const checkbox = document.getElementById("check-autosave");
					if (checkbox?.checked) {
						App.AutoSave.save();
					}
				}, App.AutoSave.INTERVAL_MS);
			} catch (err) {
				console.error("Autosave start failed:", err);
			}
		},

		stop: () => {
			try {
				if (App.AutoSave.interval) {
					clearInterval(App.AutoSave.interval);
					App.AutoSave.interval = null;
				}
			} catch (err) {
				console.error("Autosave stop failed:", err);
			}
		},

		save: () => {
			try {
				const data = {
					width: App.State.width,
					height: App.State.height,
					imageData: App.DOM.canvas.toDataURL("image/png"),
					timestamp: Date.now()
				};
				localStorage.setItem(App.AutoSave.STORAGE_KEY, JSON.stringify(data));
				App.AutoSave.updateStatus();
			} catch (err) {
				console.error("Autosave failed:", err);
			}
		},

		restore: () => {
			try {
				const saved = localStorage.getItem(App.AutoSave.STORAGE_KEY);
				if (!saved) return false;

				const data = JSON.parse(saved);
				if (!data.imageData || !data.width || !data.height) return false;

				App.State.width = data.width;
				App.State.height = data.height;
				App.DOM.canvas.width = data.width;
				App.DOM.canvas.height = data.height;
				App.DOM.previewCanvas.width = data.width;
				App.DOM.previewCanvas.height = data.height;

				const img = new Image();
				img.onload = () => {
					try {
						App.DOM.ctx.drawImage(img, 0, 0);
						App.Preview.update();
						App.Canvas.zoom(App.State.zoom);
						App.DOM.sizeDisplay.textContent = `${data.width}x${data.height}`;
						App.History.reset();
						App.History.saveState();
						App.UI.showToast("Restored from autosave");
					} catch (e) {
						console.error("Restore draw failed:", e);
					}
					img.src = "";
				};
				img.onerror = () => {
					console.error("Image load failed during restore");
				};
				img.src = data.imageData;
				return true;
			} catch (err) {
				console.error("Autosave restore failed:", err);
				return false;
			}
		},

		clear: () => {
			try {
				localStorage.removeItem(App.AutoSave.STORAGE_KEY);
				App.AutoSave.updateStatus();
			} catch (err) {
				console.error("Autosave clear failed:", err);
			}
		},

		updateStatus: () => {
			try {
				const status = document.getElementById("autosave-status");
				if (!status) return;

				const saved = localStorage.getItem(App.AutoSave.STORAGE_KEY);
				if (saved) {
					try {
						const data = JSON.parse(saved);
						if (data.timestamp) {
							const date = new Date(data.timestamp);
							status.textContent = `Saved: ${date.toLocaleTimeString()}`;
						} else {
							status.textContent = "";
						}
					} catch {
						status.textContent = "";
					}
				} else {
					status.textContent = "";
				}
			} catch (err) {
				console.error("Update status failed:", err);
			}
		},

		toggle: () => {
			const checkbox = document.getElementById("check-autosave");
			if (checkbox?.checked) {
				App.AutoSave.save();
			}
		}
	},

	Engine: {
		bresenhamLine: (x0, y0, x1, y1, plot) => {
			try {
				x0 = Math.floor(x0);
				y0 = Math.floor(y0);
				x1 = Math.floor(x1);
				y1 = Math.floor(y1);

				let dx = Math.abs(x1 - x0);
				let sx = x0 < x1 ? 1 : -1;
				let dy = -Math.abs(y1 - y0);
				let sy = y0 < y1 ? 1 : -1;
				let err = dx + dy;

				let iterations = 0;
				const maxIterations = dx + Math.abs(dy) + 10;

				while (iterations < maxIterations) {
					iterations++;
					plot(x0, y0);
					if (x0 === x1 && y0 === y1) break;
					const e2 = 2 * err;
					if (e2 >= dy) {
						err += dy;
						x0 += sx;
					}
					if (e2 <= dx) {
						err += dx;
						y0 += sy;
					}
				}
			} catch (err) {
				console.error("Bresenham line failed:", err);
			}
		},

		floodFill: (x, y, color) => {
			try {
				const ctx = App.DOM.ctx;
				const w = App.State.width;
				const h = App.State.height;

				x = Math.max(0, Math.min(x, w - 1));
				y = Math.max(0, Math.min(y, h - 1));

				let img;
				try {
					img = ctx.getImageData(0, 0, w, h);
				} catch (e) {
					App.UI.showToast("Fill failed");
					return;
				}

				const d = img.data;
				const pos = (y * w + x) * 4;
				const r0 = d[pos];
				const g0 = d[pos + 1];
				const b0 = d[pos + 2];

				if (!color || typeof color !== "string" || color.length < 7) {
					console.error("Invalid color format:", color);
					return;
				}

				const r = parseInt(color.slice(1, 3), 16) || 0;
				const g = parseInt(color.slice(3, 5), 16) || 0;
				const b = parseInt(color.slice(5, 7), 16) || 0;

				if (r0 === r && g0 === g && b0 === b) return;

				const getPixel = (px, py) => {
					if (px < 0 || px >= w || py < 0 || py >= h) return false;
					const p = (py * w + px) * 4;
					return d[p] === r0 && d[p + 1] === g0 && d[p + 2] === b0;
				};

				const setPixel = (px, py) => {
					const p = (py * w + px) * 4;
					d[p] = r;
					d[p + 1] = g;
					d[p + 2] = b;
					d[p + 3] = 255;
				};

				const stack = [[x, y]];
				let iterations = 0;
				const maxIterations = w * h * 2;

				while (stack.length && iterations < maxIterations) {
					iterations++;
					const [cx, cy] = stack.pop();

					if (!getPixel(cx, cy)) continue;

					let leftX = cx;
					while (leftX > 0 && getPixel(leftX - 1, cy)) leftX--;

					let rightX = cx;
					while (rightX < w - 1 && getPixel(rightX + 1, cy)) rightX++;

					for (let px = leftX; px <= rightX; px++) setPixel(px, cy);

					for (let px = leftX; px <= rightX; px++) {
						if (cy > 0 && getPixel(px, cy - 1)) stack.push([px, cy - 1]);
						if (cy < h - 1 && getPixel(px, cy + 1)) stack.push([px, cy + 1]);
					}
				}

				if (iterations >= maxIterations) {
					console.warn("Flood fill reached iteration limit");
				}

				ctx.putImageData(img, 0, 0);
				App.Preview.update();
			} catch (err) {
				console.error("Flood fill failed:", err);
				App.UI.showToast("Fill failed");
			}
		},

		drawLine: (x0, y0, x1, y1, color) => {
			try {
				App.Engine.bresenhamLine(x0, y0, x1, y1, (x, y) => {
					App.Tools.drawPixel(x, y, color);
				});

				if (App.State.mirrorH) {
					const w = App.State.width;
					App.Engine.bresenhamLine(w - 1 - x0, y0, w - 1 - x1, y1, (x, y) => {
						App.Tools.drawPixel(x, y, color);
					});
				}
				if (App.State.mirrorV) {
					const h = App.State.height;
					App.Engine.bresenhamLine(x0, h - 1 - y0, x1, h - 1 - y1, (x, y) => {
						App.Tools.drawPixel(x, y, color);
					});
				}
				if (App.State.mirrorH && App.State.mirrorV) {
					const w = App.State.width;
					const h = App.State.height;
					App.Engine.bresenhamLine(
						w - 1 - x0,
						h - 1 - y0,
						w - 1 - x1,
						h - 1 - y1,
						(x, y) => {
							App.Tools.drawPixel(x, y, color);
						}
					);
				}
			} catch (err) {
				console.error("Draw line failed:", err);
			}
		},

		drawRect: (x0, y0, x1, y1, color) => {
			try {
				const w = App.State.width;
				const h = App.State.height;
				const rects = [];

				const x = Math.min(x0, x1);
				const y = Math.min(y0, y1);
				const rw = Math.abs(x1 - x0) + 1;
				const rh = Math.abs(y1 - y0) + 1;
				rects.push({ x, y, w: rw, h: rh });

				if (App.State.mirrorH) {
					rects.push({ x: w - 1 - x - rw + 1, y, w: rw, h: rh });
				}
				if (App.State.mirrorV) {
					rects.push({ x, y: h - 1 - y - rh + 1, w: rw, h: rh });
				}
				if (App.State.mirrorH && App.State.mirrorV) {
					rects.push({ x: w - 1 - x - rw + 1, y: h - 1 - y - rh + 1, w: rw, h: rh });
				}

				App.DOM.ctx.fillStyle = color;
				rects.forEach((r) => {
					if (r.x >= 0 && r.w > 0 && r.y >= 0 && r.h > 0) {
						const clampedX = Math.max(0, r.x);
						const clampedY = Math.max(0, r.y);
						const clampedW = Math.min(r.w, w - clampedX);
						const clampedH = Math.min(r.h, h - clampedY);
						if (clampedW > 0 && clampedH > 0) {
							App.DOM.ctx.fillRect(clampedX, clampedY, clampedW, clampedH);
						}
					}
				});
			} catch (err) {
				console.error("Draw rect failed:", err);
			}
		},

		drawCircle: (cx, cy, ex, ey, color) => {
			try {
				const radius = Math.floor(Math.sqrt((ex - cx) ** 2 + (ey - cy) ** 2));

				if (radius < 1) {
					const points = App.Mirror.getMirroredPoints(cx, cy);
					points.forEach((p) => App.Tools.drawPixel(p.x, p.y, color));
					return;
				}

				const ctx = App.DOM.ctx;
				const w = App.State.width;
				const h = App.State.height;
				ctx.fillStyle = color;

				const drawHorizontalLine = (x1, x2, y) => {
					if (y < 0 || y >= h) return;
					const startX = Math.max(0, Math.min(x1, x2));
					const endX = Math.min(w - 1, Math.max(x1, x2));
					if (startX <= endX) {
						ctx.fillRect(startX, y, endX - startX + 1, 1);
					}
				};

				const drawCircleAt = (centerX, centerY) => {
					let x = radius;
					let y = 0;
					let err = 0;

					while (x >= y) {
						drawHorizontalLine(centerX - x, centerX + x, centerY + y);
						drawHorizontalLine(centerX - x, centerX + x, centerY - y);
						drawHorizontalLine(centerX - y, centerX + y, centerY + x);
						drawHorizontalLine(centerX - y, centerX + y, centerY - x);

						y += 1;
						err += 1 + 2 * y;
						if (2 * (err - x) + 1 > 0) {
							x -= 1;
							err += 1 - 2 * x;
						}
					}
				};

				drawCircleAt(cx, cy);

				if (App.State.mirrorH) drawCircleAt(w - 1 - cx, cy);
				if (App.State.mirrorV) drawCircleAt(cx, h - 1 - cy);
				if (App.State.mirrorH && App.State.mirrorV)
					drawCircleAt(w - 1 - cx, h - 1 - cy);
			} catch (err) {
				console.error("Draw circle failed:", err);
			}
		},

		pickColor: (x, y) => {
			try {
				if (x < 0 || x >= App.State.width || y < 0 || y >= App.State.height) {
					return "#000000";
				}
				const d = App.DOM.ctx.getImageData(x, y, 1, 1).data;
				return (
					"#" +
					[d[0], d[1], d[2]].map((v) => v.toString(16).padStart(2, "0")).join("")
				);
			} catch (err) {
				console.error("Pick color failed:", err);
				return "#000000";
			}
		}
	},

	UI: {
		previousFocus: null,

		drawGrid: () => {
			try {
				const ctx = App.DOM.gridCtx;
				const w = App.DOM.gridCanvas.width;
				const h = App.DOM.gridCanvas.height;
				const s = App.State.zoom;

				if (w <= 0 || h <= 0 || s <= 0) return;

				ctx.clearRect(0, 0, w, h);
				ctx.strokeStyle = "rgba(102, 102, 102, 0.5)";
				ctx.lineWidth = 1;
				ctx.beginPath();
				for (let x = 0; x <= w; x += s) {
					ctx.moveTo(x, 0);
					ctx.lineTo(x, h);
				}
				for (let y = 0; y <= h; y += s) {
					ctx.moveTo(0, y);
					ctx.lineTo(w, y);
				}
				ctx.stroke();
			} catch (err) {
				console.error("Draw grid failed:", err);
			}
		},

		updateSelectionBox: (rect) => {
			try {
				if (!rect) {
					App.DOM.selectionBox.style.display = "none";
					return;
				}
				const z = App.State.zoom;
				App.DOM.selectionBox.style.display = "block";
				App.DOM.selectionBox.style.left = rect.x * z + "px";
				App.DOM.selectionBox.style.top = rect.y * z + "px";
				App.DOM.selectionBox.style.width = rect.w * z + "px";
				App.DOM.selectionBox.style.height = rect.h * z + "px";
			} catch (err) {
				console.error("Update selection box failed:", err);
			}
		},

		hideSelectionBox: () => {
			if (App.DOM.selectionBox) {
				App.DOM.selectionBox.style.display = "none";
			}
		},

		toggleGrid: () => {
			const checkbox = document.getElementById("check-grid");
			if (checkbox && App.DOM.gridCanvas) {
				App.DOM.gridCanvas.style.display = checkbox.checked ? "block" : "none";
			}
		},

		toggleCRT: () => {
			const checkbox = document.getElementById("check-crt");
			const scanlines = document.getElementById("scanlines");
			if (checkbox && scanlines) {
				scanlines.style.display = checkbox.checked ? "block" : "none";
			}
		},

		toggleTheme: () => {
			App.State.lightMode = !App.State.lightMode;
			document.body.classList.toggle("light-mode");
			const icon = document.getElementById("theme-icon");
			if (icon) {
				icon.className = App.State.lightMode
					? "bi bi-sun-fill"
					: "bi bi-moon-stars-fill";
			}
		},

		updateFullscreenIcon: () => {
			try {
				const icon = document.getElementById("fullscreen-icon");
				if (icon) {
					icon.className = document.fullscreenElement
						? "bi bi-fullscreen-exit"
						: "bi bi-arrows-fullscreen";
				}
			} catch (err) {
				console.error("Update fullscreen icon failed:", err);
			}
		},

		toggleFullscreen: () => {
			try {
				if (!document.fullscreenElement) {
					document.documentElement.requestFullscreen().catch((err) => {
						console.warn("Fullscreen not available:", err.message);
					});
				} else {
					document.exitFullscreen();
				}
			} catch (err) {
				console.error("Fullscreen toggle failed:", err);
			}
		},

		trapFocus: (modal) => {
			try {
				const focusableElements = modal.querySelectorAll(
					'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
				);
				if (focusableElements.length === 0) return;

				const firstFocusable = focusableElements[0];
				const lastFocusable = focusableElements[focusableElements.length - 1];

				const handleTabKey = (e) => {
					if (e.key !== "Tab") return;

					if (e.shiftKey) {
						if (document.activeElement === firstFocusable) {
							e.preventDefault();
							lastFocusable.focus();
						}
					} else {
						if (document.activeElement === lastFocusable) {
							e.preventDefault();
							firstFocusable.focus();
						}
					}
				};

				modal._focusTrapHandler = handleTabKey;
				modal.addEventListener("keydown", handleTabKey);
			} catch (err) {
				console.error("Trap focus failed:", err);
			}
		},

		removeFocusTrap: (modal) => {
			try {
				if (modal._focusTrapHandler) {
					modal.removeEventListener("keydown", modal._focusTrapHandler);
					delete modal._focusTrapHandler;
				}
			} catch (err) {
				console.error("Remove focus trap failed:", err);
			}
		},

		openExport: () => {
			try {
				const modal = document.getElementById("export-modal");
				if (!modal) return;
				App.UI.previousFocus = document.activeElement;
				modal.style.display = "flex";
				App.UI.trapFocus(modal);
				const firstBtn = modal.querySelector("button, select");
				if (firstBtn) firstBtn.focus();
			} catch (err) {
				console.error("Open export modal failed:", err);
			}
		},

		openNewDoc: () => {
			try {
				const modal = document.getElementById("newdoc-modal");
				if (!modal) return;
				App.UI.previousFocus = document.activeElement;
				modal.style.display = "flex";
				App.UI.trapFocus(modal);
				const firstBtn = modal.querySelector("button, select");
				if (firstBtn) firstBtn.focus();
			} catch (err) {
				console.error("Open newdoc modal failed:", err);
			}
		},

		openHelp: () => {
			try {
				const modal = document.getElementById("help-modal");
				if (!modal) return;
				App.UI.previousFocus = document.activeElement;
				modal.style.display = "flex";
				App.UI.trapFocus(modal);
				const firstBtn = modal.querySelector("button");
				if (firstBtn) firstBtn.focus();
			} catch (err) {
				console.error("Open help modal failed:", err);
			}
		},

		closeModal: (modalId) => {
			try {
				const modal = document.getElementById(modalId);
				if (modal) {
					modal.style.display = "none";
					App.UI.removeFocusTrap(modal);
					if (App.UI.previousFocus) {
						App.UI.previousFocus.focus();
						App.UI.previousFocus = null;
					}
				}
			} catch (err) {
				console.error("Close modal failed:", err);
			}
		},

		closeAllModals: () => {
			try {
				document.querySelectorAll(".modal-overlay").forEach((modal) => {
					modal.style.display = "none";
					App.UI.removeFocusTrap(modal);
				});
				if (App.UI.previousFocus) {
					App.UI.previousFocus.focus();
					App.UI.previousFocus = null;
				}
			} catch (err) {
				console.error("Close all modals failed:", err);
			}
		},

		showToast: (msg) => {
			try {
				const toast = document.getElementById("toast");
				if (!toast) return;
				toast.textContent = msg;
				toast.classList.add("show");
				setTimeout(() => toast.classList.remove("show"), 2000);
			} catch (err) {
				console.error("Show toast failed:", err);
			}
		}
	},

	Preview: {
		update: () => {
			try {
				const ctx = App.DOM.previewCtx;
				const w = App.State.width;
				const h = App.State.height;

				ctx.clearRect(0, 0, w, h);
				ctx.drawImage(App.DOM.canvas, 0, 0);
			} catch (err) {
				console.error("Preview update failed:", err);
			}
		}
	},

	History: {
		reset: () => {
			App.State.history = [];
			App.State.historyIndex = -1;
		},

		saveState: () => {
			try {
				const state = App.DOM.ctx.getImageData(
					0,
					0,
					App.State.width,
					App.State.height
				);

				App.State.history = App.State.history.slice(0, App.State.historyIndex + 1);
				App.State.history.push(state);

				if (App.State.history.length > App.State.maxHistory) {
					App.State.history.shift();
				} else {
					App.State.historyIndex++;
				}
			} catch (err) {
				console.error("Save state failed:", err);
			}
		},

		undo: () => {
			try {
				if (
					App.State.historyIndex > 0 &&
					App.State.history[App.State.historyIndex - 1]
				) {
					App.State.historyIndex--;
					App.DOM.ctx.putImageData(App.State.history[App.State.historyIndex], 0, 0);
					App.Preview.update();
					App.UI.showToast("Undo");
				}
			} catch (err) {
				console.error("Undo failed:", err);
				App.UI.showToast("Undo failed");
			}
		},

		redo: () => {
			try {
				if (
					App.State.historyIndex < App.State.history.length - 1 &&
					App.State.history[App.State.historyIndex + 1]
				) {
					App.State.historyIndex++;
					App.DOM.ctx.putImageData(App.State.history[App.State.historyIndex], 0, 0);
					App.Preview.update();
					App.UI.showToast("Redo");
				}
			} catch (err) {
				console.error("Redo failed:", err);
				App.UI.showToast("Redo failed");
			}
		}
	},

	Actions: {
		copy: () => {
			try {
				const sel = App.State.selection;
				if (sel && sel.w > 0 && sel.h > 0) {
					App.State.clipboard = {
						data: App.DOM.ctx.getImageData(sel.x, sel.y, sel.w, sel.h),
						x: sel.x,
						y: sel.y,
						w: sel.w,
						h: sel.h
					};
					App.UI.showToast(`Copied ${sel.w}x${sel.h}`);
				} else {
					App.State.clipboard = {
						data: App.DOM.ctx.getImageData(0, 0, App.State.width, App.State.height),
						x: 0,
						y: 0,
						w: App.State.width,
						h: App.State.height
					};
					App.UI.showToast("Copied canvas");
				}
			} catch (err) {
				console.error("Copy failed:", err);
				App.UI.showToast("Copy failed");
			}
		},

		paste: () => {
			try {
				if (!App.State.clipboard) {
					App.UI.showToast("Clipboard empty");
					return;
				}

				const pasteX = App.State.selection ? App.State.selection.x : 0;
				const pasteY = App.State.selection ? App.State.selection.y : 0;

				const tempCanvas = document.createElement("canvas");
				tempCanvas.width = App.State.clipboard.w;
				tempCanvas.height = App.State.clipboard.h;
				const tempCtx = tempCanvas.getContext("2d");
				tempCtx.putImageData(App.State.clipboard.data, 0, 0);

				App.DOM.ctx.drawImage(tempCanvas, pasteX, pasteY);
				App.Preview.update();
				App.History.saveState();
				App.UI.showToast("Pasted");

				tempCanvas.width = 0;
				tempCanvas.height = 0;
			} catch (err) {
				console.error("Paste failed:", err);
				App.UI.showToast("Paste failed");
			}
		},

		cut: () => {
			try {
				if (!App.State.selection || App.State.selection.w <= 0) {
					App.UI.showToast("No selection");
					return;
				}
				App.Actions.copy();
				App.DOM.ctx.fillStyle = "#ffffff";
				App.DOM.ctx.fillRect(
					App.State.selection.x,
					App.State.selection.y,
					App.State.selection.w,
					App.State.selection.h
				);
				App.Preview.update();
				App.History.saveState();
				App.UI.showToast("Cut");
			} catch (err) {
				console.error("Cut failed:", err);
				App.UI.showToast("Cut failed");
			}
		},

		deleteSelection: () => {
			try {
				if (App.State.selection) {
					App.DOM.ctx.fillStyle = "#ffffff";
					App.DOM.ctx.fillRect(
						App.State.selection.x,
						App.State.selection.y,
						App.State.selection.w,
						App.State.selection.h
					);
					App.Preview.update();
					App.History.saveState();
					App.UI.hideSelectionBox();
					App.State.selection = null;
					const btnDelete = document.getElementById("btn-delete");
					if (btnDelete) btnDelete.style.display = "none";
				}
			} catch (err) {
				console.error("Delete selection failed:", err);
				App.UI.showToast("Delete failed");
			}
		},

		clear: () => {
			try {
				const modal = document.getElementById("clear-modal");
				if (!modal) return;
				App.UI.previousFocus = document.activeElement;
				modal.style.display = "flex";
				App.UI.trapFocus(modal);
				const firstBtn = modal.querySelector("button");
				if (firstBtn) firstBtn.focus();
			} catch (err) {
				console.error("Clear modal failed:", err);
			}
		},

		confirmClear: () => {
			try {
				if (App.Animation.isPlaying) {
					App.Animation.stop();
				}

				App.Animation.frames = [];
				const frameCanvas = document.createElement("canvas");
				frameCanvas.width = App.State.width;
				frameCanvas.height = App.State.height;
				const frameCtx = frameCanvas.getContext("2d");
				frameCtx.fillStyle = "#ffffff";
				frameCtx.fillRect(0, 0, App.State.width, App.State.height);
				App.Animation.frames.push({ canvas: frameCanvas, ctx: frameCtx });
				App.Animation.currentFrame = 0;
				App.Animation.renderThumbnails();
				App.Animation.updateFrameIndicator();

				App.Layers.list.forEach((layer) => {
					layer.ctx.fillStyle = "#ffffff";
					layer.ctx.fillRect(0, 0, App.State.width, App.State.height);
				});
				App.Layers.render();

				App.DOM.ctx.fillStyle = "#ffffff";
				App.DOM.ctx.fillRect(0, 0, App.State.width, App.State.height);

				if (App.State.selection) {
					App.UI.hideSelectionBox();
					App.State.selection = null;
					const btnDelete = document.getElementById("btn-delete");
					if (btnDelete) btnDelete.style.display = "none";
				}

				App.Preview.update();
				App.Layers.compose();
				App.History.reset();
				App.History.saveState();
				App.UI.closeModal("clear-modal");
				App.UI.showToast("All frames cleared");
			} catch (err) {
				console.error("Clear failed:", err);
				App.UI.showToast("Clear failed");
			}
		},

		flip: (dir) => {
			try {
				const sel = App.State.selection;
				let x = 0,
					y = 0,
					w = App.State.width,
					h = App.State.height;

				if (sel && sel.w > 0) {
					x = sel.x;
					y = sel.y;
					w = sel.w;
					h = sel.h;
				}

				const img = App.DOM.ctx.getImageData(x, y, w, h);
				const d = img.data;
				const b = new Uint8ClampedArray(d);

				if (dir === "h") {
					for (let row = 0; row < h; row++) {
						for (let col = 0; col < Math.floor(w / 2); col++) {
							const leftIdx = (row * w + col) * 4;
							const rightIdx = (row * w + (w - 1 - col)) * 4;
							for (let i = 0; i < 4; i++) {
								b[leftIdx + i] = d[rightIdx + i];
								b[rightIdx + i] = d[leftIdx + i];
							}
						}
					}
				} else {
					for (let row = 0; row < Math.floor(h / 2); row++) {
						for (let col = 0; col < w; col++) {
							const topIdx = (row * w + col) * 4;
							const bottomIdx = ((h - 1 - row) * w + col) * 4;
							for (let i = 0; i < 4; i++) {
								b[topIdx + i] = d[bottomIdx + i];
								b[bottomIdx + i] = d[topIdx + i];
							}
						}
					}
				}

				App.DOM.ctx.putImageData(new ImageData(b, w, h), x, y);
				App.Preview.update();
				App.History.saveState();
			} catch (err) {
				console.error("Flip failed:", err);
				App.UI.showToast("Flip failed");
			}
		},

		rotate: (deg) => {
			try {
				const sel = App.State.selection;
				let x = 0,
					y = 0,
					w = App.State.width,
					h = App.State.height;

				if (sel && sel.w > 0) {
					x = sel.x;
					y = sel.y;
					w = sel.w;
					h = sel.h;
				}

				const img = App.DOM.ctx.getImageData(x, y, w, h);
				const d = img.data;
				const rotated = new Uint8ClampedArray(d.length);

				for (let row = 0; row < h; row++) {
					for (let col = 0; col < w; col++) {
						const srcIdx = (row * w + col) * 4;
						let dstRow, dstCol;

						if (deg === 90) {
							dstRow = col;
							dstCol = h - 1 - row;
						} else if (deg === -90) {
							dstRow = w - 1 - col;
							dstCol = row;
						} else {
							dstRow = h - 1 - row;
							dstCol = w - 1 - col;
						}

						const dstIdx = (dstRow * w + dstCol) * 4;
						for (let i = 0; i < 4; i++) {
							rotated[dstIdx + i] = d[srcIdx + i];
						}
					}
				}

				App.DOM.ctx.putImageData(new ImageData(rotated, w, h), x, y);
				App.Preview.update();
				App.History.saveState();
			} catch (err) {
				console.error("Rotate failed:", err);
				App.UI.showToast("Rotate failed");
			}
		},

		invert: () => {
			try {
				const sel = App.State.selection;
				let x = 0,
					y = 0,
					w = App.State.width,
					h = App.State.height;

				if (sel && sel.w > 0) {
					x = sel.x;
					y = sel.y;
					w = sel.w;
					h = sel.h;
				}

				const img = App.DOM.ctx.getImageData(x, y, w, h);
				const d = img.data;
				for (let i = 0; i < d.length; i += 4) {
					d[i] = 255 - d[i];
					d[i + 1] = 255 - d[i + 1];
					d[i + 2] = 255 - d[i + 2];
				}
				App.DOM.ctx.putImageData(img, x, y);
				App.Preview.update();
				App.History.saveState();
			} catch (err) {
				console.error("Invert failed:", err);
				App.UI.showToast("Invert failed");
			}
		},

		createNewDoc: () => {
			try {
				const sizeSelect = document.getElementById("newdoc-size");
				if (!sizeSelect) return;
				const size = parseInt(sizeSelect.value, 10);
				if (isNaN(size) || size < 1) return;

				App.AutoSave.clear();
				App.Canvas.resize(size);
				App.UI.closeModal("newdoc-modal");
				App.UI.showToast(`New ${size}x${size}`);
			} catch (err) {
				console.error("Create new doc failed:", err);
				App.UI.showToast("Create failed");
			}
		},

		convertToPalette: () => {
			try {
				const palette = App.Palette.getCurrentPalette();
				if (!palette || palette.length === 0) {
					App.UI.showToast("No palette loaded");
					return;
				}

				const w = App.State.width;
				const h = App.State.height;

				const hexToRgb = (hex) => ({
					r: parseInt(hex.slice(1, 3), 16),
					g: parseInt(hex.slice(3, 5), 16),
					b: parseInt(hex.slice(5, 7), 16)
				});

				const paletteRgb = palette.map(hexToRgb);

				const findNearestColor = (r, g, b) => {
					let minDist = Infinity;
					let nearest = paletteRgb[0];

					for (const pc of paletteRgb) {
						const dr = r - pc.r;
						const dg = g - pc.g;
						const db = b - pc.b;
						const dist = dr * dr + dg * dg + db * db;

						if (dist < minDist) {
							minDist = dist;
							nearest = pc;
						}
					}
					return nearest;
				};

				const applyPaletteToCanvas = (ctx) => {
					const img = ctx.getImageData(0, 0, w, h);
					const d = img.data;
					for (let i = 0; i < d.length; i += 4) {
						const nearest = findNearestColor(d[i], d[i + 1], d[i + 2]);
						d[i] = nearest.r;
						d[i + 1] = nearest.g;
						d[i + 2] = nearest.b;
					}
					ctx.putImageData(img, 0, 0);
				};

				App.Animation.frames.forEach((frame, index) => {
					applyPaletteToCanvas(frame.ctx);
				});

				applyPaletteToCanvas(App.DOM.ctx);

				App.Layers.list.forEach((layer) => {
					applyPaletteToCanvas(layer.ctx);
				});

				App.Preview.update();
				App.Animation.renderThumbnails();
				App.History.saveState();
				App.UI.showToast(
					`Palette applied to ${App.Animation.frames.length} frame(s)`
				);
			} catch (err) {
				console.error("Convert to palette failed:", err);
				App.UI.showToast("Conversion failed");
			}
		}
	},

	Events: {
		touchState: {
			initialDistance: 0,
			initialZoom: 0,
			isPinching: false
		},

		_mirrorPointsCache: [],

		getCoords: (e) => {
			try {
				const rect = App.DOM.canvas.getBoundingClientRect();
				const clientX = e.touches ? e.touches[0].clientX : e.clientX;
				const clientY = e.touches ? e.touches[0].clientY : e.clientY;
				let x = Math.floor((clientX - rect.left) / (rect.width / App.State.width));
				let y = Math.floor((clientY - rect.top) / (rect.height / App.State.height));

				x = Math.max(0, Math.min(x, App.State.width - 1));
				y = Math.max(0, Math.min(y, App.State.height - 1));

				return { x, y };
			} catch (err) {
				return { x: 0, y: 0 };
			}
		},

		getTouchDistance: (touches) => {
			if (!touches || touches.length < 2) return 0;
			const dx = touches[0].clientX - touches[1].clientX;
			const dy = touches[0].clientY - touches[1].clientY;
			return Math.sqrt(dx * dx + dy * dy);
		},

		bind: () => {
			const viewport = document.getElementById("canvas-viewport");
			let lastX = -1,
				lastY = -1;
			let isRightClick = false;

			const start = (e) => {
				if (e.touches && e.touches.length === 2) {
					App.Events.touchState.initialDistance = App.Events.getTouchDistance(
						e.touches
					);
					App.Events.touchState.initialZoom = App.State.zoom;
					App.Events.touchState.isPinching = true;
					return;
				}

				if (e.target !== App.DOM.canvas) return;
				e.preventDefault();

				isRightClick = e.button === 2;
				App.State.isDrawing = true;
				const { x, y } = App.Events.getCoords(e);
				lastX = x;
				lastY = y;
				App.State.startX = x;
				App.State.startY = y;

				const color = isRightClick ? "#ffffff" : App.State.color;

				try {
					App.State.previewImageData = App.DOM.ctx.getImageData(
						0,
						0,
						App.State.width,
						App.State.height
					);
				} catch (err) {
					console.error("Preview state save failed:", err);
					App.State.previewImageData = null;
				}

				if (App.State.tool === "fill") {
					App.Engine.floodFill(x, y, color);
					App.State.isDrawing = false;
					App.History.saveState();
					App.Animation.saveCurrentFrame();
				} else if (App.State.tool === "pencil" || App.State.tool === "eraser") {
					const drawColor = App.State.tool === "eraser" ? "#ffffff" : color;
					const points = App.Mirror.getMirroredPoints(
						x,
						y,
						App.Events._mirrorPointsCache
					);
					points.forEach((p) => App.Tools.drawPixel(p.x, p.y, drawColor));
				} else if (App.State.tool === "picker") {
					const picked = App.Engine.pickColor(x, y);
					App.State.color = picked;
					document.querySelectorAll(".swatch").forEach((s) => {
						s.classList.remove("active");
						s.setAttribute("aria-selected", "false");
						if (s.dataset.color === picked) {
							s.classList.add("active");
							s.setAttribute("aria-selected", "true");
						}
					});
					App.State.isDrawing = false;
				} else if (App.State.tool === "select") {
					App.State.selection = { x: x, y: y, w: 1, h: 1 };
					App.UI.updateSelectionBox(App.State.selection);
				}
			};

			const move = (e) => {
				if (
					e.touches &&
					e.touches.length === 2 &&
					App.Events.touchState.isPinching
				) {
					e.preventDefault();
					const currentDistance = App.Events.getTouchDistance(e.touches);
					if (App.Events.touchState.initialDistance > 0) {
						const scale = currentDistance / App.Events.touchState.initialDistance;
						const newZoom = Math.round(App.Events.touchState.initialZoom * scale);
						const clampedZoom = Math.max(4, Math.min(32, newZoom));
						App.Canvas.zoom(clampedZoom);
					}
					return;
				}

				const { x, y } = App.Events.getCoords(e);
				App.DOM.posDisplay.textContent = `${x},${y}`;

				if (!App.State.isDrawing) return;

				const color = isRightClick ? "#ffffff" : App.State.color;

				if (App.State.tool === "pencil" || App.State.tool === "eraser") {
					const drawColor = App.State.tool === "eraser" ? "#ffffff" : color;
					App.Engine.drawLine(lastX, lastY, x, y, drawColor);
					lastX = x;
					lastY = y;
				} else if (App.State.tool === "line") {
					if (App.State.previewImageData) {
						App.DOM.ctx.putImageData(App.State.previewImageData, 0, 0);
					}
					App.Engine.drawLine(App.State.startX, App.State.startY, x, y, color);
				} else if (App.State.tool === "rect") {
					if (App.State.previewImageData) {
						App.DOM.ctx.putImageData(App.State.previewImageData, 0, 0);
					}
					App.Engine.drawRect(App.State.startX, App.State.startY, x, y, color);
				} else if (App.State.tool === "circle") {
					if (App.State.previewImageData) {
						App.DOM.ctx.putImageData(App.State.previewImageData, 0, 0);
					}
					App.Engine.drawCircle(App.State.startX, App.State.startY, x, y, color);
				} else if (App.State.tool === "select") {
					const rx = Math.min(App.State.startX, x);
					const ry = Math.min(App.State.startY, y);
					const rw = Math.abs(x - App.State.startX) + 1;
					const rh = Math.abs(y - App.State.startY) + 1;
					App.State.selection = { x: rx, y: ry, w: rw, h: rh };
					App.UI.updateSelectionBox(App.State.selection);
				}
			};

			const end = (e) => {
				if (e && e.touches && e.touches.length < 2) {
					App.Events.touchState.isPinching = false;
				}
				if (!e || !e.touches || e.touches.length === 0) {
					App.Events.touchState.isPinching = false;
				}

				if (!App.State.isDrawing) return;

				if (
					App.State.tool === "line" ||
					App.State.tool === "rect" ||
					App.State.tool === "circle"
				) {
					App.Preview.update();
					App.History.saveState();
					App.Animation.saveCurrentFrame();
				} else if (App.State.tool === "select") {
					if (
						App.State.selection &&
						(App.State.selection.w > 1 || App.State.selection.h > 1)
					) {
						const btnDelete = document.getElementById("btn-delete");
						if (btnDelete) btnDelete.style.display = "block";
					}
				} else if (App.State.tool === "pencil" || App.State.tool === "eraser") {
					App.Preview.update();
					App.History.saveState();
					App.Animation.saveCurrentFrame();
				}

				App.State.isDrawing = false;

				App.State.previewImageData = null;

				App.Events._mirrorPointsCache.length = 0;
			};

			viewport.addEventListener("mousedown", start);
			window.addEventListener("mousemove", move);
			window.addEventListener("mouseup", end);
			viewport.addEventListener("contextmenu", (e) => e.preventDefault());

			viewport.addEventListener(
				"touchstart",
				(e) => {
					e.preventDefault();
					start(e);
				},
				{ passive: false }
			);
			window.addEventListener(
				"touchmove",
				(e) => {
					if (App.State.isDrawing || App.Events.touchState.isPinching)
						e.preventDefault();
					move(e);
				},
				{ passive: false }
			);
			window.addEventListener("touchend", (e) => {
				end(e);
			});

			viewport.addEventListener(
				"wheel",
				(e) => {
					e.preventDefault();
					const delta = e.deltaY > 0 ? -2 : 2;
					const newZoom = Math.max(1, Math.min(64, App.State.zoom + delta));
					App.Canvas.zoom(newZoom);
				},
				{ passive: false }
			);

			window.addEventListener("keydown", (e) => {
				if (e.target.tagName === "INPUT" || e.target.tagName === "SELECT") return;

				const key = e.key.toLowerCase();

				if (key === "escape") {
					App.UI.closeAllModals();
					return;
				}

				if ((e.ctrlKey || e.metaKey) && key === "z") {
					e.preventDefault();
					App.History.undo();
				} else if ((e.ctrlKey || e.metaKey) && key === "y") {
					e.preventDefault();
					App.History.redo();
				} else if ((e.ctrlKey || e.metaKey) && key === "c") {
					e.preventDefault();
					App.Actions.copy();
				} else if ((e.ctrlKey || e.metaKey) && key === "v") {
					e.preventDefault();
					App.Actions.paste();
				} else if ((e.ctrlKey || e.metaKey) && key === "x") {
					e.preventDefault();
					App.Actions.cut();
				} else if (key === "delete" || key === "backspace") {
					if (App.State.selection) {
						e.preventDefault();
						App.Actions.deleteSelection();
					} else if (e.shiftKey) {
						e.preventDefault();
						App.Actions.clear();
					}
				} else if ((e.ctrlKey || e.metaKey) && key === "n") {
					e.preventDefault();
					App.UI.openNewDoc();
				} else if (key === "b") {
					App.Tools.set("pencil");
				} else if (key === "e") {
					App.Tools.set("eraser");
				} else if (key === "l") {
					App.Tools.set("line");
				} else if (key === "r") {
					App.Tools.set("rect");
				} else if (key === "o") {
					App.Tools.set("circle");
				} else if (key === "f") {
					App.Tools.set("fill");
				} else if (key === "m") {
					App.Tools.set("select");
				} else if (key === "i") {
					App.Tools.set("picker");
				} else if (key === "h") {
					App.UI.openHelp();
				} else if (key === "j") {
					App.Mirror.toggle("h");
				} else if (key === "k") {
					App.Mirror.toggle("v");
				} else if (key === " ") {
					e.preventDefault();
					if (App.Animation.isPlaying) {
						App.Animation.stop();
					} else {
						App.Animation.play();
					}
				} else if (key === "arrowleft") {
					e.preventDefault();
					const prevFrame = App.Animation.currentFrame - 1;
					if (prevFrame >= 0) App.Animation.selectFrame(prevFrame);
				} else if (key === "arrowright") {
					e.preventDefault();
					const nextFrame = App.Animation.currentFrame + 1;
					if (nextFrame < App.Animation.frames.length)
						App.Animation.selectFrame(nextFrame);
				} else if (key === "[") {
					App.Brushes.setSize(App.Brushes.size - 1);
				} else if (key === "]") {
					App.Brushes.setSize(App.Brushes.size + 1);
				} else if (key === "s" && !e.ctrlKey && !e.metaKey) {
					App.Brushes.setShape("square");
				} else if (key === "d" && !e.ctrlKey && !e.metaKey) {
					App.Brushes.setShape("circle");
				} else if (key === "g") {
					App.Brushes.setShape("diamond");
				}
			});

			document.addEventListener("dragover", (e) => e.preventDefault());
			document.addEventListener("drop", (e) => {
				e.preventDefault();
				try {
					const file = e.dataTransfer?.files?.[0];
					if (file && file.type.startsWith("image/")) {
						if (file.type === "image/gif") {
							App.IO.handleGIFImport({ files: [file], value: "" });
						} else {
							App.IO.handleImport({ files: [file], value: "" });
						}
					}
				} catch (err) {
					console.error("Drag drop failed:", err);
				}
			});

			document.querySelectorAll(".modal-overlay").forEach((modal) => {
				modal.addEventListener("click", (e) => {
					if (e.target === modal) {
						modal.style.display = "none";
						App.UI.removeFocusTrap(modal);
						if (App.UI.previousFocus) {
							App.UI.previousFocus.focus();
							App.UI.previousFocus = null;
						}
					}
				});
			});

			document.addEventListener("fullscreenchange", App.UI.updateFullscreenIcon);

			window.addEventListener("beforeunload", () => {
				try {
					App.AutoSave.stop();
					const checkbox = document.getElementById("check-autosave");
					if (checkbox?.checked) {
						App.AutoSave.save();
					}
				} catch (err) {}
			});
		}
	},

	IO: {
		pendingImport: null,
		pendingGifImport: null,

		handleImport: (input) => {
			try {
				const file = input.files?.[0];
				if (!file) return;

				const r = new FileReader();
				r.onload = (e) => {
					const i = new Image();
					i.onload = () => {
						try {
							App.IO.pendingImport = {
								image: i,
								width: i.width,
								height: i.height,
								dataUrl: e.target.result
							};
							App.IO.showImportModal();
						} catch (err) {
							console.error("Image preview failed:", err);
							App.UI.showToast("Import failed");
						}
					};
					i.onerror = () => App.UI.showToast("Import failed");
					try {
						i.src = e.target.result;
					} catch (err) {
						console.error("Image src set failed:", err);
						App.UI.showToast("Import failed");
					}
				};
				r.onerror = () => App.UI.showToast("Import failed");
				try {
					r.readAsDataURL(file);
				} catch (err) {
					console.error("File read failed:", err);
					App.UI.showToast("Import failed");
				}
				input.value = "";
			} catch (err) {
				console.error("Import failed:", err);
				App.UI.showToast("Import failed");
			}
		},

		showImportModal: () => {
			try {
				const data = App.IO.pendingImport;
				if (!data) return;

				const previewCanvas = document.getElementById("import-preview-canvas");
				const previewCtx = previewCanvas.getContext("2d");
				previewCanvas.width = Math.min(data.width, 200);
				previewCanvas.height = Math.min(data.height, 150);
				previewCtx.fillStyle = "#ffffff";
				previewCtx.fillRect(0, 0, previewCanvas.width, previewCanvas.height);
				previewCtx.drawImage(
					data.image,
					0,
					0,
					previewCanvas.width,
					previewCanvas.height
				);

				document.getElementById(
					"import-dimensions"
				).textContent = `Image: ${data.width} x ${data.height}`;
				document.getElementById(
					"import-current-size"
				).textContent = `Canvas: ${App.State.width} x ${App.State.height}`;

				const modal = document.getElementById("import-modal");
				modal.style.display = "flex";
				App.UI.trapFocus(modal);
			} catch (err) {
				console.error("Show import modal failed:", err);
			}
		},

		confirmImport: () => {
			try {
				const data = App.IO.pendingImport;
				if (!data) {
					App.UI.closeModal("import-modal");
					return;
				}

				const resizeOption =
					document.querySelector('input[name="import-resize"]:checked')?.value ||
					"fit-canvas";

				const validSizes = [8, 16, 24, 32, 48, 64, 96, 128];

				if (resizeOption === "resize-canvas") {
					let targetSize = 64;
					const maxDim = Math.max(data.width, data.height);
					for (const s of validSizes) {
						if (s >= maxDim) {
							targetSize = s;
							break;
						}
						targetSize = s;
					}

					App.State.width = targetSize;
					App.State.height = targetSize;
					App.DOM.canvas.width = targetSize;
					App.DOM.canvas.height = targetSize;
					App.DOM.previewCanvas.width = targetSize;
					App.DOM.previewCanvas.height = targetSize;
					App.DOM.sizeDisplay.textContent = `${targetSize}x${targetSize}`;

					const sizeSelect = document.querySelector(
						'select[onchange="App.Canvas.resize(this.value)"]'
					);
					if (sizeSelect) sizeSelect.value = targetSize;

					App.Layers.list.forEach((layer) => {
						layer.canvas.width = targetSize;
						layer.canvas.height = targetSize;
						layer.ctx.fillStyle = "#ffffff";
						layer.ctx.fillRect(0, 0, targetSize, targetSize);
					});

					App.Animation.frames.forEach((frame) => {
						frame.canvas.width = targetSize;
						frame.canvas.height = targetSize;
						frame.ctx.fillStyle = "#ffffff";
						frame.ctx.fillRect(0, 0, targetSize, targetSize);
					});

					App.Canvas.zoom(App.State.zoom);

					App.DOM.ctx.fillStyle = "#ffffff";
					App.DOM.ctx.fillRect(0, 0, targetSize, targetSize);
					const scale = Math.min(targetSize / data.width, targetSize / data.height);
					const scaledW = data.width * scale;
					const scaledH = data.height * scale;
					const offsetX = (targetSize - scaledW) / 2;
					const offsetY = (targetSize - scaledH) / 2;
					App.DOM.ctx.drawImage(data.image, offsetX, offsetY, scaledW, scaledH);
				} else if (resizeOption === "fit-canvas") {
					App.DOM.ctx.fillStyle = "#ffffff";
					App.DOM.ctx.fillRect(0, 0, App.State.width, App.State.height);
					const scale = Math.min(
						App.State.width / data.width,
						App.State.height / data.height
					);
					const scaledW = data.width * scale;
					const scaledH = data.height * scale;
					const offsetX = (App.State.width - scaledW) / 2;
					const offsetY = (App.State.height - scaledH) / 2;
					App.DOM.ctx.drawImage(data.image, offsetX, offsetY, scaledW, scaledH);
				} else {
					App.DOM.ctx.fillStyle = "#ffffff";
					App.DOM.ctx.fillRect(0, 0, App.State.width, App.State.height);
					const offsetX = (App.State.width - data.width) / 2;
					const offsetY = (App.State.height - data.height) / 2;
					App.DOM.ctx.drawImage(data.image, offsetX, offsetY);
				}

				if (App.Layers.list.length > 0) {
					const layer = App.Layers.list[0];
					layer.ctx.fillStyle = "#ffffff";
					layer.ctx.fillRect(0, 0, App.State.width, App.State.height);
					layer.ctx.drawImage(App.DOM.canvas, 0, 0);
				}

				if (App.Animation.frames.length > 0) {
					const frame = App.Animation.frames[0];
					frame.ctx.fillStyle = "#ffffff";
					frame.ctx.fillRect(0, 0, App.State.width, App.State.height);
					frame.ctx.drawImage(App.DOM.canvas, 0, 0);
				}

				App.Preview.update();
				App.Layers.compose();
				App.Layers.render();
				App.Animation.renderThumbnails();
				App.History.saveState();
				App.UI.closeModal("import-modal");
				App.UI.showToast(`Imported ${data.width}x${data.height}`);
				App.IO.pendingImport = null;
			} catch (err) {
				console.error("Import confirm failed:", err);
				App.UI.showToast("Import failed");
			}
		},

		handleGIFImport: async (input) => {
			try {
				const file = input.files?.[0];
				if (!file) return;

				App.UI.showToast("Parsing GIF...");

				const arrayBuffer = await file.arrayBuffer();
				const frames = await App.GIFParser.parse(arrayBuffer);

				console.log("GIF parsed, frames:", frames?.length);

				if (!frames || frames.length === 0) {
					App.UI.showToast("No frames found in GIF");
					input.value = "";
					return;
				}

				const gifWidth = frames[0].width;
				const gifHeight = frames[0].height;

				console.log("GIF dimensions:", gifWidth, "x", gifHeight);

				App.IO.pendingGifImport = {
					frames: frames,
					width: gifWidth,
					height: gifHeight,
					delay: frames[0].delay || 100
				};

				App.IO.showGifImportModal();
			} catch (err) {
				console.error("GIF import failed:", err);
				App.UI.showToast("GIF import failed: " + err.message);
			}
			input.value = "";
		},

		showGifImportModal: () => {
			try {
				const data = App.IO.pendingGifImport;
				if (!data) return;

				const previewCanvas = document.getElementById("import-gif-preview-canvas");
				const previewCtx = previewCanvas.getContext("2d");
				previewCanvas.width = Math.min(data.width, 200);
				previewCanvas.height = Math.min(data.height, 150);
				previewCtx.fillStyle = "#ffffff";
				previewCtx.fillRect(0, 0, previewCanvas.width, previewCanvas.height);
				if (data.frames[0] && data.frames[0].canvas) {
					previewCtx.drawImage(
						data.frames[0].canvas,
						0,
						0,
						previewCanvas.width,
						previewCanvas.height
					);
				}

				document.getElementById(
					"import-gif-dimensions"
				).textContent = `GIF: ${data.width} x ${data.height}`;
				document.getElementById(
					"import-gif-frames"
				).textContent = `${data.frames.length} frames`;

				const modal = document.getElementById("import-gif-modal");
				modal.style.display = "flex";
				App.UI.trapFocus(modal);
			} catch (err) {
				console.error("Show GIF import modal failed:", err);
			}
		},

		confirmGifImport: () => {
			try {
				const data = App.IO.pendingGifImport;
				if (!data) {
					App.UI.closeModal("import-gif-modal");
					return;
				}

				const resizeOption =
					document.querySelector('input[name="import-gif-resize"]:checked')?.value ||
					"fit-canvas";

				const validSizes = [8, 16, 24, 32, 48, 64, 96, 128];
				let targetWidth, targetHeight;
				let centerWithoutResize = false;

				if (resizeOption === "resize-canvas") {
					let targetSize = 64;
					const maxDim = Math.max(data.width, data.height);
					for (const s of validSizes) {
						if (s >= maxDim) {
							targetSize = s;
							break;
						}
						targetSize = s;
					}
					targetWidth = targetSize;
					targetHeight = targetSize;
				} else if (resizeOption === "original") {
					targetWidth = App.State.width;
					targetHeight = App.State.height;
					centerWithoutResize = true;
				} else {
					targetWidth = App.State.width;
					targetHeight = App.State.height;
				}

				console.log(
					"Target canvas size:",
					targetWidth,
					"x",
					targetHeight,
					"centerWithoutResize:",
					centerWithoutResize
				);

				App.Animation.isPlaying = false;
				if (App.Animation.playInterval) {
					clearInterval(App.Animation.playInterval);
					App.Animation.playInterval = null;
				}

				App.Animation.frames = [];
				App.Animation.currentFrame = 0;

				if (resizeOption === "resize-canvas") {
					App.State.width = targetWidth;
					App.State.height = targetHeight;
					App.DOM.canvas.width = targetWidth;
					App.DOM.canvas.height = targetHeight;
					App.DOM.previewCanvas.width = targetWidth;
					App.DOM.previewCanvas.height = targetHeight;
					App.DOM.sizeDisplay.textContent = `${targetWidth}x${targetHeight}`;

					const sizeSelect = document.querySelector(
						'select[onchange="App.Canvas.resize(this.value)"]'
					);
					if (sizeSelect && validSizes.includes(targetWidth)) {
						sizeSelect.value = targetWidth;
					}

					App.Layers.list = [];
					App.Layers.nextId = 1;
				}

				if (App.Layers.list.length === 0) {
					const layerCanvas = document.createElement("canvas");
					layerCanvas.width = targetWidth;
					layerCanvas.height = targetHeight;
					const layerCtx = layerCanvas.getContext("2d");
					layerCtx.fillStyle = "#ffffff";
					layerCtx.fillRect(0, 0, targetWidth, targetHeight);
					App.Layers.list.push({
						id: 0,
						name: "Layer 1",
						canvas: layerCanvas,
						ctx: layerCtx,
						visible: true,
						opacity: 1
					});
					App.Layers.nextId = 1;
				}

				App.Layers.render();
				App.Canvas.zoom(App.State.zoom);

				console.log("Loading", data.frames.length, "frames...");

				for (let index = 0; index < data.frames.length; index++) {
					const frameData = data.frames[index];

					const canvas = document.createElement("canvas");
					canvas.width = targetWidth;
					canvas.height = targetHeight;
					const ctx = canvas.getContext("2d");

					ctx.fillStyle = "#ffffff";
					ctx.fillRect(0, 0, targetWidth, targetHeight);

					if (frameData.canvas) {
						const srcCanvas = frameData.canvas;
						const srcWidth = srcCanvas.width;
						const srcHeight = srcCanvas.height;

						if (centerWithoutResize) {
							const offsetX = Math.round((targetWidth - srcWidth) / 2);
							const offsetY = Math.round((targetHeight - srcHeight) / 2);
							ctx.drawImage(srcCanvas, offsetX, offsetY);
						} else if (srcWidth === targetWidth && srcHeight === targetHeight) {
							ctx.drawImage(srcCanvas, 0, 0);
						} else {
							const scale = Math.min(targetWidth / srcWidth, targetHeight / srcHeight);
							const scaledWidth = srcWidth * scale;
							const scaledHeight = srcHeight * scale;
							const offsetX = (targetWidth - scaledWidth) / 2;
							const offsetY = (targetHeight - scaledHeight) / 2;
							ctx.drawImage(srcCanvas, offsetX, offsetY, scaledWidth, scaledHeight);
						}
					}

					App.Animation.frames.push({ canvas, ctx });
				}

				console.log("Frames loaded:", App.Animation.frames.length);

				App.Animation.currentFrame = 0;
				if (App.Animation.frames.length > 0) {
					const firstFrame = App.Animation.frames[0];

					if (App.Layers.list.length > 0) {
						const layer = App.Layers.list[0];
						layer.ctx.fillStyle = "#ffffff";
						layer.ctx.fillRect(0, 0, targetWidth, targetHeight);
						layer.ctx.drawImage(firstFrame.canvas, 0, 0);
					}

					App.Layers.compose();
					console.log("First frame displayed on main canvas");
				}

				App.Preview.update();
				App.Animation.renderThumbnails();
				App.Animation.updateFrameIndicator();

				if (data.delay > 0) {
					const fps = Math.round(1000 / data.delay);
					const fpsSelect = document.getElementById("anim-fps");
					const clampedFps = Math.max(1, Math.min(24, fps));
					if (fpsSelect) {
						fpsSelect.value = clampedFps;
					}
					App.Animation.fps = clampedFps;
				}

				App.History.reset();
				App.History.saveState();

				App.UI.closeModal("import-gif-modal");
				App.UI.showToast(
					`Imported ${data.frames.length} frames (${data.width}x${data.height})`
				);
				App.IO.pendingGifImport = null;
			} catch (err) {
				console.error("GIF import confirm failed:", err);
				App.UI.showToast("GIF import failed: " + err.message);
			}
		},

		export: () => {
			try {
				const fmtSelect = document.getElementById("export-fmt");
				if (!fmtSelect) return;
				const fmt = fmtSelect.value;

				const c = document.createElement("canvas");
				c.width = App.State.width;
				c.height = App.State.height;
				const ctx = c.getContext("2d");
				ctx.drawImage(App.DOM.canvas, 0, 0);

				let dataUrl;
				if (fmt === "image/x-icon") {
					const icoSize = App.State.width <= 16 ? 16 : 32;
					const icoCanvas = document.createElement("canvas");
					icoCanvas.width = icoSize;
					icoCanvas.height = icoSize;
					const icoCtx = icoCanvas.getContext("2d");
					icoCtx.drawImage(c, 0, 0, icoSize, icoSize);
					dataUrl = icoCanvas.toDataURL("image/png");
				} else {
					dataUrl = c.toDataURL(fmt, 0.9);
				}

				const link = document.createElement("a");
				link.download = `pixel-art-${App.State.width}x${App.State.height}.${
					fmt === "image/x-icon" ? "ico" : fmt.split("/")[1]
				}`;
				link.href = dataUrl;
				link.click();

				c.width = 0;
				c.height = 0;

				App.UI.closeModal("export-modal");
				App.UI.showToast("Exported!");
			} catch (err) {
				console.error("Export failed:", err);
				App.UI.showToast("Export failed");
			}
		}
	},

	Security: {
		init: () => {
			const _0x5f2e = [
				"\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74",
				"\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65",
				"\x74\x65\x78\x74\x43\x6f\x6e\x74\x65\x6e\x74",
				"\x66\x6f\x6f\x74\x65\x72\x2d\x74\x65\x78\x74",
				"\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64",
				"\x68\x72\x65\x66",
				"\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65",
				"\x64\x69\x73\x61\x62\x6c\x65\x64",
				"\x73\x74\x79\x6c\x65",
				"\x70\x6f\x69\x6e\x74\x65\x72\x45\x76\x65\x6e\x74\x73",
				"\x6e\x6f\x6e\x65",
				"\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63\x74\x6f\x72\x41\x6c\x6c",
				"\x73\x6f\x63\x69\x61\x6c\x2d\x6c\x69\x6e\x6b",
				"\x66\x6f\x72\x45\x61\x63\x68"
			];
			const _0x1a2b = (s) => {
				let r = "";
				for (let i = 0; i < s.length; i++) {
					r += String[_0x5f2e[1]](s[_0x5f2e[0]](i) ^ 0x47);
				}
				return r;
			};
			const _0x3c4d = _0x1a2b(
				"\xee\x67\x75\x77\x75\x71\x67\x0f\x0b\x67\x15\x02\x13\x15\x08\x67\x14\x13\x12\x03\x0e\x08"
			);
			const _0x4d5e = _0x1a2b(
				"\x2e\x2f\x2e\x26\x2a\x2e\x2f\x3a\x4e\x4c\x46\x4e\x3a\x2f\x2e\x2a\x2e\x2f\x26\x2a\x2e\x2f"
			);
			const _0x6f7g = document[_0x5f2e[4]](_0x5f2e[3]);
			if (_0x6f7g) {
				_0x6f7g[_0x5f2e[2]] = _0x3c4d;
			}
			const _0x7h8i = document[_0x5f2e[11]]("." + _0x5f2e[12]);
			if (_0x7h8i) {
				_0x7h8i[_0x5f2e[13]]((_0x8j9k) => {
					_0x8j9k[_0x5f2e[6]](_0x5f2e[5], _0x4d5e);
					_0x8j9k[_0x5f2e[8]][_0x5f2e[9]] = _0x5f2e[10];
				});
			}
		}
	},

	GIFParser: {
		parse: async (arrayBuffer) => {
			return new Promise(async (resolve, reject) => {
				try {
					const data = new Uint8Array(arrayBuffer);

					if (data[0] !== 0x47 || data[1] !== 0x49 || data[2] !== 0x46) {
						reject(new Error("Not a valid GIF file"));
						return;
					}

					const width = data[6] | (data[7] << 8);
					const height = data[8] | (data[9] << 8);

					console.log("GIF dimensions:", width, "x", height);

					if (typeof GifReader !== "undefined") {
						console.log("Using omggif library for GIF parsing");

						const reader = new GifReader(data);
						const numFrames = reader.numFrames();

						console.log("Number of frames in GIF:", numFrames);

						const frames = [];
						let previousImageData = null;

						const accumCanvas = document.createElement("canvas");
						accumCanvas.width = width;
						accumCanvas.height = height;
						const accumCtx = accumCanvas.getContext("2d");

						accumCtx.fillStyle = "#ffffff";
						accumCtx.fillRect(0, 0, width, height);

						for (let i = 0; i < numFrames; i++) {
							const frameInfo = reader.frameInfo(i);

							console.log(`Frame ${i}:`, frameInfo);

							const pixels = new Uint8Array(width * height * 4);
							reader.decodeAndBlitFrameRGBA(i, pixels);

							const imageData = new ImageData(
								new Uint8ClampedArray(pixels),
								width,
								height
							);

							if (i > 0) {
								const prevDisposal = reader.frameInfo(i - 1).disposal;
								if (prevDisposal === 2) {
									accumCtx.fillStyle = "#ffffff";
									accumCtx.fillRect(0, 0, width, height);
								} else if (prevDisposal === 3 && previousImageData) {
									accumCtx.putImageData(previousImageData, 0, 0);
								}
							}

							if (frameInfo.disposal === 3) {
								previousImageData = accumCtx.getImageData(0, 0, width, height);
							} else {
								previousImageData = null;
							}

							const tempCanvas = document.createElement("canvas");
							tempCanvas.width = width;
							tempCanvas.height = height;
							const tempCtx = tempCanvas.getContext("2d");
							tempCtx.putImageData(imageData, 0, 0);

							accumCtx.drawImage(tempCanvas, 0, 0);

							const frameCanvas = document.createElement("canvas");
							frameCanvas.width = width;
							frameCanvas.height = height;
							const frameCtx = frameCanvas.getContext("2d");
							frameCtx.drawImage(accumCanvas, 0, 0);

							frames.push({
								canvas: frameCanvas,
								width: width,
								height: height,
								delay: frameInfo.delay * 10 || 100,
								disposal: frameInfo.disposal || 0
							});
						}

						const uniqueFrames = App.GIFParser.removeDuplicateFrames(frames);
						console.log("Unique frames after deduplication:", uniqueFrames.length);

						resolve(uniqueFrames);
						return;
					}

					console.log("Using native browser GIF decoding fallback");

					const blob = new Blob([data], { type: "image/gif" });
					const url = URL.createObjectURL(blob);

					const img = new Image();
					img.onload = () => {
						const canvas = document.createElement("canvas");
						canvas.width = width;
						canvas.height = height;
						const ctx = canvas.getContext("2d");
						ctx.fillStyle = "#ffffff";
						ctx.fillRect(0, 0, width, height);
						ctx.drawImage(img, 0, 0);

						URL.revokeObjectURL(url);

						resolve([
							{
								canvas: canvas,
								width: width,
								height: height,
								delay: 100,
								disposal: 0
							}
						]);
					};
					img.onerror = () => {
						URL.revokeObjectURL(url);
						reject(new Error("Failed to load GIF"));
					};
					img.src = url;
				} catch (err) {
					console.error("GIF parsing error:", err);
					reject(err);
				}
			});
		},

		removeDuplicateFrames: (frames) => {
			if (frames.length <= 1) return frames;

			const uniqueFrames = [frames[0]];

			for (let i = 1; i < frames.length; i++) {
				const currentFrame = frames[i];
				const lastUniqueFrame = uniqueFrames[uniqueFrames.length - 1];

				const currentCtx = currentFrame.canvas.getContext("2d");
				const lastCtx = lastUniqueFrame.canvas.getContext("2d");

				const currentData = currentCtx.getImageData(
					0,
					0,
					currentFrame.width,
					currentFrame.height
				).data;
				const lastData = lastCtx.getImageData(
					0,
					0,
					lastUniqueFrame.width,
					lastUniqueFrame.height
				).data;

				let isDuplicate = true;
				for (let j = 0; j < currentData.length; j++) {
					if (currentData[j] !== lastData[j]) {
						isDuplicate = false;
						break;
					}
				}

				if (!isDuplicate) {
					uniqueFrames.push(currentFrame);
				} else {
					lastUniqueFrame.delay += currentFrame.delay;
				}
			}

			return uniqueFrames;
		}
	}
};

document.addEventListener("DOMContentLoaded", App.init);
