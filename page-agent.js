(function() {	try {		if (typeof document != "undefined") {			var elementStyle = document.createElement("style");			elementStyle.appendChild(document.createTextNode("._wrapper_1tu05_1 {\n	position: fixed;\n	bottom: 100px;\n	left: 50%;\n	transform: translateX(-50%) translateY(20px);\n	opacity: 0;\n	z-index: 2147483642; /* 比 SimulatorMask 高一层 */\n	box-sizing: border-box;\n\n	overflow: visible;\n\n	* {\n		box-sizing: border-box;\n	}\n\n	--width: 360px;\n	--height: 40px;\n	--border-radius: 12px;\n\n	--side-space: 12px; /* 控制栏两侧的间距 */\n	--history-width: calc(var(--width) - var(--side-space) * 2);\n\n	--color-1: rgb(57, 182, 255);\n	--color-2: rgb(189, 69, 251);\n	--color-3: rgb(255, 87, 51);\n	--color-4: rgb(255, 214, 0);\n\n	width: var(--width);\n	height: var(--height);\n\n	transition: all 0.3s ease-in-out;\n\n	/* 响应式设计 */\n	@media (max-width: 480px) {\n		width: calc(100vw - 40px);\n		--width: calc(100vw - 40px);\n	}\n\n	._background_1tu05_39 {\n		position: absolute;\n		inset: -2px -8px;\n		border-radius: calc(var(--border-radius) + 4px);\n		filter: blur(16px);\n		overflow: hidden;\n		/* mix-blend-mode: lighten; */\n		/* display: none; */\n\n		&::before {\n			content: '';\n			z-index: -1;\n			pointer-events: none;\n			position: absolute;\n			width: 100%;\n			height: 100%;\n			/* left: -100%; */\n			left: 0;\n			top: 0;\n\n			background-image: linear-gradient(\n				to bottom left,\n				var(--color-1),\n				var(--color-2),\n				var(--color-1)\n			);\n			animation: _mask-running_1tu05_1 2s linear infinite;\n		}\n		&::after {\n			content: '';\n			z-index: -1;\n			pointer-events: none;\n			position: absolute;\n			width: 100%;\n			height: 100%;\n			left: 0;\n			top: 0;\n\n			background-image: linear-gradient(\n				to bottom left,\n				var(--color-2),\n				var(--color-1),\n				var(--color-2)\n			);\n			animation: _mask-running_1tu05_1 2s linear infinite;\n			animation-delay: 1s;\n		}\n	}\n}\n\n@keyframes _mask-running_1tu05_1 {\n	from {\n		transform: translateX(-100%);\n	}\n	to {\n		transform: translateX(100%);\n	}\n}\n\n/* 控制栏 */\n._header_1tu05_99 {\n	display: flex;\n	align-items: center;\n	justify-content: space-between;\n	padding: 8px 12px;\n	user-select: none;\n\n	position: absolute;\n	inset: 0;\n\n	cursor: pointer;\n	flex-shrink: 0; /* 防止 header 被压缩 */\n\n	background: rgba(0, 0, 0, 0.5);\n	backdrop-filter: blur(10px);\n	border-radius: var(--border-radius);\n	background-clip: padding-box;\n\n	box-shadow:\n		0 0 0px 2px rgba(255, 255, 255, 0.4),\n		0 0 5px 1px rgba(255, 255, 255, 0.3);\n\n	._statusSection_1tu05_121 {\n		display: flex;\n		align-items: center;\n		gap: 8px;\n		flex: 1;\n		min-height: 24px; /* 确保垂直居中 */\n\n		._indicator_1tu05_128 {\n			width: 6px;\n			height: 6px;\n			border-radius: 50%;\n			background: rgba(255, 255, 255, 0.5);\n			flex-shrink: 0;\n			animation: none; /* 默认无动画 */\n\n			/* 运行状态 - 有动画 */\n			&._thinking_1tu05_137 {\n				background: rgb(57, 182, 255);\n				animation: _pulse_1tu05_1 0.8s ease-in-out infinite;\n			}\n\n			&._tool_executing_1tu05_142 {\n				background: rgb(189, 69, 251);\n				animation: _pulse_1tu05_1 0.6s ease-in-out infinite;\n			}\n\n			&._retry_1tu05_147 {\n				background: rgb(255, 214, 0);\n				animation: _retryPulse_1tu05_1 1s ease-in-out infinite;\n			}\n\n			/* 静止状态 - 无动画 */\n			&._completed_1tu05_153,\n			&._input_1tu05_154,\n			&._output_1tu05_155 {\n				background: rgb(34, 197, 94);\n				animation: none;\n			}\n\n			&._error_1tu05_160 {\n				background: rgb(239, 68, 68);\n				animation: none;\n			}\n		}\n\n		._statusText_1tu05_166 {\n			color: white;\n			font-size: 12px;\n			line-height: 1;\n			font-weight: 500;\n			transition: all 0.3s ease-in-out;\n			position: relative;\n			overflow: hidden;\n			display: flex;\n			align-items: center;\n			min-height: 24px; /* 确保垂直居中 */\n\n			&._fadeOut_1tu05_178 {\n				animation: _statusTextFadeOut_1tu05_1 0.3s ease forwards;\n			}\n\n			&._fadeIn_1tu05_182 {\n				animation: _statusTextFadeIn_1tu05_1 0.3s ease forwards;\n			}\n		}\n	}\n\n	._controls_1tu05_188 {\n		display: flex;\n		align-items: center;\n		gap: 4px;\n\n		._controlButton_1tu05_193 {\n			width: 24px;\n			height: 24px;\n			border: none;\n			border-radius: 4px;\n			background: rgba(255, 255, 255, 0.1);\n			color: white;\n			cursor: pointer;\n			display: flex;\n			align-items: center;\n			justify-content: center;\n			font-size: 12px;\n			line-height: 1;\n\n			&:hover {\n				background: rgba(255, 255, 255, 0.2);\n			}\n		}\n\n		._stopButton_1tu05_212 {\n			background: rgba(239, 68, 68, 0.2);\n			color: rgb(255, 41, 41);\n			font-weight: 600;\n\n			&:hover {\n				background: rgba(239, 68, 68, 0.3);\n			}\n		}\n	}\n}\n\n@keyframes _statusTextFadeIn_1tu05_1 {\n	0% {\n		opacity: 0;\n		transform: translateY(5px);\n	}\n	100% {\n		opacity: 1;\n		transform: translateY(0);\n	}\n}\n\n@keyframes _statusTextFadeOut_1tu05_1 {\n	0% {\n		opacity: 1;\n		transform: translateY(0);\n	}\n	100% {\n		opacity: 0;\n		transform: translateY(-5px);\n	}\n}\n\n._historySectionWrapper_1tu05_246 {\n	position: absolute;\n	width: var(--history-width);\n	bottom: var(--height);\n	left: var(--side-space);\n	z-index: -2;\n\n	padding-top: 0px;\n	visibility: collapse;\n	overflow: hidden;\n\n	transition: all 0.2s;\n\n	background: rgba(2, 0, 20, 0.5);\n	/* background: rgba(186, 186, 186, 0.2); */\n	backdrop-filter: blur(10px);\n\n	text-shadow: 0 0 1px rgba(0, 0, 0, 0.2);\n\n	border-top-left-radius: calc(var(--border-radius) + 4px);\n	border-top-right-radius: calc(var(--border-radius) + 4px);\n\n	/* border: 2px solid rgba(255, 255, 255, 0.8); */\n	border: 2px solid rgba(255, 255, 255, 0.4);\n	box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6);\n\n	/* @media (prefers-color-scheme: dark) {\n		box-shadow:\n			0 8px 32px 0 rgba(0, 0, 0, 0.85),\n			0 2px 12px 0 rgba(57, 182, 255, 0.1);\n	} */\n\n	._expanded_1tu05_278 & {\n		padding-top: 8px;\n		visibility: visible;\n	}\n\n	._historySection_1tu05_246 {\n		position: relative;\n		overflow-y: auto;\n		overscroll-behavior: contain;\n		scrollbar-width: none;\n		max-height: 0;\n		padding-inline: 8px;\n\n		transition: max-height 0.2s;\n\n		._expanded_1tu05_278 & {\n			max-height: min(500px, calc(100vh - 200px - var(--height)));\n		}\n\n		._historyItem_1tu05_297 {\n			/* backdrop-filter: blur(10px); */\n			padding: 8px 10px;\n			margin-bottom: 6px;\n			background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03));\n			border-radius: 8px;\n			border-left: 2px solid rgba(57, 182, 255, 0.5);\n			font-size: 12px;\n			color: white;\n			/* color: black; */\n			line-height: 1.3;\n			position: relative;\n			overflow: hidden;\n\n			/* 微妙的内阴影 */\n			box-shadow:\n				inset 0 1px 0 rgba(255, 255, 255, 0.1),\n				0 1px 3px rgba(0, 0, 0, 0.1);\n\n			&::before {\n				content: '';\n				position: absolute;\n				top: 0;\n				left: 0;\n				right: 0;\n				height: 1px;\n				background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);\n			}\n\n			&:hover {\n				background: linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.06));\n				/* transform: translateY(-1px); */\n				box-shadow:\n					inset 0 1px 0 rgba(255, 255, 255, 0.15),\n					0 2px 4px rgba(0, 0, 0, 0.15);\n			}\n\n			&:last-child {\n				margin-bottom: 10px;\n			}\n\n			&._completed_1tu05_153,\n			&._input_1tu05_154,\n			&._output_1tu05_155 {\n				border-left-color: rgb(34, 197, 94);\n				background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(34, 197, 94, 0.05));\n			}\n\n			&._error_1tu05_160 {\n				border-left-color: rgb(239, 68, 68);\n				background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05));\n			}\n\n			&._retry_1tu05_147 {\n				border-left-color: rgb(255, 214, 0);\n				background: linear-gradient(135deg, rgba(255, 214, 0, 0.1), rgba(255, 214, 0, 0.05));\n			}\n\n			&._observation_1tu05_355 {\n				border-left-color: rgb(147, 51, 234);\n				background: linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(147, 51, 234, 0.05));\n			}\n\n			&._question_1tu05_360 {\n				border-left-color: rgb(255, 159, 67);\n				background: linear-gradient(135deg, rgba(255, 159, 67, 0.15), rgba(255, 159, 67, 0.08));\n			}\n\n			/* 突出显示 done 成功结果 */\n			&._doneSuccess_1tu05_366 {\n				background: linear-gradient(\n					135deg,\n					rgba(34, 197, 94, 0.25),\n					rgba(34, 197, 94, 0.15),\n					rgba(34, 197, 94, 0.08)\n				);\n				border: none;\n				border-left: 4px solid rgb(34, 197, 94);\n				box-shadow:\n					0 4px 12px rgba(34, 197, 94, 0.3),\n					inset 0 1px 0 rgba(255, 255, 255, 0.2),\n					0 0 20px rgba(34, 197, 94, 0.1);\n				font-weight: 600;\n				color: rgb(220, 252, 231);\n				padding: 10px 12px;\n				margin-bottom: 8px;\n				border-radius: 8px;\n				position: relative;\n				overflow: hidden;\n\n				&::before {\n					background: linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.4), transparent);\n				}\n\n				&::after {\n					content: '';\n					position: absolute;\n					top: 0;\n					left: -100%;\n					width: 100%;\n					height: 100%;\n					background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);\n					animation: _shimmer_1tu05_1 2s ease-in-out infinite;\n				}\n\n				._historyContent_1tu05_402 {\n					._statusIcon_1tu05_403 {\n						font-size: 16px;\n						animation: _celebrate_1tu05_1 0.8s ease-in-out;\n						filter: drop-shadow(0 2px 4px rgba(34, 197, 94, 0.5));\n					}\n				}\n			}\n\n			/* 突出显示 done 失败结果 */\n			&._doneError_1tu05_412 {\n				background: linear-gradient(\n					135deg,\n					rgba(239, 68, 68, 0.25),\n					rgba(239, 68, 68, 0.15),\n					rgba(239, 68, 68, 0.08)\n				);\n				border: none;\n				border-left: 4px solid rgb(239, 68, 68);\n				box-shadow:\n					0 4px 12px rgba(239, 68, 68, 0.3),\n					inset 0 1px 0 rgba(255, 255, 255, 0.2),\n					0 0 20px rgba(239, 68, 68, 0.1);\n				font-weight: 600;\n				color: rgb(254, 226, 226);\n				padding: 10px 12px;\n				margin-bottom: 8px;\n				border-radius: 8px;\n				position: relative;\n				overflow: hidden;\n\n				&::before {\n					background: linear-gradient(90deg, transparent, rgba(239, 68, 68, 0.4), transparent);\n				}\n\n				._historyContent_1tu05_402 {\n					._statusIcon_1tu05_403 {\n						font-size: 16px;\n						filter: drop-shadow(0 2px 4px rgba(239, 68, 68, 0.5));\n					}\n				}\n			}\n\n			._historyContent_1tu05_402 {\n				display: flex;\n				align-items: flex-start;\n				gap: 8px;\n\n				word-break: break-all;\n				white-space: pre-wrap;\n\n				/* overflow-x: auto; */\n\n				._statusIcon_1tu05_403 {\n					font-size: 12px;\n					flex-shrink: 0;\n					line-height: 1;\n					transition: all 0.3s ease;\n				}\n\n				._reflectionLines_1tu05_462 {\n					display: flex;\n					flex-direction: column;\n					gap: 4px;\n				}\n			}\n\n			._historyMeta_1tu05_469 {\n				font-size: 10px;\n				color: rgba(255, 255, 255, 0.6);\n				/* color: rgb(61, 61, 61); */\n				margin-top: 8px;\n				line-height: 1;\n			}\n		}\n	}\n}\n\n/* 动画关键帧 - 更快的闪烁 */\n@keyframes _pulse_1tu05_1 {\n	0%,\n	100% {\n		opacity: 1;\n		transform: scale(1);\n	}\n	50% {\n		opacity: 0.4;\n		transform: scale(1.3);\n	}\n}\n\n/* 重试动画 - 旋转脉冲 */\n@keyframes _retryPulse_1tu05_1 {\n	0%,\n	100% {\n		opacity: 1;\n		transform: scale(1) rotate(0deg);\n	}\n	25% {\n		opacity: 0.6;\n		transform: scale(1.2) rotate(90deg);\n	}\n	50% {\n		opacity: 0.8;\n		transform: scale(1.1) rotate(180deg);\n	}\n	75% {\n		opacity: 0.6;\n		transform: scale(1.2) rotate(270deg);\n	}\n}\n\n/* 庆祝动画 */\n@keyframes _celebrate_1tu05_1 {\n	0%,\n	100% {\n		transform: scale(1);\n	}\n	25% {\n		transform: scale(1.2) rotate(-5deg);\n	}\n	75% {\n		transform: scale(1.2) rotate(5deg);\n	}\n}\n\n/* done 卡片的光泽效果 */\n@keyframes _shimmer_1tu05_1 {\n	0% {\n		left: -100%;\n	}\n	100% {\n		left: 100%;\n	}\n}\n\n/* 输入区域样式 */\n._inputSectionWrapper_1tu05_539 {\n	position: absolute;\n	width: var(--history-width);\n	top: var(--height);\n	left: var(--side-space);\n	z-index: -1;\n\n	visibility: visible;\n	overflow: hidden;\n\n	height: 48px;\n\n	transition: all 0.2s;\n\n	background: rgba(186, 186, 186, 0.2);\n	backdrop-filter: blur(10px);\n\n	border-bottom-left-radius: calc(var(--border-radius) + 4px);\n	border-bottom-right-radius: calc(var(--border-radius) + 4px);\n\n	border: 2px solid rgba(255, 255, 255, 0.3);\n	box-shadow: 0 1px 16px rgba(0, 0, 0, 0.4);\n\n	&._hidden_1tu05_562 {\n		visibility: collapse;\n		height: 0;\n	}\n\n	._inputSection_1tu05_539 {\n		display: flex;\n		align-items: center;\n		gap: 4px;\n		padding: 8px 8px;\n\n		._taskInput_1tu05_573 {\n			flex: 1;\n			background: rgba(255, 255, 255, 0.4);\n			border: 1px solid rgba(255, 255, 255, 0.3);\n			border-radius: 10px;\n			padding-inline: 10px;\n			color: rgb(20, 20, 20);\n			font-size: 12px;\n			height: 28px;\n			line-height: 1;\n			outline: none;\n			transition: all 0.2s ease;\n\n			/* text-shadow: 0 0 2px rgba(255, 255, 255, 0.8); */\n\n			/* border-color: rgba(57, 182, 255, 0.3); */\n\n			&::placeholder {\n				color: rgb(53, 53, 53);\n			}\n\n			&:focus {\n				background: rgba(255, 255, 255, 0.8);\n				border-color: rgba(57, 182, 255, 0.6);\n				box-shadow: 0 0 0 2px rgba(57, 182, 255, 0.2);\n			}\n		}\n	}\n}"));			document.head.appendChild(elementStyle);		}	} catch (e) {		console.error("vite-plugin-css-injected-by-js", e);	}})();
(function() {	try {		if (typeof document != "undefined") {			var elementStyle = document.createElement("style");			elementStyle.appendChild(document.createTextNode("._wrapper_1tu05_1 {\n	position: fixed;\n	bottom: 100px;\n	left: 50%;\n	transform: translateX(-50%) translateY(20px);\n	opacity: 0;\n	z-index: 2147483642; /* 比 SimulatorMask 高一层 */\n	box-sizing: border-box;\n\n	overflow: visible;\n\n	* {\n		box-sizing: border-box;\n	}\n\n	--width: 360px;\n	--height: 40px;\n	--border-radius: 12px;\n\n	--side-space: 12px; /* 控制栏两侧的间距 */\n	--history-width: calc(var(--width) - var(--side-space) * 2);\n\n	--color-1: rgb(57, 182, 255);\n	--color-2: rgb(189, 69, 251);\n	--color-3: rgb(255, 87, 51);\n	--color-4: rgb(255, 214, 0);\n\n	width: var(--width);\n	height: var(--height);\n\n	transition: all 0.3s ease-in-out;\n\n	/* 响应式设计 */\n	@media (max-width: 480px) {\n		width: calc(100vw - 40px);\n		--width: calc(100vw - 40px);\n	}\n\n	._background_1tu05_39 {\n		position: absolute;\n		inset: -2px -8px;\n		border-radius: calc(var(--border-radius) + 4px);\n		filter: blur(16px);\n		overflow: hidden;\n		/* mix-blend-mode: lighten; */\n		/* display: none; */\n\n		&::before {\n			content: '';\n			z-index: -1;\n			pointer-events: none;\n			position: absolute;\n			width: 100%;\n			height: 100%;\n			/* left: -100%; */\n			left: 0;\n			top: 0;\n\n			background-image: linear-gradient(\n				to bottom left,\n				var(--color-1),\n				var(--color-2),\n				var(--color-1)\n			);\n			animation: _mask-running_1tu05_1 2s linear infinite;\n		}\n		&::after {\n			content: '';\n			z-index: -1;\n			pointer-events: none;\n			position: absolute;\n			width: 100%;\n			height: 100%;\n			left: 0;\n			top: 0;\n\n			background-image: linear-gradient(\n				to bottom left,\n				var(--color-2),\n				var(--color-1),\n				var(--color-2)\n			);\n			animation: _mask-running_1tu05_1 2s linear infinite;\n			animation-delay: 1s;\n		}\n	}\n}\n\n@keyframes _mask-running_1tu05_1 {\n	from {\n		transform: translateX(-100%);\n	}\n	to {\n		transform: translateX(100%);\n	}\n}\n\n/* 控制栏 */\n._header_1tu05_99 {\n	display: flex;\n	align-items: center;\n	justify-content: space-between;\n	padding: 8px 12px;\n	user-select: none;\n\n	position: absolute;\n	inset: 0;\n\n	cursor: pointer;\n	flex-shrink: 0; /* 防止 header 被压缩 */\n\n	background: rgba(0, 0, 0, 0.5);\n	backdrop-filter: blur(10px);\n	border-radius: var(--border-radius);\n	background-clip: padding-box;\n\n	box-shadow:\n		0 0 0px 2px rgba(255, 255, 255, 0.4),\n		0 0 5px 1px rgba(255, 255, 255, 0.3);\n\n	._statusSection_1tu05_121 {\n		display: flex;\n		align-items: center;\n		gap: 8px;\n		flex: 1;\n		min-height: 24px; /* 确保垂直居中 */\n\n		._indicator_1tu05_128 {\n			width: 6px;\n			height: 6px;\n			border-radius: 50%;\n			background: rgba(255, 255, 255, 0.5);\n			flex-shrink: 0;\n			animation: none; /* 默认无动画 */\n\n			/* 运行状态 - 有动画 */\n			&._thinking_1tu05_137 {\n				background: rgb(57, 182, 255);\n				animation: _pulse_1tu05_1 0.8s ease-in-out infinite;\n			}\n\n			&._tool_executing_1tu05_142 {\n				background: rgb(189, 69, 251);\n				animation: _pulse_1tu05_1 0.6s ease-in-out infinite;\n			}\n\n			&._retry_1tu05_147 {\n				background: rgb(255, 214, 0);\n				animation: _retryPulse_1tu05_1 1s ease-in-out infinite;\n			}\n\n			/* 静止状态 - 无动画 */\n			&._completed_1tu05_153,\n			&._input_1tu05_154,\n			&._output_1tu05_155 {\n				background: rgb(34, 197, 94);\n				animation: none;\n			}\n\n			&._error_1tu05_160 {\n				background: rgb(239, 68, 68);\n				animation: none;\n			}\n		}\n\n		._statusText_1tu05_166 {\n			color: white;\n			font-size: 12px;\n			line-height: 1;\n			font-weight: 500;\n			transition: all 0.3s ease-in-out;\n			position: relative;\n			overflow: hidden;\n			display: flex;\n			align-items: center;\n			min-height: 24px; /* 确保垂直居中 */\n\n			&._fadeOut_1tu05_178 {\n				animation: _statusTextFadeOut_1tu05_1 0.3s ease forwards;\n			}\n\n			&._fadeIn_1tu05_182 {\n				animation: _statusTextFadeIn_1tu05_1 0.3s ease forwards;\n			}\n		}\n	}\n\n	._controls_1tu05_188 {\n		display: flex;\n		align-items: center;\n		gap: 4px;\n\n		._controlButton_1tu05_193 {\n			width: 24px;\n			height: 24px;\n			border: none;\n			border-radius: 4px;\n			background: rgba(255, 255, 255, 0.1);\n			color: white;\n			cursor: pointer;\n			display: flex;\n			align-items: center;\n			justify-content: center;\n			font-size: 12px;\n			line-height: 1;\n\n			&:hover {\n				background: rgba(255, 255, 255, 0.2);\n			}\n		}\n\n		._stopButton_1tu05_212 {\n			background: rgba(239, 68, 68, 0.2);\n			color: rgb(255, 41, 41);\n			font-weight: 600;\n\n			&:hover {\n				background: rgba(239, 68, 68, 0.3);\n			}\n		}\n	}\n}\n\n@keyframes _statusTextFadeIn_1tu05_1 {\n	0% {\n		opacity: 0;\n		transform: translateY(5px);\n	}\n	100% {\n		opacity: 1;\n		transform: translateY(0);\n	}\n}\n\n@keyframes _statusTextFadeOut_1tu05_1 {\n	0% {\n		opacity: 1;\n		transform: translateY(0);\n	}\n	100% {\n		opacity: 0;\n		transform: translateY(-5px);\n	}\n}\n\n._historySectionWrapper_1tu05_246 {\n	position: absolute;\n	width: var(--history-width);\n	bottom: var(--height);\n	left: var(--side-space);\n	z-index: -2;\n\n	padding-top: 0px;\n	visibility: collapse;\n	overflow: hidden;\n\n	transition: all 0.2s;\n\n	background: rgba(2, 0, 20, 0.5);\n	/* background: rgba(186, 186, 186, 0.2); */\n	backdrop-filter: blur(10px);\n\n	text-shadow: 0 0 1px rgba(0, 0, 0, 0.2);\n\n	border-top-left-radius: calc(var(--border-radius) + 4px);\n	border-top-right-radius: calc(var(--border-radius) + 4px);\n\n	/* border: 2px solid rgba(255, 255, 255, 0.8); */\n	border: 2px solid rgba(255, 255, 255, 0.4);\n	box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6);\n\n	/* @media (prefers-color-scheme: dark) {\n		box-shadow:\n			0 8px 32px 0 rgba(0, 0, 0, 0.85),\n			0 2px 12px 0 rgba(57, 182, 255, 0.1);\n	} */\n\n	._expanded_1tu05_278 & {\n		padding-top: 8px;\n		visibility: visible;\n	}\n\n	._historySection_1tu05_246 {\n		position: relative;\n		overflow-y: auto;\n		overscroll-behavior: contain;\n		scrollbar-width: none;\n		max-height: 0;\n		padding-inline: 8px;\n\n		transition: max-height 0.2s;\n\n		._expanded_1tu05_278 & {\n			max-height: min(500px, calc(100vh - 200px - var(--height)));\n		}\n\n		._historyItem_1tu05_297 {\n			/* backdrop-filter: blur(10px); */\n			padding: 8px 10px;\n			margin-bottom: 6px;\n			background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03));\n			border-radius: 8px;\n			border-left: 2px solid rgba(57, 182, 255, 0.5);\n			font-size: 12px;\n			color: white;\n			/* color: black; */\n			line-height: 1.3;\n			position: relative;\n			overflow: hidden;\n\n			/* 微妙的内阴影 */\n			box-shadow:\n				inset 0 1px 0 rgba(255, 255, 255, 0.1),\n				0 1px 3px rgba(0, 0, 0, 0.1);\n\n			&::before {\n				content: '';\n				position: absolute;\n				top: 0;\n				left: 0;\n				right: 0;\n				height: 1px;\n				background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);\n			}\n\n			&:hover {\n				background: linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.06));\n				/* transform: translateY(-1px); */\n				box-shadow:\n					inset 0 1px 0 rgba(255, 255, 255, 0.15),\n					0 2px 4px rgba(0, 0, 0, 0.15);\n			}\n\n			&:last-child {\n				margin-bottom: 10px;\n			}\n\n			&._completed_1tu05_153,\n			&._input_1tu05_154,\n			&._output_1tu05_155 {\n				border-left-color: rgb(34, 197, 94);\n				background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(34, 197, 94, 0.05));\n			}\n\n			&._error_1tu05_160 {\n				border-left-color: rgb(239, 68, 68);\n				background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05));\n			}\n\n			&._retry_1tu05_147 {\n				border-left-color: rgb(255, 214, 0);\n				background: linear-gradient(135deg, rgba(255, 214, 0, 0.1), rgba(255, 214, 0, 0.05));\n			}\n\n			&._observation_1tu05_355 {\n				border-left-color: rgb(147, 51, 234);\n				background: linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(147, 51, 234, 0.05));\n			}\n\n			&._question_1tu05_360 {\n				border-left-color: rgb(255, 159, 67);\n				background: linear-gradient(135deg, rgba(255, 159, 67, 0.15), rgba(255, 159, 67, 0.08));\n			}\n\n			/* 突出显示 done 成功结果 */\n			&._doneSuccess_1tu05_366 {\n				background: linear-gradient(\n					135deg,\n					rgba(34, 197, 94, 0.25),\n					rgba(34, 197, 94, 0.15),\n					rgba(34, 197, 94, 0.08)\n				);\n				border: none;\n				border-left: 4px solid rgb(34, 197, 94);\n				box-shadow:\n					0 4px 12px rgba(34, 197, 94, 0.3),\n					inset 0 1px 0 rgba(255, 255, 255, 0.2),\n					0 0 20px rgba(34, 197, 94, 0.1);\n				font-weight: 600;\n				color: rgb(220, 252, 231);\n				padding: 10px 12px;\n				margin-bottom: 8px;\n				border-radius: 8px;\n				position: relative;\n				overflow: hidden;\n\n				&::before {\n					background: linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.4), transparent);\n				}\n\n				&::after {\n					content: '';\n					position: absolute;\n					top: 0;\n					left: -100%;\n					width: 100%;\n					height: 100%;\n					background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);\n					animation: _shimmer_1tu05_1 2s ease-in-out infinite;\n				}\n\n				._historyContent_1tu05_402 {\n					._statusIcon_1tu05_403 {\n						font-size: 16px;\n						animation: _celebrate_1tu05_1 0.8s ease-in-out;\n						filter: drop-shadow(0 2px 4px rgba(34, 197, 94, 0.5));\n					}\n				}\n			}\n\n			/* 突出显示 done 失败结果 */\n			&._doneError_1tu05_412 {\n				background: linear-gradient(\n					135deg,\n					rgba(239, 68, 68, 0.25),\n					rgba(239, 68, 68, 0.15),\n					rgba(239, 68, 68, 0.08)\n				);\n				border: none;\n				border-left: 4px solid rgb(239, 68, 68);\n				box-shadow:\n					0 4px 12px rgba(239, 68, 68, 0.3),\n					inset 0 1px 0 rgba(255, 255, 255, 0.2),\n					0 0 20px rgba(239, 68, 68, 0.1);\n				font-weight: 600;\n				color: rgb(254, 226, 226);\n				padding: 10px 12px;\n				margin-bottom: 8px;\n				border-radius: 8px;\n				position: relative;\n				overflow: hidden;\n\n				&::before {\n					background: linear-gradient(90deg, transparent, rgba(239, 68, 68, 0.4), transparent);\n				}\n\n				._historyContent_1tu05_402 {\n					._statusIcon_1tu05_403 {\n						font-size: 16px;\n						filter: drop-shadow(0 2px 4px rgba(239, 68, 68, 0.5));\n					}\n				}\n			}\n\n			._historyContent_1tu05_402 {\n				display: flex;\n				align-items: flex-start;\n				gap: 8px;\n\n				word-break: break-all;\n				white-space: pre-wrap;\n\n				/* overflow-x: auto; */\n\n				._statusIcon_1tu05_403 {\n					font-size: 12px;\n					flex-shrink: 0;\n					line-height: 1;\n					transition: all 0.3s ease;\n				}\n\n				._reflectionLines_1tu05_462 {\n					display: flex;\n					flex-direction: column;\n					gap: 4px;\n				}\n			}\n\n			._historyMeta_1tu05_469 {\n				font-size: 10px;\n				color: rgba(255, 255, 255, 0.6);\n				/* color: rgb(61, 61, 61); */\n				margin-top: 8px;\n				line-height: 1;\n			}\n		}\n	}\n}\n\n/* 动画关键帧 - 更快的闪烁 */\n@keyframes _pulse_1tu05_1 {\n	0%,\n	100% {\n		opacity: 1;\n		transform: scale(1);\n	}\n	50% {\n		opacity: 0.4;\n		transform: scale(1.3);\n	}\n}\n\n/* 重试动画 - 旋转脉冲 */\n@keyframes _retryPulse_1tu05_1 {\n	0%,\n	100% {\n		opacity: 1;\n		transform: scale(1) rotate(0deg);\n	}\n	25% {\n		opacity: 0.6;\n		transform: scale(1.2) rotate(90deg);\n	}\n	50% {\n		opacity: 0.8;\n		transform: scale(1.1) rotate(180deg);\n	}\n	75% {\n		opacity: 0.6;\n		transform: scale(1.2) rotate(270deg);\n	}\n}\n\n/* 庆祝动画 */\n@keyframes _celebrate_1tu05_1 {\n	0%,\n	100% {\n		transform: scale(1);\n	}\n	25% {\n		transform: scale(1.2) rotate(-5deg);\n	}\n	75% {\n		transform: scale(1.2) rotate(5deg);\n	}\n}\n\n/* done 卡片的光泽效果 */\n@keyframes _shimmer_1tu05_1 {\n	0% {\n		left: -100%;\n	}\n	100% {\n		left: 100%;\n	}\n}\n\n/* 输入区域样式 */\n._inputSectionWrapper_1tu05_539 {\n	position: absolute;\n	width: var(--history-width);\n	top: var(--height);\n	left: var(--side-space);\n	z-index: -1;\n\n	visibility: visible;\n	overflow: hidden;\n\n	height: 48px;\n\n	transition: all 0.2s;\n\n	background: rgba(186, 186, 186, 0.2);\n	backdrop-filter: blur(10px);\n\n	border-bottom-left-radius: calc(var(--border-radius) + 4px);\n	border-bottom-right-radius: calc(var(--border-radius) + 4px);\n\n	border: 2px solid rgba(255, 255, 255, 0.3);\n	box-shadow: 0 1px 16px rgba(0, 0, 0, 0.4);\n\n	&._hidden_1tu05_562 {\n		visibility: collapse;\n		height: 0;\n	}\n\n	._inputSection_1tu05_539 {\n		display: flex;\n		align-items: center;\n		gap: 4px;\n		padding: 8px 8px;\n\n		._taskInput_1tu05_573 {\n			flex: 1;\n			background: rgba(255, 255, 255, 0.4);\n			border: 1px solid rgba(255, 255, 255, 0.3);\n			border-radius: 10px;\n			padding-inline: 10px;\n			color: rgb(20, 20, 20);\n			font-size: 12px;\n			height: 28px;\n			line-height: 1;\n			outline: none;\n			transition: all 0.2s ease;\n\n			/* text-shadow: 0 0 2px rgba(255, 255, 255, 0.8); */\n\n			/* border-color: rgba(57, 182, 255, 0.3); */\n\n			&::placeholder {\n				color: rgb(53, 53, 53);\n			}\n\n			&:focus {\n				background: rgba(255, 255, 255, 0.8);\n				border-color: rgba(57, 182, 255, 0.6);\n				box-shadow: 0 0 0 2px rgba(57, 182, 255, 0.2);\n			}\n		}\n	}\n}"));			document.head.appendChild(elementStyle);		}	} catch (e) {		console.error("vite-plugin-css-injected-by-js", e);	}})();
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region ../../node_modules/zod/v4/core/core.js
var _a$1;
function $constructor(name, initializer, params) {
	function init(inst, def) {
		if (!inst._zod) Object.defineProperty(inst, "_zod", {
			value: {
				def,
				constr: _,
				traits: /* @__PURE__ */ new Set()
			},
			enumerable: false
		});
		if (inst._zod.traits.has(name)) return;
		inst._zod.traits.add(name);
		initializer(inst, def);
		const proto = _.prototype;
		const keys = Object.keys(proto);
		for (let i = 0; i < keys.length; i++) {
			const k = keys[i];
			if (!(k in inst)) inst[k] = proto[k].bind(inst);
		}
	}
	const Parent = params?.Parent ?? Object;
	class Definition extends Parent {}
	Object.defineProperty(Definition, "name", { value: name });
	function _(def) {
		var _a;
		const inst = params?.Parent ? new Definition() : this;
		init(inst, def);
		(_a = inst._zod).deferred ?? (_a.deferred = []);
		for (const fn of inst._zod.deferred) fn();
		return inst;
	}
	Object.defineProperty(_, "init", { value: init });
	Object.defineProperty(_, Symbol.hasInstance, { value: (inst) => {
		if (params?.Parent && inst instanceof params.Parent) return true;
		return inst?._zod?.traits?.has(name);
	} });
	Object.defineProperty(_, "name", { value: name });
	return _;
}
var $ZodAsyncError = class extends Error {
	constructor() {
		super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
	}
};
var $ZodEncodeError = class extends Error {
	constructor(name) {
		super(`Encountered unidirectional transform during encode: ${name}`);
		this.name = "ZodEncodeError";
	}
};
(_a$1 = globalThis).__zod_globalConfig ?? (_a$1.__zod_globalConfig = {});
var globalConfig = globalThis.__zod_globalConfig;
function config(newConfig) {
	if (newConfig) Object.assign(globalConfig, newConfig);
	return globalConfig;
}
//#endregion
//#region ../../node_modules/zod/v4/core/util.js
function getEnumValues(entries) {
	const numericValues = Object.values(entries).filter((v) => typeof v === "number");
	return Object.entries(entries).filter(([k, _]) => numericValues.indexOf(+k) === -1).map(([_, v]) => v);
}
function jsonStringifyReplacer(_, value) {
	if (typeof value === "bigint") return value.toString();
	return value;
}
function cached(getter) {
	return { get value() {
		{
			const value = getter();
			Object.defineProperty(this, "value", { value });
			return value;
		}
		throw new Error("cached value already set");
	} };
}
function nullish(input) {
	return input === null || input === void 0;
}
function cleanRegex(source) {
	const start = source.startsWith("^") ? 1 : 0;
	const end = source.endsWith("$") ? source.length - 1 : source.length;
	return source.slice(start, end);
}
function floatSafeRemainder(val, step) {
	const ratio = val / step;
	const roundedRatio = Math.round(ratio);
	const tolerance = Number.EPSILON * Math.max(Math.abs(ratio), 1);
	if (Math.abs(ratio - roundedRatio) < tolerance) return 0;
	return ratio - roundedRatio;
}
var EVALUATING = /* @__PURE__*/ Symbol("evaluating");
function defineLazy(object, key, getter) {
	let value = void 0;
	Object.defineProperty(object, key, {
		get() {
			if (value === EVALUATING) return;
			if (value === void 0) {
				value = EVALUATING;
				value = getter();
			}
			return value;
		},
		set(v) {
			Object.defineProperty(object, key, { value: v });
		},
		configurable: true
	});
}
function assignProp(target, prop, value) {
	Object.defineProperty(target, prop, {
		value,
		writable: true,
		enumerable: true,
		configurable: true
	});
}
function mergeDefs(...defs) {
	const mergedDescriptors = {};
	for (const def of defs) Object.assign(mergedDescriptors, Object.getOwnPropertyDescriptors(def));
	return Object.defineProperties({}, mergedDescriptors);
}
function esc(str) {
	return JSON.stringify(str);
}
function slugify(input) {
	return input.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : (..._args) => {};
function isObject(data) {
	return typeof data === "object" && data !== null && !Array.isArray(data);
}
var allowsEval = /* @__PURE__*/ cached(() => {
	if (globalConfig.jitless) return false;
	if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) return false;
	try {
		new Function("");
		return true;
	} catch (_) {
		return false;
	}
});
function isPlainObject(o) {
	if (isObject(o) === false) return false;
	const ctor = o.constructor;
	if (ctor === void 0) return true;
	if (typeof ctor !== "function") return true;
	const prot = ctor.prototype;
	if (isObject(prot) === false) return false;
	if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) return false;
	return true;
}
function shallowClone(o) {
	if (isPlainObject(o)) return { ...o };
	if (Array.isArray(o)) return [...o];
	if (o instanceof Map) return new Map(o);
	if (o instanceof Set) return new Set(o);
	return o;
}
var propertyKeyTypes = /* @__PURE__*/ new Set([
	"string",
	"number",
	"symbol"
]);
function escapeRegex(str) {
	return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function clone(inst, def, params) {
	const cl = new inst._zod.constr(def ?? inst._zod.def);
	if (!def || params?.parent) cl._zod.parent = inst;
	return cl;
}
function normalizeParams(_params) {
	const params = _params;
	if (!params) return {};
	if (typeof params === "string") return { error: () => params };
	if (params?.message !== void 0) {
		if (params?.error !== void 0) throw new Error("Cannot specify both `message` and `error` params");
		params.error = params.message;
	}
	delete params.message;
	if (typeof params.error === "string") return {
		...params,
		error: () => params.error
	};
	return params;
}
function optionalKeys(shape) {
	return Object.keys(shape).filter((k) => {
		return shape[k]._zod.optin === "optional" && shape[k]._zod.optout === "optional";
	});
}
var NUMBER_FORMAT_RANGES = {
	safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
	int32: [-2147483648, 2147483647],
	uint32: [0, 4294967295],
	float32: [-34028234663852886e22, 34028234663852886e22],
	float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function pick(schema, mask) {
	const currDef = schema._zod.def;
	const checks = currDef.checks;
	if (checks && checks.length > 0) throw new Error(".pick() cannot be used on object schemas containing refinements");
	return clone(schema, mergeDefs(schema._zod.def, {
		get shape() {
			const newShape = {};
			for (const key in mask) {
				if (!(key in currDef.shape)) throw new Error(`Unrecognized key: "${key}"`);
				if (!mask[key]) continue;
				newShape[key] = currDef.shape[key];
			}
			assignProp(this, "shape", newShape);
			return newShape;
		},
		checks: []
	}));
}
function omit(schema, mask) {
	const currDef = schema._zod.def;
	const checks = currDef.checks;
	if (checks && checks.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
	return clone(schema, mergeDefs(schema._zod.def, {
		get shape() {
			const newShape = { ...schema._zod.def.shape };
			for (const key in mask) {
				if (!(key in currDef.shape)) throw new Error(`Unrecognized key: "${key}"`);
				if (!mask[key]) continue;
				delete newShape[key];
			}
			assignProp(this, "shape", newShape);
			return newShape;
		},
		checks: []
	}));
}
function extend(schema, shape) {
	if (!isPlainObject(shape)) throw new Error("Invalid input to extend: expected a plain object");
	const checks = schema._zod.def.checks;
	if (checks && checks.length > 0) {
		const existingShape = schema._zod.def.shape;
		for (const key in shape) if (Object.getOwnPropertyDescriptor(existingShape, key) !== void 0) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
	}
	return clone(schema, mergeDefs(schema._zod.def, { get shape() {
		const _shape = {
			...schema._zod.def.shape,
			...shape
		};
		assignProp(this, "shape", _shape);
		return _shape;
	} }));
}
function safeExtend(schema, shape) {
	if (!isPlainObject(shape)) throw new Error("Invalid input to safeExtend: expected a plain object");
	return clone(schema, mergeDefs(schema._zod.def, { get shape() {
		const _shape = {
			...schema._zod.def.shape,
			...shape
		};
		assignProp(this, "shape", _shape);
		return _shape;
	} }));
}
function merge(a, b) {
	if (a._zod.def.checks?.length) throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
	return clone(a, mergeDefs(a._zod.def, {
		get shape() {
			const _shape = {
				...a._zod.def.shape,
				...b._zod.def.shape
			};
			assignProp(this, "shape", _shape);
			return _shape;
		},
		get catchall() {
			return b._zod.def.catchall;
		},
		checks: b._zod.def.checks ?? []
	}));
}
function partial(Class, schema, mask) {
	const checks = schema._zod.def.checks;
	if (checks && checks.length > 0) throw new Error(".partial() cannot be used on object schemas containing refinements");
	return clone(schema, mergeDefs(schema._zod.def, {
		get shape() {
			const oldShape = schema._zod.def.shape;
			const shape = { ...oldShape };
			if (mask) for (const key in mask) {
				if (!(key in oldShape)) throw new Error(`Unrecognized key: "${key}"`);
				if (!mask[key]) continue;
				shape[key] = Class ? new Class({
					type: "optional",
					innerType: oldShape[key]
				}) : oldShape[key];
			}
			else for (const key in oldShape) shape[key] = Class ? new Class({
				type: "optional",
				innerType: oldShape[key]
			}) : oldShape[key];
			assignProp(this, "shape", shape);
			return shape;
		},
		checks: []
	}));
}
function required(Class, schema, mask) {
	return clone(schema, mergeDefs(schema._zod.def, { get shape() {
		const oldShape = schema._zod.def.shape;
		const shape = { ...oldShape };
		if (mask) for (const key in mask) {
			if (!(key in shape)) throw new Error(`Unrecognized key: "${key}"`);
			if (!mask[key]) continue;
			shape[key] = new Class({
				type: "nonoptional",
				innerType: oldShape[key]
			});
		}
		else for (const key in oldShape) shape[key] = new Class({
			type: "nonoptional",
			innerType: oldShape[key]
		});
		assignProp(this, "shape", shape);
		return shape;
	} }));
}
function aborted(x, startIndex = 0) {
	if (x.aborted === true) return true;
	for (let i = startIndex; i < x.issues.length; i++) if (x.issues[i]?.continue !== true) return true;
	return false;
}
function explicitlyAborted(x, startIndex = 0) {
	if (x.aborted === true) return true;
	for (let i = startIndex; i < x.issues.length; i++) if (x.issues[i]?.continue === false) return true;
	return false;
}
function prefixIssues(path, issues) {
	return issues.map((iss) => {
		var _a;
		(_a = iss).path ?? (_a.path = []);
		iss.path.unshift(path);
		return iss;
	});
}
function unwrapMessage(message) {
	return typeof message === "string" ? message : message?.message;
}
function finalizeIssue(iss, ctx, config) {
	const message = iss.message ? iss.message : unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage(ctx?.error?.(iss)) ?? unwrapMessage(config.customError?.(iss)) ?? unwrapMessage(config.localeError?.(iss)) ?? "Invalid input";
	const { inst: _inst, continue: _continue, input: _input, ...rest } = iss;
	rest.path ?? (rest.path = []);
	rest.message = message;
	if (ctx?.reportInput) rest.input = _input;
	return rest;
}
function getLengthableOrigin(input) {
	if (Array.isArray(input)) return "array";
	if (typeof input === "string") return "string";
	return "unknown";
}
function issue(...args) {
	const [iss, input, inst] = args;
	if (typeof iss === "string") return {
		message: iss,
		code: "custom",
		input,
		inst
	};
	return { ...iss };
}
//#endregion
//#region ../../node_modules/zod/v4/core/errors.js
var initializer$1 = (inst, def) => {
	inst.name = "$ZodError";
	Object.defineProperty(inst, "_zod", {
		value: inst._zod,
		enumerable: false
	});
	Object.defineProperty(inst, "issues", {
		value: def,
		enumerable: false
	});
	inst.message = JSON.stringify(def, jsonStringifyReplacer, 2);
	Object.defineProperty(inst, "toString", {
		value: () => inst.message,
		enumerable: false
	});
};
var $ZodError = $constructor("$ZodError", initializer$1);
var $ZodRealError = $constructor("$ZodError", initializer$1, { Parent: Error });
function flattenError(error, mapper = (issue) => issue.message) {
	const fieldErrors = {};
	const formErrors = [];
	for (const sub of error.issues) if (sub.path.length > 0) {
		fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
		fieldErrors[sub.path[0]].push(mapper(sub));
	} else formErrors.push(mapper(sub));
	return {
		formErrors,
		fieldErrors
	};
}
function formatError(error, mapper = (issue) => issue.message) {
	const fieldErrors = { _errors: [] };
	const processError = (error, path = []) => {
		for (const issue of error.issues) if (issue.code === "invalid_union" && issue.errors.length) issue.errors.map((issues) => processError({ issues }, [...path, ...issue.path]));
		else if (issue.code === "invalid_key") processError({ issues: issue.issues }, [...path, ...issue.path]);
		else if (issue.code === "invalid_element") processError({ issues: issue.issues }, [...path, ...issue.path]);
		else {
			const fullpath = [...path, ...issue.path];
			if (fullpath.length === 0) fieldErrors._errors.push(mapper(issue));
			else {
				let curr = fieldErrors;
				let i = 0;
				while (i < fullpath.length) {
					const el = fullpath[i];
					if (!(i === fullpath.length - 1)) curr[el] = curr[el] || { _errors: [] };
					else {
						curr[el] = curr[el] || { _errors: [] };
						curr[el]._errors.push(mapper(issue));
					}
					curr = curr[el];
					i++;
				}
			}
		}
	};
	processError(error);
	return fieldErrors;
}
/** Format a ZodError as a human-readable string in the following form.
*
* From
*
* ```ts
* ZodError {
*   issues: [
*     {
*       expected: 'string',
*       code: 'invalid_type',
*       path: [ 'username' ],
*       message: 'Invalid input: expected string'
*     },
*     {
*       expected: 'number',
*       code: 'invalid_type',
*       path: [ 'favoriteNumbers', 1 ],
*       message: 'Invalid input: expected number'
*     }
*   ];
* }
* ```
*
* to
*
* ```
* username
*   ✖ Expected number, received string at "username
* favoriteNumbers[0]
*   ✖ Invalid input: expected number
* ```
*/
function toDotPath(_path) {
	const segs = [];
	const path = _path.map((seg) => typeof seg === "object" ? seg.key : seg);
	for (const seg of path) if (typeof seg === "number") segs.push(`[${seg}]`);
	else if (typeof seg === "symbol") segs.push(`[${JSON.stringify(String(seg))}]`);
	else if (/[^\w$]/.test(seg)) segs.push(`[${JSON.stringify(seg)}]`);
	else {
		if (segs.length) segs.push(".");
		segs.push(seg);
	}
	return segs.join("");
}
function prettifyError(error) {
	const lines = [];
	const issues = [...error.issues].sort((a, b) => (a.path ?? []).length - (b.path ?? []).length);
	for (const issue of issues) {
		lines.push(`✖ ${issue.message}`);
		if (issue.path?.length) lines.push(`  → at ${toDotPath(issue.path)}`);
	}
	return lines.join("\n");
}
//#endregion
//#region ../../node_modules/zod/v4/core/parse.js
var _parse = (_Err) => (schema, value, _ctx, _params) => {
	const ctx = _ctx ? {
		..._ctx,
		async: false
	} : { async: false };
	const result = schema._zod.run({
		value,
		issues: []
	}, ctx);
	if (result instanceof Promise) throw new $ZodAsyncError();
	if (result.issues.length) {
		const e = new (_params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
		captureStackTrace(e, _params?.callee);
		throw e;
	}
	return result.value;
};
var _parseAsync = (_Err) => async (schema, value, _ctx, params) => {
	const ctx = _ctx ? {
		..._ctx,
		async: true
	} : { async: true };
	let result = schema._zod.run({
		value,
		issues: []
	}, ctx);
	if (result instanceof Promise) result = await result;
	if (result.issues.length) {
		const e = new (params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
		captureStackTrace(e, params?.callee);
		throw e;
	}
	return result.value;
};
var _safeParse = (_Err) => (schema, value, _ctx) => {
	const ctx = _ctx ? {
		..._ctx,
		async: false
	} : { async: false };
	const result = schema._zod.run({
		value,
		issues: []
	}, ctx);
	if (result instanceof Promise) throw new $ZodAsyncError();
	return result.issues.length ? {
		success: false,
		error: new (_Err ?? $ZodError)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
	} : {
		success: true,
		data: result.value
	};
};
var safeParse$1 = /* @__PURE__*/ _safeParse($ZodRealError);
var _safeParseAsync = (_Err) => async (schema, value, _ctx) => {
	const ctx = _ctx ? {
		..._ctx,
		async: true
	} : { async: true };
	let result = schema._zod.run({
		value,
		issues: []
	}, ctx);
	if (result instanceof Promise) result = await result;
	return result.issues.length ? {
		success: false,
		error: new _Err(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
	} : {
		success: true,
		data: result.value
	};
};
var safeParseAsync$1 = /* @__PURE__*/ _safeParseAsync($ZodRealError);
var _encode = (_Err) => (schema, value, _ctx) => {
	const ctx = _ctx ? {
		..._ctx,
		direction: "backward"
	} : { direction: "backward" };
	return _parse(_Err)(schema, value, ctx);
};
var _decode = (_Err) => (schema, value, _ctx) => {
	return _parse(_Err)(schema, value, _ctx);
};
var _encodeAsync = (_Err) => async (schema, value, _ctx) => {
	const ctx = _ctx ? {
		..._ctx,
		direction: "backward"
	} : { direction: "backward" };
	return _parseAsync(_Err)(schema, value, ctx);
};
var _decodeAsync = (_Err) => async (schema, value, _ctx) => {
	return _parseAsync(_Err)(schema, value, _ctx);
};
var _safeEncode = (_Err) => (schema, value, _ctx) => {
	const ctx = _ctx ? {
		..._ctx,
		direction: "backward"
	} : { direction: "backward" };
	return _safeParse(_Err)(schema, value, ctx);
};
var _safeDecode = (_Err) => (schema, value, _ctx) => {
	return _safeParse(_Err)(schema, value, _ctx);
};
var _safeEncodeAsync = (_Err) => async (schema, value, _ctx) => {
	const ctx = _ctx ? {
		..._ctx,
		direction: "backward"
	} : { direction: "backward" };
	return _safeParseAsync(_Err)(schema, value, ctx);
};
var _safeDecodeAsync = (_Err) => async (schema, value, _ctx) => {
	return _safeParseAsync(_Err)(schema, value, _ctx);
};
//#endregion
//#region ../../node_modules/zod/v4/core/regexes.js
/**
* @deprecated CUID v1 is deprecated by its authors due to information leakage
* (timestamps embedded in the id). Use {@link cuid2} instead.
* See https://github.com/paralleldrive/cuid.
*/
var cuid = /^[cC][0-9a-z]{6,}$/;
var cuid2 = /^[0-9a-z]+$/;
var ulid = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
var xid = /^[0-9a-vA-V]{20}$/;
var ksuid = /^[A-Za-z0-9]{27}$/;
var nanoid = /^[a-zA-Z0-9_-]{21}$/;
/** ISO 8601-1 duration regex. Does not support the 8601-2 extensions like negative durations or fractional/negative components. */
var duration$1 = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
/** A regex for any UUID-like identifier: 8-4-4-4-12 hex pattern */
var guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
/** Returns a regex for validating an RFC 9562/4122 UUID.
*
* @param version Optionally specify a version 1-8. If no version is specified, all versions are supported. */
var uuid = (version) => {
	if (!version) return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
	return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
};
/** Practical email validation */
var email = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
var _emoji$1 = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
function emoji() {
	return new RegExp(_emoji$1, "u");
}
var ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
var cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
var cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
var base64url = /^[A-Za-z0-9_-]*$/;
var httpProtocol = /^https?$/;
var e164 = /^\+[1-9]\d{6,14}$/;
var dateSource = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
var date$1 = /*@__PURE__*/ new RegExp(`^${dateSource}$`);
function timeSource(args) {
	const hhmm = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
	return typeof args.precision === "number" ? args.precision === -1 ? `${hhmm}` : args.precision === 0 ? `${hhmm}:[0-5]\\d` : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}` : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function time$1(args) {
	return new RegExp(`^${timeSource(args)}$`);
}
function datetime$1(args) {
	const time = timeSource({ precision: args.precision });
	const opts = ["Z"];
	if (args.local) opts.push("");
	if (args.offset) opts.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);
	const timeRegex = `${time}(?:${opts.join("|")})`;
	return new RegExp(`^${dateSource}T(?:${timeRegex})$`);
}
var string$1 = (params) => {
	const regex = params ? `[\\s\\S]{${params?.minimum ?? 0},${params?.maximum ?? ""}}` : `[\\s\\S]*`;
	return new RegExp(`^${regex}$`);
};
var integer = /^-?\d+$/;
var number$1 = /^-?\d+(?:\.\d+)?$/;
var boolean$1 = /^(?:true|false)$/i;
var lowercase = /^[^A-Z]*$/;
var uppercase = /^[^a-z]*$/;
//#endregion
//#region ../../node_modules/zod/v4/core/checks.js
var $ZodCheck = /*@__PURE__*/ $constructor("$ZodCheck", (inst, def) => {
	var _a;
	inst._zod ?? (inst._zod = {});
	inst._zod.def = def;
	(_a = inst._zod).onattach ?? (_a.onattach = []);
});
var numericOriginMap = {
	number: "number",
	bigint: "bigint",
	object: "date"
};
var $ZodCheckLessThan = /*@__PURE__*/ $constructor("$ZodCheckLessThan", (inst, def) => {
	$ZodCheck.init(inst, def);
	const origin = numericOriginMap[typeof def.value];
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		const curr = (def.inclusive ? bag.maximum : bag.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
		if (def.value < curr) if (def.inclusive) bag.maximum = def.value;
		else bag.exclusiveMaximum = def.value;
	});
	inst._zod.check = (payload) => {
		if (def.inclusive ? payload.value <= def.value : payload.value < def.value) return;
		payload.issues.push({
			origin,
			code: "too_big",
			maximum: typeof def.value === "object" ? def.value.getTime() : def.value,
			input: payload.value,
			inclusive: def.inclusive,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckGreaterThan = /*@__PURE__*/ $constructor("$ZodCheckGreaterThan", (inst, def) => {
	$ZodCheck.init(inst, def);
	const origin = numericOriginMap[typeof def.value];
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		const curr = (def.inclusive ? bag.minimum : bag.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
		if (def.value > curr) if (def.inclusive) bag.minimum = def.value;
		else bag.exclusiveMinimum = def.value;
	});
	inst._zod.check = (payload) => {
		if (def.inclusive ? payload.value >= def.value : payload.value > def.value) return;
		payload.issues.push({
			origin,
			code: "too_small",
			minimum: typeof def.value === "object" ? def.value.getTime() : def.value,
			input: payload.value,
			inclusive: def.inclusive,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckMultipleOf = /*@__PURE__*/ $constructor("$ZodCheckMultipleOf", (inst, def) => {
	$ZodCheck.init(inst, def);
	inst._zod.onattach.push((inst) => {
		var _a;
		(_a = inst._zod.bag).multipleOf ?? (_a.multipleOf = def.value);
	});
	inst._zod.check = (payload) => {
		if (typeof payload.value !== typeof def.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
		if (typeof payload.value === "bigint" ? payload.value % def.value === BigInt(0) : floatSafeRemainder(payload.value, def.value) === 0) return;
		payload.issues.push({
			origin: typeof payload.value,
			code: "not_multiple_of",
			divisor: def.value,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckNumberFormat = /*@__PURE__*/ $constructor("$ZodCheckNumberFormat", (inst, def) => {
	$ZodCheck.init(inst, def);
	def.format = def.format || "float64";
	const isInt = def.format?.includes("int");
	const origin = isInt ? "int" : "number";
	const [minimum, maximum] = NUMBER_FORMAT_RANGES[def.format];
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		bag.format = def.format;
		bag.minimum = minimum;
		bag.maximum = maximum;
		if (isInt) bag.pattern = integer;
	});
	inst._zod.check = (payload) => {
		const input = payload.value;
		if (isInt) {
			if (!Number.isInteger(input)) {
				payload.issues.push({
					expected: origin,
					format: def.format,
					code: "invalid_type",
					continue: false,
					input,
					inst
				});
				return;
			}
			if (!Number.isSafeInteger(input)) {
				if (input > 0) payload.issues.push({
					input,
					code: "too_big",
					maximum: Number.MAX_SAFE_INTEGER,
					note: "Integers must be within the safe integer range.",
					inst,
					origin,
					inclusive: true,
					continue: !def.abort
				});
				else payload.issues.push({
					input,
					code: "too_small",
					minimum: Number.MIN_SAFE_INTEGER,
					note: "Integers must be within the safe integer range.",
					inst,
					origin,
					inclusive: true,
					continue: !def.abort
				});
				return;
			}
		}
		if (input < minimum) payload.issues.push({
			origin: "number",
			input,
			code: "too_small",
			minimum,
			inclusive: true,
			inst,
			continue: !def.abort
		});
		if (input > maximum) payload.issues.push({
			origin: "number",
			input,
			code: "too_big",
			maximum,
			inclusive: true,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckMaxLength = /*@__PURE__*/ $constructor("$ZodCheckMaxLength", (inst, def) => {
	var _a;
	$ZodCheck.init(inst, def);
	(_a = inst._zod.def).when ?? (_a.when = (payload) => {
		const val = payload.value;
		return !nullish(val) && val.length !== void 0;
	});
	inst._zod.onattach.push((inst) => {
		const curr = inst._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
		if (def.maximum < curr) inst._zod.bag.maximum = def.maximum;
	});
	inst._zod.check = (payload) => {
		const input = payload.value;
		if (input.length <= def.maximum) return;
		const origin = getLengthableOrigin(input);
		payload.issues.push({
			origin,
			code: "too_big",
			maximum: def.maximum,
			inclusive: true,
			input,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckMinLength = /*@__PURE__*/ $constructor("$ZodCheckMinLength", (inst, def) => {
	var _a;
	$ZodCheck.init(inst, def);
	(_a = inst._zod.def).when ?? (_a.when = (payload) => {
		const val = payload.value;
		return !nullish(val) && val.length !== void 0;
	});
	inst._zod.onattach.push((inst) => {
		const curr = inst._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
		if (def.minimum > curr) inst._zod.bag.minimum = def.minimum;
	});
	inst._zod.check = (payload) => {
		const input = payload.value;
		if (input.length >= def.minimum) return;
		const origin = getLengthableOrigin(input);
		payload.issues.push({
			origin,
			code: "too_small",
			minimum: def.minimum,
			inclusive: true,
			input,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckLengthEquals = /*@__PURE__*/ $constructor("$ZodCheckLengthEquals", (inst, def) => {
	var _a;
	$ZodCheck.init(inst, def);
	(_a = inst._zod.def).when ?? (_a.when = (payload) => {
		const val = payload.value;
		return !nullish(val) && val.length !== void 0;
	});
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		bag.minimum = def.length;
		bag.maximum = def.length;
		bag.length = def.length;
	});
	inst._zod.check = (payload) => {
		const input = payload.value;
		const length = input.length;
		if (length === def.length) return;
		const origin = getLengthableOrigin(input);
		const tooBig = length > def.length;
		payload.issues.push({
			origin,
			...tooBig ? {
				code: "too_big",
				maximum: def.length
			} : {
				code: "too_small",
				minimum: def.length
			},
			inclusive: true,
			exact: true,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckStringFormat = /*@__PURE__*/ $constructor("$ZodCheckStringFormat", (inst, def) => {
	var _a, _b;
	$ZodCheck.init(inst, def);
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		bag.format = def.format;
		if (def.pattern) {
			bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
			bag.patterns.add(def.pattern);
		}
	});
	if (def.pattern) (_a = inst._zod).check ?? (_a.check = (payload) => {
		def.pattern.lastIndex = 0;
		if (def.pattern.test(payload.value)) return;
		payload.issues.push({
			origin: "string",
			code: "invalid_format",
			format: def.format,
			input: payload.value,
			...def.pattern ? { pattern: def.pattern.toString() } : {},
			inst,
			continue: !def.abort
		});
	});
	else (_b = inst._zod).check ?? (_b.check = () => {});
});
var $ZodCheckRegex = /*@__PURE__*/ $constructor("$ZodCheckRegex", (inst, def) => {
	$ZodCheckStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		def.pattern.lastIndex = 0;
		if (def.pattern.test(payload.value)) return;
		payload.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "regex",
			input: payload.value,
			pattern: def.pattern.toString(),
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckLowerCase = /*@__PURE__*/ $constructor("$ZodCheckLowerCase", (inst, def) => {
	def.pattern ?? (def.pattern = lowercase);
	$ZodCheckStringFormat.init(inst, def);
});
var $ZodCheckUpperCase = /*@__PURE__*/ $constructor("$ZodCheckUpperCase", (inst, def) => {
	def.pattern ?? (def.pattern = uppercase);
	$ZodCheckStringFormat.init(inst, def);
});
var $ZodCheckIncludes = /*@__PURE__*/ $constructor("$ZodCheckIncludes", (inst, def) => {
	$ZodCheck.init(inst, def);
	const escapedRegex = escapeRegex(def.includes);
	const pattern = new RegExp(typeof def.position === "number" ? `^.{${def.position}}${escapedRegex}` : escapedRegex);
	def.pattern = pattern;
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
		bag.patterns.add(pattern);
	});
	inst._zod.check = (payload) => {
		if (payload.value.includes(def.includes, def.position)) return;
		payload.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "includes",
			includes: def.includes,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckStartsWith = /*@__PURE__*/ $constructor("$ZodCheckStartsWith", (inst, def) => {
	$ZodCheck.init(inst, def);
	const pattern = new RegExp(`^${escapeRegex(def.prefix)}.*`);
	def.pattern ?? (def.pattern = pattern);
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
		bag.patterns.add(pattern);
	});
	inst._zod.check = (payload) => {
		if (payload.value.startsWith(def.prefix)) return;
		payload.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "starts_with",
			prefix: def.prefix,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckEndsWith = /*@__PURE__*/ $constructor("$ZodCheckEndsWith", (inst, def) => {
	$ZodCheck.init(inst, def);
	const pattern = new RegExp(`.*${escapeRegex(def.suffix)}$`);
	def.pattern ?? (def.pattern = pattern);
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
		bag.patterns.add(pattern);
	});
	inst._zod.check = (payload) => {
		if (payload.value.endsWith(def.suffix)) return;
		payload.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "ends_with",
			suffix: def.suffix,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckOverwrite = /*@__PURE__*/ $constructor("$ZodCheckOverwrite", (inst, def) => {
	$ZodCheck.init(inst, def);
	inst._zod.check = (payload) => {
		payload.value = def.tx(payload.value);
	};
});
//#endregion
//#region ../../node_modules/zod/v4/core/doc.js
var Doc = class {
	constructor(args = []) {
		this.content = [];
		this.indent = 0;
		if (this) this.args = args;
	}
	indented(fn) {
		this.indent += 1;
		fn(this);
		this.indent -= 1;
	}
	write(arg) {
		if (typeof arg === "function") {
			arg(this, { execution: "sync" });
			arg(this, { execution: "async" });
			return;
		}
		const lines = arg.split("\n").filter((x) => x);
		const minIndent = Math.min(...lines.map((x) => x.length - x.trimStart().length));
		const dedented = lines.map((x) => x.slice(minIndent)).map((x) => " ".repeat(this.indent * 2) + x);
		for (const line of dedented) this.content.push(line);
	}
	compile() {
		const F = Function;
		const args = this?.args;
		const lines = [...(this?.content ?? [``]).map((x) => `  ${x}`)];
		return new F(...args, lines.join("\n"));
	}
};
//#endregion
//#region ../../node_modules/zod/v4/core/versions.js
var version = {
	major: 4,
	minor: 4,
	patch: 3
};
//#endregion
//#region ../../node_modules/zod/v4/core/schemas.js
var $ZodType = /*@__PURE__*/ $constructor("$ZodType", (inst, def) => {
	var _a;
	inst ?? (inst = {});
	inst._zod.def = def;
	inst._zod.bag = inst._zod.bag || {};
	inst._zod.version = version;
	const checks = [...inst._zod.def.checks ?? []];
	if (inst._zod.traits.has("$ZodCheck")) checks.unshift(inst);
	for (const ch of checks) for (const fn of ch._zod.onattach) fn(inst);
	if (checks.length === 0) {
		(_a = inst._zod).deferred ?? (_a.deferred = []);
		inst._zod.deferred?.push(() => {
			inst._zod.run = inst._zod.parse;
		});
	} else {
		const runChecks = (payload, checks, ctx) => {
			let isAborted = aborted(payload);
			let asyncResult;
			for (const ch of checks) {
				if (ch._zod.def.when) {
					if (explicitlyAborted(payload)) continue;
					if (!ch._zod.def.when(payload)) continue;
				} else if (isAborted) continue;
				const currLen = payload.issues.length;
				const _ = ch._zod.check(payload);
				if (_ instanceof Promise && ctx?.async === false) throw new $ZodAsyncError();
				if (asyncResult || _ instanceof Promise) asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
					await _;
					if (payload.issues.length === currLen) return;
					if (!isAborted) isAborted = aborted(payload, currLen);
				});
				else {
					if (payload.issues.length === currLen) continue;
					if (!isAborted) isAborted = aborted(payload, currLen);
				}
			}
			if (asyncResult) return asyncResult.then(() => {
				return payload;
			});
			return payload;
		};
		const handleCanaryResult = (canary, payload, ctx) => {
			if (aborted(canary)) {
				canary.aborted = true;
				return canary;
			}
			const checkResult = runChecks(payload, checks, ctx);
			if (checkResult instanceof Promise) {
				if (ctx.async === false) throw new $ZodAsyncError();
				return checkResult.then((checkResult) => inst._zod.parse(checkResult, ctx));
			}
			return inst._zod.parse(checkResult, ctx);
		};
		inst._zod.run = (payload, ctx) => {
			if (ctx.skipChecks) return inst._zod.parse(payload, ctx);
			if (ctx.direction === "backward") {
				const canary = inst._zod.parse({
					value: payload.value,
					issues: []
				}, {
					...ctx,
					skipChecks: true
				});
				if (canary instanceof Promise) return canary.then((canary) => {
					return handleCanaryResult(canary, payload, ctx);
				});
				return handleCanaryResult(canary, payload, ctx);
			}
			const result = inst._zod.parse(payload, ctx);
			if (result instanceof Promise) {
				if (ctx.async === false) throw new $ZodAsyncError();
				return result.then((result) => runChecks(result, checks, ctx));
			}
			return runChecks(result, checks, ctx);
		};
	}
	defineLazy(inst, "~standard", () => ({
		validate: (value) => {
			try {
				const r = safeParse$1(inst, value);
				return r.success ? { value: r.data } : { issues: r.error?.issues };
			} catch (_) {
				return safeParseAsync$1(inst, value).then((r) => r.success ? { value: r.data } : { issues: r.error?.issues });
			}
		},
		vendor: "zod",
		version: 1
	}));
});
var $ZodString = /*@__PURE__*/ $constructor("$ZodString", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.pattern = [...inst?._zod.bag?.patterns ?? []].pop() ?? string$1(inst._zod.bag);
	inst._zod.parse = (payload, _) => {
		if (def.coerce) try {
			payload.value = String(payload.value);
		} catch (_) {}
		if (typeof payload.value === "string") return payload;
		payload.issues.push({
			expected: "string",
			code: "invalid_type",
			input: payload.value,
			inst
		});
		return payload;
	};
});
var $ZodStringFormat = /*@__PURE__*/ $constructor("$ZodStringFormat", (inst, def) => {
	$ZodCheckStringFormat.init(inst, def);
	$ZodString.init(inst, def);
});
var $ZodGUID = /*@__PURE__*/ $constructor("$ZodGUID", (inst, def) => {
	def.pattern ?? (def.pattern = guid);
	$ZodStringFormat.init(inst, def);
});
var $ZodUUID = /*@__PURE__*/ $constructor("$ZodUUID", (inst, def) => {
	if (def.version) {
		const v = {
			v1: 1,
			v2: 2,
			v3: 3,
			v4: 4,
			v5: 5,
			v6: 6,
			v7: 7,
			v8: 8
		}[def.version];
		if (v === void 0) throw new Error(`Invalid UUID version: "${def.version}"`);
		def.pattern ?? (def.pattern = uuid(v));
	} else def.pattern ?? (def.pattern = uuid());
	$ZodStringFormat.init(inst, def);
});
var $ZodEmail = /*@__PURE__*/ $constructor("$ZodEmail", (inst, def) => {
	def.pattern ?? (def.pattern = email);
	$ZodStringFormat.init(inst, def);
});
var $ZodURL = /*@__PURE__*/ $constructor("$ZodURL", (inst, def) => {
	$ZodStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		try {
			const trimmed = payload.value.trim();
			if (!def.normalize && def.protocol?.source === httpProtocol.source) {
				if (!/^https?:\/\//i.test(trimmed)) {
					payload.issues.push({
						code: "invalid_format",
						format: "url",
						note: "Invalid URL format",
						input: payload.value,
						inst,
						continue: !def.abort
					});
					return;
				}
			}
			const url = new URL(trimmed);
			if (def.hostname) {
				def.hostname.lastIndex = 0;
				if (!def.hostname.test(url.hostname)) payload.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid hostname",
					pattern: def.hostname.source,
					input: payload.value,
					inst,
					continue: !def.abort
				});
			}
			if (def.protocol) {
				def.protocol.lastIndex = 0;
				if (!def.protocol.test(url.protocol.endsWith(":") ? url.protocol.slice(0, -1) : url.protocol)) payload.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid protocol",
					pattern: def.protocol.source,
					input: payload.value,
					inst,
					continue: !def.abort
				});
			}
			if (def.normalize) payload.value = url.href;
			else payload.value = trimmed;
			return;
		} catch (_) {
			payload.issues.push({
				code: "invalid_format",
				format: "url",
				input: payload.value,
				inst,
				continue: !def.abort
			});
		}
	};
});
var $ZodEmoji = /*@__PURE__*/ $constructor("$ZodEmoji", (inst, def) => {
	def.pattern ?? (def.pattern = emoji());
	$ZodStringFormat.init(inst, def);
});
var $ZodNanoID = /*@__PURE__*/ $constructor("$ZodNanoID", (inst, def) => {
	def.pattern ?? (def.pattern = nanoid);
	$ZodStringFormat.init(inst, def);
});
/**
* @deprecated CUID v1 is deprecated by its authors due to information leakage
* (timestamps embedded in the id). Use {@link $ZodCUID2} instead.
* See https://github.com/paralleldrive/cuid.
*/
var $ZodCUID = /*@__PURE__*/ $constructor("$ZodCUID", (inst, def) => {
	def.pattern ?? (def.pattern = cuid);
	$ZodStringFormat.init(inst, def);
});
var $ZodCUID2 = /*@__PURE__*/ $constructor("$ZodCUID2", (inst, def) => {
	def.pattern ?? (def.pattern = cuid2);
	$ZodStringFormat.init(inst, def);
});
var $ZodULID = /*@__PURE__*/ $constructor("$ZodULID", (inst, def) => {
	def.pattern ?? (def.pattern = ulid);
	$ZodStringFormat.init(inst, def);
});
var $ZodXID = /*@__PURE__*/ $constructor("$ZodXID", (inst, def) => {
	def.pattern ?? (def.pattern = xid);
	$ZodStringFormat.init(inst, def);
});
var $ZodKSUID = /*@__PURE__*/ $constructor("$ZodKSUID", (inst, def) => {
	def.pattern ?? (def.pattern = ksuid);
	$ZodStringFormat.init(inst, def);
});
var $ZodISODateTime = /*@__PURE__*/ $constructor("$ZodISODateTime", (inst, def) => {
	def.pattern ?? (def.pattern = datetime$1(def));
	$ZodStringFormat.init(inst, def);
});
var $ZodISODate = /*@__PURE__*/ $constructor("$ZodISODate", (inst, def) => {
	def.pattern ?? (def.pattern = date$1);
	$ZodStringFormat.init(inst, def);
});
var $ZodISOTime = /*@__PURE__*/ $constructor("$ZodISOTime", (inst, def) => {
	def.pattern ?? (def.pattern = time$1(def));
	$ZodStringFormat.init(inst, def);
});
var $ZodISODuration = /*@__PURE__*/ $constructor("$ZodISODuration", (inst, def) => {
	def.pattern ?? (def.pattern = duration$1);
	$ZodStringFormat.init(inst, def);
});
var $ZodIPv4 = /*@__PURE__*/ $constructor("$ZodIPv4", (inst, def) => {
	def.pattern ?? (def.pattern = ipv4);
	$ZodStringFormat.init(inst, def);
	inst._zod.bag.format = `ipv4`;
});
var $ZodIPv6 = /*@__PURE__*/ $constructor("$ZodIPv6", (inst, def) => {
	def.pattern ?? (def.pattern = ipv6);
	$ZodStringFormat.init(inst, def);
	inst._zod.bag.format = `ipv6`;
	inst._zod.check = (payload) => {
		try {
			new URL(`http://[${payload.value}]`);
		} catch {
			payload.issues.push({
				code: "invalid_format",
				format: "ipv6",
				input: payload.value,
				inst,
				continue: !def.abort
			});
		}
	};
});
var $ZodCIDRv4 = /*@__PURE__*/ $constructor("$ZodCIDRv4", (inst, def) => {
	def.pattern ?? (def.pattern = cidrv4);
	$ZodStringFormat.init(inst, def);
});
var $ZodCIDRv6 = /*@__PURE__*/ $constructor("$ZodCIDRv6", (inst, def) => {
	def.pattern ?? (def.pattern = cidrv6);
	$ZodStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		const parts = payload.value.split("/");
		try {
			if (parts.length !== 2) throw new Error();
			const [address, prefix] = parts;
			if (!prefix) throw new Error();
			const prefixNum = Number(prefix);
			if (`${prefixNum}` !== prefix) throw new Error();
			if (prefixNum < 0 || prefixNum > 128) throw new Error();
			new URL(`http://[${address}]`);
		} catch {
			payload.issues.push({
				code: "invalid_format",
				format: "cidrv6",
				input: payload.value,
				inst,
				continue: !def.abort
			});
		}
	};
});
function isValidBase64(data) {
	if (data === "") return true;
	if (/\s/.test(data)) return false;
	if (data.length % 4 !== 0) return false;
	try {
		atob(data);
		return true;
	} catch {
		return false;
	}
}
var $ZodBase64 = /*@__PURE__*/ $constructor("$ZodBase64", (inst, def) => {
	def.pattern ?? (def.pattern = base64);
	$ZodStringFormat.init(inst, def);
	inst._zod.bag.contentEncoding = "base64";
	inst._zod.check = (payload) => {
		if (isValidBase64(payload.value)) return;
		payload.issues.push({
			code: "invalid_format",
			format: "base64",
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
function isValidBase64URL(data) {
	if (!base64url.test(data)) return false;
	const base64 = data.replace(/[-_]/g, (c) => c === "-" ? "+" : "/");
	return isValidBase64(base64.padEnd(Math.ceil(base64.length / 4) * 4, "="));
}
var $ZodBase64URL = /*@__PURE__*/ $constructor("$ZodBase64URL", (inst, def) => {
	def.pattern ?? (def.pattern = base64url);
	$ZodStringFormat.init(inst, def);
	inst._zod.bag.contentEncoding = "base64url";
	inst._zod.check = (payload) => {
		if (isValidBase64URL(payload.value)) return;
		payload.issues.push({
			code: "invalid_format",
			format: "base64url",
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodE164 = /*@__PURE__*/ $constructor("$ZodE164", (inst, def) => {
	def.pattern ?? (def.pattern = e164);
	$ZodStringFormat.init(inst, def);
});
function isValidJWT(token, algorithm = null) {
	try {
		const tokensParts = token.split(".");
		if (tokensParts.length !== 3) return false;
		const [header] = tokensParts;
		if (!header) return false;
		const parsedHeader = JSON.parse(atob(header));
		if ("typ" in parsedHeader && parsedHeader?.typ !== "JWT") return false;
		if (!parsedHeader.alg) return false;
		if (algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm)) return false;
		return true;
	} catch {
		return false;
	}
}
var $ZodJWT = /*@__PURE__*/ $constructor("$ZodJWT", (inst, def) => {
	$ZodStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		if (isValidJWT(payload.value, def.alg)) return;
		payload.issues.push({
			code: "invalid_format",
			format: "jwt",
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodNumber = /*@__PURE__*/ $constructor("$ZodNumber", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.pattern = inst._zod.bag.pattern ?? number$1;
	inst._zod.parse = (payload, _ctx) => {
		if (def.coerce) try {
			payload.value = Number(payload.value);
		} catch (_) {}
		const input = payload.value;
		if (typeof input === "number" && !Number.isNaN(input) && Number.isFinite(input)) return payload;
		const received = typeof input === "number" ? Number.isNaN(input) ? "NaN" : !Number.isFinite(input) ? "Infinity" : void 0 : void 0;
		payload.issues.push({
			expected: "number",
			code: "invalid_type",
			input,
			inst,
			...received ? { received } : {}
		});
		return payload;
	};
});
var $ZodNumberFormat = /*@__PURE__*/ $constructor("$ZodNumberFormat", (inst, def) => {
	$ZodCheckNumberFormat.init(inst, def);
	$ZodNumber.init(inst, def);
});
var $ZodBoolean = /*@__PURE__*/ $constructor("$ZodBoolean", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.pattern = boolean$1;
	inst._zod.parse = (payload, _ctx) => {
		if (def.coerce) try {
			payload.value = Boolean(payload.value);
		} catch (_) {}
		const input = payload.value;
		if (typeof input === "boolean") return payload;
		payload.issues.push({
			expected: "boolean",
			code: "invalid_type",
			input,
			inst
		});
		return payload;
	};
});
var $ZodUnknown = /*@__PURE__*/ $constructor("$ZodUnknown", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload) => payload;
});
var $ZodNever = /*@__PURE__*/ $constructor("$ZodNever", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, _ctx) => {
		payload.issues.push({
			expected: "never",
			code: "invalid_type",
			input: payload.value,
			inst
		});
		return payload;
	};
});
function handleArrayResult(result, final, index) {
	if (result.issues.length) final.issues.push(...prefixIssues(index, result.issues));
	final.value[index] = result.value;
}
var $ZodArray = /*@__PURE__*/ $constructor("$ZodArray", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, ctx) => {
		const input = payload.value;
		if (!Array.isArray(input)) {
			payload.issues.push({
				expected: "array",
				code: "invalid_type",
				input,
				inst
			});
			return payload;
		}
		payload.value = Array(input.length);
		const proms = [];
		for (let i = 0; i < input.length; i++) {
			const item = input[i];
			const result = def.element._zod.run({
				value: item,
				issues: []
			}, ctx);
			if (result instanceof Promise) proms.push(result.then((result) => handleArrayResult(result, payload, i)));
			else handleArrayResult(result, payload, i);
		}
		if (proms.length) return Promise.all(proms).then(() => payload);
		return payload;
	};
});
function handlePropertyResult(result, final, key, input, isOptionalIn, isOptionalOut) {
	const isPresent = key in input;
	if (result.issues.length) {
		if (isOptionalIn && isOptionalOut && !isPresent) return;
		final.issues.push(...prefixIssues(key, result.issues));
	}
	if (!isPresent && !isOptionalIn) {
		if (!result.issues.length) final.issues.push({
			code: "invalid_type",
			expected: "nonoptional",
			input: void 0,
			path: [key]
		});
		return;
	}
	if (result.value === void 0) {
		if (isPresent) final.value[key] = void 0;
	} else final.value[key] = result.value;
}
function normalizeDef(def) {
	const keys = Object.keys(def.shape);
	for (const k of keys) if (!def.shape?.[k]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${k}": expected a Zod schema`);
	const okeys = optionalKeys(def.shape);
	return {
		...def,
		keys,
		keySet: new Set(keys),
		numKeys: keys.length,
		optionalKeys: new Set(okeys)
	};
}
function handleCatchall(proms, input, payload, ctx, def, inst) {
	const unrecognized = [];
	const keySet = def.keySet;
	const _catchall = def.catchall._zod;
	const t = _catchall.def.type;
	const isOptionalIn = _catchall.optin === "optional";
	const isOptionalOut = _catchall.optout === "optional";
	for (const key in input) {
		if (key === "__proto__") continue;
		if (keySet.has(key)) continue;
		if (t === "never") {
			unrecognized.push(key);
			continue;
		}
		const r = _catchall.run({
			value: input[key],
			issues: []
		}, ctx);
		if (r instanceof Promise) proms.push(r.then((r) => handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut)));
		else handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut);
	}
	if (unrecognized.length) payload.issues.push({
		code: "unrecognized_keys",
		keys: unrecognized,
		input,
		inst
	});
	if (!proms.length) return payload;
	return Promise.all(proms).then(() => {
		return payload;
	});
}
var $ZodObject = /*@__PURE__*/ $constructor("$ZodObject", (inst, def) => {
	$ZodType.init(inst, def);
	if (!Object.getOwnPropertyDescriptor(def, "shape")?.get) {
		const sh = def.shape;
		Object.defineProperty(def, "shape", { get: () => {
			const newSh = { ...sh };
			Object.defineProperty(def, "shape", { value: newSh });
			return newSh;
		} });
	}
	const _normalized = cached(() => normalizeDef(def));
	defineLazy(inst._zod, "propValues", () => {
		const shape = def.shape;
		const propValues = {};
		for (const key in shape) {
			const field = shape[key]._zod;
			if (field.values) {
				propValues[key] ?? (propValues[key] = /* @__PURE__ */ new Set());
				for (const v of field.values) propValues[key].add(v);
			}
		}
		return propValues;
	});
	const isObject$1 = isObject;
	const catchall = def.catchall;
	let value;
	inst._zod.parse = (payload, ctx) => {
		value ?? (value = _normalized.value);
		const input = payload.value;
		if (!isObject$1(input)) {
			payload.issues.push({
				expected: "object",
				code: "invalid_type",
				input,
				inst
			});
			return payload;
		}
		payload.value = {};
		const proms = [];
		const shape = value.shape;
		for (const key of value.keys) {
			const el = shape[key];
			const isOptionalIn = el._zod.optin === "optional";
			const isOptionalOut = el._zod.optout === "optional";
			const r = el._zod.run({
				value: input[key],
				issues: []
			}, ctx);
			if (r instanceof Promise) proms.push(r.then((r) => handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut)));
			else handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut);
		}
		if (!catchall) return proms.length ? Promise.all(proms).then(() => payload) : payload;
		return handleCatchall(proms, input, payload, ctx, _normalized.value, inst);
	};
});
var $ZodObjectJIT = /*@__PURE__*/ $constructor("$ZodObjectJIT", (inst, def) => {
	$ZodObject.init(inst, def);
	const superParse = inst._zod.parse;
	const _normalized = cached(() => normalizeDef(def));
	const generateFastpass = (shape) => {
		const doc = new Doc([
			"shape",
			"payload",
			"ctx"
		]);
		const normalized = _normalized.value;
		const parseStr = (key) => {
			const k = esc(key);
			return `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
		};
		doc.write(`const input = payload.value;`);
		const ids = Object.create(null);
		let counter = 0;
		for (const key of normalized.keys) ids[key] = `key_${counter++}`;
		doc.write(`const newResult = {};`);
		for (const key of normalized.keys) {
			const id = ids[key];
			const k = esc(key);
			const schema = shape[key];
			const isOptionalIn = schema?._zod?.optin === "optional";
			const isOptionalOut = schema?._zod?.optout === "optional";
			doc.write(`const ${id} = ${parseStr(key)};`);
			if (isOptionalIn && isOptionalOut) doc.write(`
        if (${id}.issues.length) {
          if (${k} in input) {
            payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${k}, ...iss.path] : [${k}]
            })));
          }
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `);
			else if (!isOptionalIn) doc.write(`
        const ${id}_present = ${k} in input;
        if (${id}.issues.length) {
          payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${k}, ...iss.path] : [${k}]
          })));
        }
        if (!${id}_present && !${id}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${k}]
          });
        }

        if (${id}_present) {
          if (${id}.value === undefined) {
            newResult[${k}] = undefined;
          } else {
            newResult[${k}] = ${id}.value;
          }
        }

      `);
			else doc.write(`
        if (${id}.issues.length) {
          payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${k}, ...iss.path] : [${k}]
          })));
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `);
		}
		doc.write(`payload.value = newResult;`);
		doc.write(`return payload;`);
		const fn = doc.compile();
		return (payload, ctx) => fn(shape, payload, ctx);
	};
	let fastpass;
	const isObject$2 = isObject;
	const jit = !globalConfig.jitless;
	const fastEnabled = jit && allowsEval.value;
	const catchall = def.catchall;
	let value;
	inst._zod.parse = (payload, ctx) => {
		value ?? (value = _normalized.value);
		const input = payload.value;
		if (!isObject$2(input)) {
			payload.issues.push({
				expected: "object",
				code: "invalid_type",
				input,
				inst
			});
			return payload;
		}
		if (jit && fastEnabled && ctx?.async === false && ctx.jitless !== true) {
			if (!fastpass) fastpass = generateFastpass(def.shape);
			payload = fastpass(payload, ctx);
			if (!catchall) return payload;
			return handleCatchall([], input, payload, ctx, value, inst);
		}
		return superParse(payload, ctx);
	};
});
function handleUnionResults(results, final, inst, ctx) {
	for (const result of results) if (result.issues.length === 0) {
		final.value = result.value;
		return final;
	}
	const nonaborted = results.filter((r) => !aborted(r));
	if (nonaborted.length === 1) {
		final.value = nonaborted[0].value;
		return nonaborted[0];
	}
	final.issues.push({
		code: "invalid_union",
		input: final.value,
		inst,
		errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
	});
	return final;
}
var $ZodUnion = /*@__PURE__*/ $constructor("$ZodUnion", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "optin", () => def.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0);
	defineLazy(inst._zod, "optout", () => def.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0);
	defineLazy(inst._zod, "values", () => {
		if (def.options.every((o) => o._zod.values)) return new Set(def.options.flatMap((option) => Array.from(option._zod.values)));
	});
	defineLazy(inst._zod, "pattern", () => {
		if (def.options.every((o) => o._zod.pattern)) {
			const patterns = def.options.map((o) => o._zod.pattern);
			return new RegExp(`^(${patterns.map((p) => cleanRegex(p.source)).join("|")})$`);
		}
	});
	const first = def.options.length === 1 ? def.options[0]._zod.run : null;
	inst._zod.parse = (payload, ctx) => {
		if (first) return first(payload, ctx);
		let async = false;
		const results = [];
		for (const option of def.options) {
			const result = option._zod.run({
				value: payload.value,
				issues: []
			}, ctx);
			if (result instanceof Promise) {
				results.push(result);
				async = true;
			} else {
				if (result.issues.length === 0) return result;
				results.push(result);
			}
		}
		if (!async) return handleUnionResults(results, payload, inst, ctx);
		return Promise.all(results).then((results) => {
			return handleUnionResults(results, payload, inst, ctx);
		});
	};
});
var $ZodIntersection = /*@__PURE__*/ $constructor("$ZodIntersection", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, ctx) => {
		const input = payload.value;
		const left = def.left._zod.run({
			value: input,
			issues: []
		}, ctx);
		const right = def.right._zod.run({
			value: input,
			issues: []
		}, ctx);
		if (left instanceof Promise || right instanceof Promise) return Promise.all([left, right]).then(([left, right]) => {
			return handleIntersectionResults(payload, left, right);
		});
		return handleIntersectionResults(payload, left, right);
	};
});
function mergeValues(a, b) {
	if (a === b) return {
		valid: true,
		data: a
	};
	if (a instanceof Date && b instanceof Date && +a === +b) return {
		valid: true,
		data: a
	};
	if (isPlainObject(a) && isPlainObject(b)) {
		const bKeys = Object.keys(b);
		const sharedKeys = Object.keys(a).filter((key) => bKeys.indexOf(key) !== -1);
		const newObj = {
			...a,
			...b
		};
		for (const key of sharedKeys) {
			const sharedValue = mergeValues(a[key], b[key]);
			if (!sharedValue.valid) return {
				valid: false,
				mergeErrorPath: [key, ...sharedValue.mergeErrorPath]
			};
			newObj[key] = sharedValue.data;
		}
		return {
			valid: true,
			data: newObj
		};
	}
	if (Array.isArray(a) && Array.isArray(b)) {
		if (a.length !== b.length) return {
			valid: false,
			mergeErrorPath: []
		};
		const newArray = [];
		for (let index = 0; index < a.length; index++) {
			const itemA = a[index];
			const itemB = b[index];
			const sharedValue = mergeValues(itemA, itemB);
			if (!sharedValue.valid) return {
				valid: false,
				mergeErrorPath: [index, ...sharedValue.mergeErrorPath]
			};
			newArray.push(sharedValue.data);
		}
		return {
			valid: true,
			data: newArray
		};
	}
	return {
		valid: false,
		mergeErrorPath: []
	};
}
function handleIntersectionResults(result, left, right) {
	const unrecKeys = /* @__PURE__ */ new Map();
	let unrecIssue;
	for (const iss of left.issues) if (iss.code === "unrecognized_keys") {
		unrecIssue ?? (unrecIssue = iss);
		for (const k of iss.keys) {
			if (!unrecKeys.has(k)) unrecKeys.set(k, {});
			unrecKeys.get(k).l = true;
		}
	} else result.issues.push(iss);
	for (const iss of right.issues) if (iss.code === "unrecognized_keys") for (const k of iss.keys) {
		if (!unrecKeys.has(k)) unrecKeys.set(k, {});
		unrecKeys.get(k).r = true;
	}
	else result.issues.push(iss);
	const bothKeys = [...unrecKeys].filter(([, f]) => f.l && f.r).map(([k]) => k);
	if (bothKeys.length && unrecIssue) result.issues.push({
		...unrecIssue,
		keys: bothKeys
	});
	if (aborted(result)) return result;
	const merged = mergeValues(left.value, right.value);
	if (!merged.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(merged.mergeErrorPath)}`);
	result.value = merged.data;
	return result;
}
var $ZodEnum = /*@__PURE__*/ $constructor("$ZodEnum", (inst, def) => {
	$ZodType.init(inst, def);
	const values = getEnumValues(def.entries);
	const valuesSet = new Set(values);
	inst._zod.values = valuesSet;
	inst._zod.pattern = new RegExp(`^(${values.filter((k) => propertyKeyTypes.has(typeof k)).map((o) => typeof o === "string" ? escapeRegex(o) : o.toString()).join("|")})$`);
	inst._zod.parse = (payload, _ctx) => {
		const input = payload.value;
		if (valuesSet.has(input)) return payload;
		payload.issues.push({
			code: "invalid_value",
			values,
			input,
			inst
		});
		return payload;
	};
});
var $ZodTransform = /*@__PURE__*/ $constructor("$ZodTransform", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.optin = "optional";
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") throw new $ZodEncodeError(inst.constructor.name);
		const _out = def.transform(payload.value, payload);
		if (ctx.async) return (_out instanceof Promise ? _out : Promise.resolve(_out)).then((output) => {
			payload.value = output;
			payload.fallback = true;
			return payload;
		});
		if (_out instanceof Promise) throw new $ZodAsyncError();
		payload.value = _out;
		payload.fallback = true;
		return payload;
	};
});
function handleOptionalResult(result, input) {
	if (input === void 0 && (result.issues.length || result.fallback)) return {
		issues: [],
		value: void 0
	};
	return result;
}
var $ZodOptional = /*@__PURE__*/ $constructor("$ZodOptional", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.optin = "optional";
	inst._zod.optout = "optional";
	defineLazy(inst._zod, "values", () => {
		return def.innerType._zod.values ? new Set([...def.innerType._zod.values, void 0]) : void 0;
	});
	defineLazy(inst._zod, "pattern", () => {
		const pattern = def.innerType._zod.pattern;
		return pattern ? new RegExp(`^(${cleanRegex(pattern.source)})?$`) : void 0;
	});
	inst._zod.parse = (payload, ctx) => {
		if (def.innerType._zod.optin === "optional") {
			const input = payload.value;
			const result = def.innerType._zod.run(payload, ctx);
			if (result instanceof Promise) return result.then((r) => handleOptionalResult(r, input));
			return handleOptionalResult(result, input);
		}
		if (payload.value === void 0) return payload;
		return def.innerType._zod.run(payload, ctx);
	};
});
var $ZodExactOptional = /*@__PURE__*/ $constructor("$ZodExactOptional", (inst, def) => {
	$ZodOptional.init(inst, def);
	defineLazy(inst._zod, "values", () => def.innerType._zod.values);
	defineLazy(inst._zod, "pattern", () => def.innerType._zod.pattern);
	inst._zod.parse = (payload, ctx) => {
		return def.innerType._zod.run(payload, ctx);
	};
});
var $ZodNullable = /*@__PURE__*/ $constructor("$ZodNullable", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
	defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
	defineLazy(inst._zod, "pattern", () => {
		const pattern = def.innerType._zod.pattern;
		return pattern ? new RegExp(`^(${cleanRegex(pattern.source)}|null)$`) : void 0;
	});
	defineLazy(inst._zod, "values", () => {
		return def.innerType._zod.values ? new Set([...def.innerType._zod.values, null]) : void 0;
	});
	inst._zod.parse = (payload, ctx) => {
		if (payload.value === null) return payload;
		return def.innerType._zod.run(payload, ctx);
	};
});
var $ZodDefault = /*@__PURE__*/ $constructor("$ZodDefault", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.optin = "optional";
	defineLazy(inst._zod, "values", () => def.innerType._zod.values);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
		if (payload.value === void 0) {
			payload.value = def.defaultValue;
			/**
			* $ZodDefault returns the default value immediately in forward direction.
			* It doesn't pass the default value into the validator ("prefault"). There's no reason to pass the default value through validation. The validity of the default is enforced by TypeScript statically. Otherwise, it's the responsibility of the user to ensure the default is valid. In the case of pipes with divergent in/out types, you can specify the default on the `in` schema of your ZodPipe to set a "prefault" for the pipe.   */
			return payload;
		}
		const result = def.innerType._zod.run(payload, ctx);
		if (result instanceof Promise) return result.then((result) => handleDefaultResult(result, def));
		return handleDefaultResult(result, def);
	};
});
function handleDefaultResult(payload, def) {
	if (payload.value === void 0) payload.value = def.defaultValue;
	return payload;
}
var $ZodPrefault = /*@__PURE__*/ $constructor("$ZodPrefault", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.optin = "optional";
	defineLazy(inst._zod, "values", () => def.innerType._zod.values);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
		if (payload.value === void 0) payload.value = def.defaultValue;
		return def.innerType._zod.run(payload, ctx);
	};
});
var $ZodNonOptional = /*@__PURE__*/ $constructor("$ZodNonOptional", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "values", () => {
		const v = def.innerType._zod.values;
		return v ? new Set([...v].filter((x) => x !== void 0)) : void 0;
	});
	inst._zod.parse = (payload, ctx) => {
		const result = def.innerType._zod.run(payload, ctx);
		if (result instanceof Promise) return result.then((result) => handleNonOptionalResult(result, inst));
		return handleNonOptionalResult(result, inst);
	};
});
function handleNonOptionalResult(payload, inst) {
	if (!payload.issues.length && payload.value === void 0) payload.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: payload.value,
		inst
	});
	return payload;
}
var $ZodCatch = /*@__PURE__*/ $constructor("$ZodCatch", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.optin = "optional";
	defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
	defineLazy(inst._zod, "values", () => def.innerType._zod.values);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
		const result = def.innerType._zod.run(payload, ctx);
		if (result instanceof Promise) return result.then((result) => {
			payload.value = result.value;
			if (result.issues.length) {
				payload.value = def.catchValue({
					...payload,
					error: { issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config())) },
					input: payload.value
				});
				payload.issues = [];
				payload.fallback = true;
			}
			return payload;
		});
		payload.value = result.value;
		if (result.issues.length) {
			payload.value = def.catchValue({
				...payload,
				error: { issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config())) },
				input: payload.value
			});
			payload.issues = [];
			payload.fallback = true;
		}
		return payload;
	};
});
var $ZodPipe = /*@__PURE__*/ $constructor("$ZodPipe", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "values", () => def.in._zod.values);
	defineLazy(inst._zod, "optin", () => def.in._zod.optin);
	defineLazy(inst._zod, "optout", () => def.out._zod.optout);
	defineLazy(inst._zod, "propValues", () => def.in._zod.propValues);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") {
			const right = def.out._zod.run(payload, ctx);
			if (right instanceof Promise) return right.then((right) => handlePipeResult(right, def.in, ctx));
			return handlePipeResult(right, def.in, ctx);
		}
		const left = def.in._zod.run(payload, ctx);
		if (left instanceof Promise) return left.then((left) => handlePipeResult(left, def.out, ctx));
		return handlePipeResult(left, def.out, ctx);
	};
});
function handlePipeResult(left, next, ctx) {
	if (left.issues.length) {
		left.aborted = true;
		return left;
	}
	return next._zod.run({
		value: left.value,
		issues: left.issues,
		fallback: left.fallback
	}, ctx);
}
var $ZodReadonly = /*@__PURE__*/ $constructor("$ZodReadonly", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "propValues", () => def.innerType._zod.propValues);
	defineLazy(inst._zod, "values", () => def.innerType._zod.values);
	defineLazy(inst._zod, "optin", () => def.innerType?._zod?.optin);
	defineLazy(inst._zod, "optout", () => def.innerType?._zod?.optout);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
		const result = def.innerType._zod.run(payload, ctx);
		if (result instanceof Promise) return result.then(handleReadonlyResult);
		return handleReadonlyResult(result);
	};
});
function handleReadonlyResult(payload) {
	payload.value = Object.freeze(payload.value);
	return payload;
}
var $ZodCustom = /*@__PURE__*/ $constructor("$ZodCustom", (inst, def) => {
	$ZodCheck.init(inst, def);
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, _) => {
		return payload;
	};
	inst._zod.check = (payload) => {
		const input = payload.value;
		const r = def.fn(input);
		if (r instanceof Promise) return r.then((r) => handleRefineResult(r, payload, input, inst));
		handleRefineResult(r, payload, input, inst);
	};
});
function handleRefineResult(result, payload, input, inst) {
	if (!result) {
		const _iss = {
			code: "custom",
			input,
			inst,
			path: [...inst._zod.def.path ?? []],
			continue: !inst._zod.def.abort
		};
		if (inst._zod.def.params) _iss.params = inst._zod.def.params;
		payload.issues.push(issue(_iss));
	}
}
//#endregion
//#region ../../node_modules/zod/v4/core/registries.js
var _a;
var $ZodRegistry = class {
	constructor() {
		this._map = /* @__PURE__ */ new WeakMap();
		this._idmap = /* @__PURE__ */ new Map();
	}
	add(schema, ..._meta) {
		const meta = _meta[0];
		this._map.set(schema, meta);
		if (meta && typeof meta === "object" && "id" in meta) this._idmap.set(meta.id, schema);
		return this;
	}
	clear() {
		this._map = /* @__PURE__ */ new WeakMap();
		this._idmap = /* @__PURE__ */ new Map();
		return this;
	}
	remove(schema) {
		const meta = this._map.get(schema);
		if (meta && typeof meta === "object" && "id" in meta) this._idmap.delete(meta.id);
		this._map.delete(schema);
		return this;
	}
	get(schema) {
		const p = schema._zod.parent;
		if (p) {
			const pm = { ...this.get(p) ?? {} };
			delete pm.id;
			const f = {
				...pm,
				...this._map.get(schema)
			};
			return Object.keys(f).length ? f : void 0;
		}
		return this._map.get(schema);
	}
	has(schema) {
		return this._map.has(schema);
	}
};
function registry() {
	return new $ZodRegistry();
}
(_a = globalThis).__zod_globalRegistry ?? (_a.__zod_globalRegistry = registry());
var globalRegistry = globalThis.__zod_globalRegistry;
//#endregion
//#region ../../node_modules/zod/v4/core/api.js
// @__NO_SIDE_EFFECTS__
function _string(Class, params) {
	return new Class({
		type: "string",
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _email(Class, params) {
	return new Class({
		type: "string",
		format: "email",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _guid(Class, params) {
	return new Class({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _uuid(Class, params) {
	return new Class({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _uuidv4(Class, params) {
	return new Class({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: false,
		version: "v4",
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _uuidv6(Class, params) {
	return new Class({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: false,
		version: "v6",
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _uuidv7(Class, params) {
	return new Class({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: false,
		version: "v7",
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _url(Class, params) {
	return new Class({
		type: "string",
		format: "url",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _emoji(Class, params) {
	return new Class({
		type: "string",
		format: "emoji",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _nanoid(Class, params) {
	return new Class({
		type: "string",
		format: "nanoid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/**
* @deprecated CUID v1 is deprecated by its authors due to information leakage
* (timestamps embedded in the id). Use {@link _cuid2} instead.
* See https://github.com/paralleldrive/cuid.
*/
// @__NO_SIDE_EFFECTS__
function _cuid(Class, params) {
	return new Class({
		type: "string",
		format: "cuid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _cuid2(Class, params) {
	return new Class({
		type: "string",
		format: "cuid2",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _ulid(Class, params) {
	return new Class({
		type: "string",
		format: "ulid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _xid(Class, params) {
	return new Class({
		type: "string",
		format: "xid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _ksuid(Class, params) {
	return new Class({
		type: "string",
		format: "ksuid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _ipv4(Class, params) {
	return new Class({
		type: "string",
		format: "ipv4",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _ipv6(Class, params) {
	return new Class({
		type: "string",
		format: "ipv6",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _cidrv4(Class, params) {
	return new Class({
		type: "string",
		format: "cidrv4",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _cidrv6(Class, params) {
	return new Class({
		type: "string",
		format: "cidrv6",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _base64(Class, params) {
	return new Class({
		type: "string",
		format: "base64",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _base64url(Class, params) {
	return new Class({
		type: "string",
		format: "base64url",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _e164(Class, params) {
	return new Class({
		type: "string",
		format: "e164",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _jwt(Class, params) {
	return new Class({
		type: "string",
		format: "jwt",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _isoDateTime(Class, params) {
	return new Class({
		type: "string",
		format: "datetime",
		check: "string_format",
		offset: false,
		local: false,
		precision: null,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _isoDate(Class, params) {
	return new Class({
		type: "string",
		format: "date",
		check: "string_format",
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _isoTime(Class, params) {
	return new Class({
		type: "string",
		format: "time",
		check: "string_format",
		precision: null,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _isoDuration(Class, params) {
	return new Class({
		type: "string",
		format: "duration",
		check: "string_format",
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _number(Class, params) {
	return new Class({
		type: "number",
		checks: [],
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _int(Class, params) {
	return new Class({
		type: "number",
		check: "number_format",
		abort: false,
		format: "safeint",
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _boolean(Class, params) {
	return new Class({
		type: "boolean",
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _unknown(Class) {
	return new Class({ type: "unknown" });
}
// @__NO_SIDE_EFFECTS__
function _never(Class, params) {
	return new Class({
		type: "never",
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _lt(value, params) {
	return new $ZodCheckLessThan({
		check: "less_than",
		...normalizeParams(params),
		value,
		inclusive: false
	});
}
// @__NO_SIDE_EFFECTS__
function _lte(value, params) {
	return new $ZodCheckLessThan({
		check: "less_than",
		...normalizeParams(params),
		value,
		inclusive: true
	});
}
// @__NO_SIDE_EFFECTS__
function _gt(value, params) {
	return new $ZodCheckGreaterThan({
		check: "greater_than",
		...normalizeParams(params),
		value,
		inclusive: false
	});
}
// @__NO_SIDE_EFFECTS__
function _gte(value, params) {
	return new $ZodCheckGreaterThan({
		check: "greater_than",
		...normalizeParams(params),
		value,
		inclusive: true
	});
}
// @__NO_SIDE_EFFECTS__
function _multipleOf(value, params) {
	return new $ZodCheckMultipleOf({
		check: "multiple_of",
		...normalizeParams(params),
		value
	});
}
// @__NO_SIDE_EFFECTS__
function _maxLength(maximum, params) {
	return new $ZodCheckMaxLength({
		check: "max_length",
		...normalizeParams(params),
		maximum
	});
}
// @__NO_SIDE_EFFECTS__
function _minLength(minimum, params) {
	return new $ZodCheckMinLength({
		check: "min_length",
		...normalizeParams(params),
		minimum
	});
}
// @__NO_SIDE_EFFECTS__
function _length(length, params) {
	return new $ZodCheckLengthEquals({
		check: "length_equals",
		...normalizeParams(params),
		length
	});
}
// @__NO_SIDE_EFFECTS__
function _regex(pattern, params) {
	return new $ZodCheckRegex({
		check: "string_format",
		format: "regex",
		...normalizeParams(params),
		pattern
	});
}
// @__NO_SIDE_EFFECTS__
function _lowercase(params) {
	return new $ZodCheckLowerCase({
		check: "string_format",
		format: "lowercase",
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _uppercase(params) {
	return new $ZodCheckUpperCase({
		check: "string_format",
		format: "uppercase",
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _includes(includes, params) {
	return new $ZodCheckIncludes({
		check: "string_format",
		format: "includes",
		...normalizeParams(params),
		includes
	});
}
// @__NO_SIDE_EFFECTS__
function _startsWith(prefix, params) {
	return new $ZodCheckStartsWith({
		check: "string_format",
		format: "starts_with",
		...normalizeParams(params),
		prefix
	});
}
// @__NO_SIDE_EFFECTS__
function _endsWith(suffix, params) {
	return new $ZodCheckEndsWith({
		check: "string_format",
		format: "ends_with",
		...normalizeParams(params),
		suffix
	});
}
// @__NO_SIDE_EFFECTS__
function _overwrite(tx) {
	return new $ZodCheckOverwrite({
		check: "overwrite",
		tx
	});
}
// @__NO_SIDE_EFFECTS__
function _normalize(form) {
	return /* @__PURE__ */ _overwrite((input) => input.normalize(form));
}
// @__NO_SIDE_EFFECTS__
function _trim() {
	return /* @__PURE__ */ _overwrite((input) => input.trim());
}
// @__NO_SIDE_EFFECTS__
function _toLowerCase() {
	return /* @__PURE__ */ _overwrite((input) => input.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function _toUpperCase() {
	return /* @__PURE__ */ _overwrite((input) => input.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function _slugify() {
	return /* @__PURE__ */ _overwrite((input) => slugify(input));
}
// @__NO_SIDE_EFFECTS__
function _array(Class, element, params) {
	return new Class({
		type: "array",
		element,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _refine(Class, fn, _params) {
	return new Class({
		type: "custom",
		check: "custom",
		fn,
		...normalizeParams(_params)
	});
}
// @__NO_SIDE_EFFECTS__
function _superRefine(fn, params) {
	const ch = /* @__PURE__ */ _check((payload) => {
		payload.addIssue = (issue$2) => {
			if (typeof issue$2 === "string") payload.issues.push(issue(issue$2, payload.value, ch._zod.def));
			else {
				const _issue = issue$2;
				if (_issue.fatal) _issue.continue = false;
				_issue.code ?? (_issue.code = "custom");
				_issue.input ?? (_issue.input = payload.value);
				_issue.inst ?? (_issue.inst = ch);
				_issue.continue ?? (_issue.continue = !ch._zod.def.abort);
				payload.issues.push(issue(_issue));
			}
		};
		return fn(payload.value, payload);
	}, params);
	return ch;
}
// @__NO_SIDE_EFFECTS__
function _check(fn, params) {
	const ch = new $ZodCheck({
		check: "custom",
		...normalizeParams(params)
	});
	ch._zod.check = fn;
	return ch;
}
//#endregion
//#region ../../node_modules/zod/v4/core/to-json-schema.js
function initializeContext(params) {
	let target = params?.target ?? "draft-2020-12";
	if (target === "draft-4") target = "draft-04";
	if (target === "draft-7") target = "draft-07";
	return {
		processors: params.processors ?? {},
		metadataRegistry: params?.metadata ?? globalRegistry,
		target,
		unrepresentable: params?.unrepresentable ?? "throw",
		override: params?.override ?? (() => {}),
		io: params?.io ?? "output",
		counter: 0,
		seen: /* @__PURE__ */ new Map(),
		cycles: params?.cycles ?? "ref",
		reused: params?.reused ?? "inline",
		external: params?.external ?? void 0
	};
}
function process(schema, ctx, _params = {
	path: [],
	schemaPath: []
}) {
	var _a;
	const def = schema._zod.def;
	const seen = ctx.seen.get(schema);
	if (seen) {
		seen.count++;
		if (_params.schemaPath.includes(schema)) seen.cycle = _params.path;
		return seen.schema;
	}
	const result = {
		schema: {},
		count: 1,
		cycle: void 0,
		path: _params.path
	};
	ctx.seen.set(schema, result);
	const overrideSchema = schema._zod.toJSONSchema?.();
	if (overrideSchema) result.schema = overrideSchema;
	else {
		const params = {
			..._params,
			schemaPath: [..._params.schemaPath, schema],
			path: _params.path
		};
		if (schema._zod.processJSONSchema) schema._zod.processJSONSchema(ctx, result.schema, params);
		else {
			const _json = result.schema;
			const processor = ctx.processors[def.type];
			if (!processor) throw new Error(`[toJSONSchema]: Non-representable type encountered: ${def.type}`);
			processor(schema, ctx, _json, params);
		}
		const parent = schema._zod.parent;
		if (parent) {
			if (!result.ref) result.ref = parent;
			process(parent, ctx, params);
			ctx.seen.get(parent).isParent = true;
		}
	}
	const meta = ctx.metadataRegistry.get(schema);
	if (meta) Object.assign(result.schema, meta);
	if (ctx.io === "input" && isTransforming(schema)) {
		delete result.schema.examples;
		delete result.schema.default;
	}
	if (ctx.io === "input" && "_prefault" in result.schema) (_a = result.schema).default ?? (_a.default = result.schema._prefault);
	delete result.schema._prefault;
	return ctx.seen.get(schema).schema;
}
function extractDefs(ctx, schema) {
	const root = ctx.seen.get(schema);
	if (!root) throw new Error("Unprocessed schema. This is a bug in Zod.");
	const idToSchema = /* @__PURE__ */ new Map();
	for (const entry of ctx.seen.entries()) {
		const id = ctx.metadataRegistry.get(entry[0])?.id;
		if (id) {
			const existing = idToSchema.get(id);
			if (existing && existing !== entry[0]) throw new Error(`Duplicate schema id "${id}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
			idToSchema.set(id, entry[0]);
		}
	}
	const makeURI = (entry) => {
		const defsSegment = ctx.target === "draft-2020-12" ? "$defs" : "definitions";
		if (ctx.external) {
			const externalId = ctx.external.registry.get(entry[0])?.id;
			const uriGenerator = ctx.external.uri ?? ((id) => id);
			if (externalId) return { ref: uriGenerator(externalId) };
			const id = entry[1].defId ?? entry[1].schema.id ?? `schema${ctx.counter++}`;
			entry[1].defId = id;
			return {
				defId: id,
				ref: `${uriGenerator("__shared")}#/${defsSegment}/${id}`
			};
		}
		if (entry[1] === root) return { ref: "#" };
		const defUriPrefix = `#/${defsSegment}/`;
		const defId = entry[1].schema.id ?? `__schema${ctx.counter++}`;
		return {
			defId,
			ref: defUriPrefix + defId
		};
	};
	const extractToDef = (entry) => {
		if (entry[1].schema.$ref) return;
		const seen = entry[1];
		const { ref, defId } = makeURI(entry);
		seen.def = { ...seen.schema };
		if (defId) seen.defId = defId;
		const schema = seen.schema;
		for (const key in schema) delete schema[key];
		schema.$ref = ref;
	};
	if (ctx.cycles === "throw") for (const entry of ctx.seen.entries()) {
		const seen = entry[1];
		if (seen.cycle) throw new Error(`Cycle detected: #/${seen.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
	}
	for (const entry of ctx.seen.entries()) {
		const seen = entry[1];
		if (schema === entry[0]) {
			extractToDef(entry);
			continue;
		}
		if (ctx.external) {
			const ext = ctx.external.registry.get(entry[0])?.id;
			if (schema !== entry[0] && ext) {
				extractToDef(entry);
				continue;
			}
		}
		if (ctx.metadataRegistry.get(entry[0])?.id) {
			extractToDef(entry);
			continue;
		}
		if (seen.cycle) {
			extractToDef(entry);
			continue;
		}
		if (seen.count > 1) {
			if (ctx.reused === "ref") {
				extractToDef(entry);
				continue;
			}
		}
	}
}
function finalize(ctx, schema) {
	const root = ctx.seen.get(schema);
	if (!root) throw new Error("Unprocessed schema. This is a bug in Zod.");
	const flattenRef = (zodSchema) => {
		const seen = ctx.seen.get(zodSchema);
		if (seen.ref === null) return;
		const schema = seen.def ?? seen.schema;
		const _cached = { ...schema };
		const ref = seen.ref;
		seen.ref = null;
		if (ref) {
			flattenRef(ref);
			const refSeen = ctx.seen.get(ref);
			const refSchema = refSeen.schema;
			if (refSchema.$ref && (ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0")) {
				schema.allOf = schema.allOf ?? [];
				schema.allOf.push(refSchema);
			} else Object.assign(schema, refSchema);
			Object.assign(schema, _cached);
			if (zodSchema._zod.parent === ref) for (const key in schema) {
				if (key === "$ref" || key === "allOf") continue;
				if (!(key in _cached)) delete schema[key];
			}
			if (refSchema.$ref && refSeen.def) for (const key in schema) {
				if (key === "$ref" || key === "allOf") continue;
				if (key in refSeen.def && JSON.stringify(schema[key]) === JSON.stringify(refSeen.def[key])) delete schema[key];
			}
		}
		const parent = zodSchema._zod.parent;
		if (parent && parent !== ref) {
			flattenRef(parent);
			const parentSeen = ctx.seen.get(parent);
			if (parentSeen?.schema.$ref) {
				schema.$ref = parentSeen.schema.$ref;
				if (parentSeen.def) for (const key in schema) {
					if (key === "$ref" || key === "allOf") continue;
					if (key in parentSeen.def && JSON.stringify(schema[key]) === JSON.stringify(parentSeen.def[key])) delete schema[key];
				}
			}
		}
		ctx.override({
			zodSchema,
			jsonSchema: schema,
			path: seen.path ?? []
		});
	};
	for (const entry of [...ctx.seen.entries()].reverse()) flattenRef(entry[0]);
	const result = {};
	if (ctx.target === "draft-2020-12") result.$schema = "https://json-schema.org/draft/2020-12/schema";
	else if (ctx.target === "draft-07") result.$schema = "http://json-schema.org/draft-07/schema#";
	else if (ctx.target === "draft-04") result.$schema = "http://json-schema.org/draft-04/schema#";
	else if (ctx.target === "openapi-3.0") {}
	if (ctx.external?.uri) {
		const id = ctx.external.registry.get(schema)?.id;
		if (!id) throw new Error("Schema is missing an `id` property");
		result.$id = ctx.external.uri(id);
	}
	Object.assign(result, root.def ?? root.schema);
	const rootMetaId = ctx.metadataRegistry.get(schema)?.id;
	if (rootMetaId !== void 0 && result.id === rootMetaId) delete result.id;
	const defs = ctx.external?.defs ?? {};
	for (const entry of ctx.seen.entries()) {
		const seen = entry[1];
		if (seen.def && seen.defId) {
			if (seen.def.id === seen.defId) delete seen.def.id;
			defs[seen.defId] = seen.def;
		}
	}
	if (ctx.external) {} else if (Object.keys(defs).length > 0) if (ctx.target === "draft-2020-12") result.$defs = defs;
	else result.definitions = defs;
	try {
		const finalized = JSON.parse(JSON.stringify(result));
		Object.defineProperty(finalized, "~standard", {
			value: {
				...schema["~standard"],
				jsonSchema: {
					input: createStandardJSONSchemaMethod(schema, "input", ctx.processors),
					output: createStandardJSONSchemaMethod(schema, "output", ctx.processors)
				}
			},
			enumerable: false,
			writable: false
		});
		return finalized;
	} catch (_err) {
		throw new Error("Error converting schema to JSON.");
	}
}
function isTransforming(_schema, _ctx) {
	const ctx = _ctx ?? { seen: /* @__PURE__ */ new Set() };
	if (ctx.seen.has(_schema)) return false;
	ctx.seen.add(_schema);
	const def = _schema._zod.def;
	if (def.type === "transform") return true;
	if (def.type === "array") return isTransforming(def.element, ctx);
	if (def.type === "set") return isTransforming(def.valueType, ctx);
	if (def.type === "lazy") return isTransforming(def.getter(), ctx);
	if (def.type === "promise" || def.type === "optional" || def.type === "nonoptional" || def.type === "nullable" || def.type === "readonly" || def.type === "default" || def.type === "prefault") return isTransforming(def.innerType, ctx);
	if (def.type === "intersection") return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
	if (def.type === "record" || def.type === "map") return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
	if (def.type === "pipe") {
		if (_schema._zod.traits.has("$ZodCodec")) return true;
		return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
	}
	if (def.type === "object") {
		for (const key in def.shape) if (isTransforming(def.shape[key], ctx)) return true;
		return false;
	}
	if (def.type === "union") {
		for (const option of def.options) if (isTransforming(option, ctx)) return true;
		return false;
	}
	if (def.type === "tuple") {
		for (const item of def.items) if (isTransforming(item, ctx)) return true;
		if (def.rest && isTransforming(def.rest, ctx)) return true;
		return false;
	}
	return false;
}
/**
* Creates a toJSONSchema method for a schema instance.
* This encapsulates the logic of initializing context, processing, extracting defs, and finalizing.
*/
var createToJSONSchemaMethod = (schema, processors = {}) => (params) => {
	const ctx = initializeContext({
		...params,
		processors
	});
	process(schema, ctx);
	extractDefs(ctx, schema);
	return finalize(ctx, schema);
};
var createStandardJSONSchemaMethod = (schema, io, processors = {}) => (params) => {
	const { libraryOptions, target } = params ?? {};
	const ctx = initializeContext({
		...libraryOptions ?? {},
		target,
		io,
		processors
	});
	process(schema, ctx);
	extractDefs(ctx, schema);
	return finalize(ctx, schema);
};
//#endregion
//#region ../../node_modules/zod/v4/core/json-schema-processors.js
var formatMap = {
	guid: "uuid",
	url: "uri",
	datetime: "date-time",
	json_string: "json-string",
	regex: ""
};
var stringProcessor = (schema, ctx, _json, _params) => {
	const json = _json;
	json.type = "string";
	const { minimum, maximum, format, patterns, contentEncoding } = schema._zod.bag;
	if (typeof minimum === "number") json.minLength = minimum;
	if (typeof maximum === "number") json.maxLength = maximum;
	if (format) {
		json.format = formatMap[format] ?? format;
		if (json.format === "") delete json.format;
		if (format === "time") delete json.format;
	}
	if (contentEncoding) json.contentEncoding = contentEncoding;
	if (patterns && patterns.size > 0) {
		const regexes = [...patterns];
		if (regexes.length === 1) json.pattern = regexes[0].source;
		else if (regexes.length > 1) json.allOf = [...regexes.map((regex) => ({
			...ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0" ? { type: "string" } : {},
			pattern: regex.source
		}))];
	}
};
var numberProcessor = (schema, ctx, _json, _params) => {
	const json = _json;
	const { minimum, maximum, format, multipleOf, exclusiveMaximum, exclusiveMinimum } = schema._zod.bag;
	if (typeof format === "string" && format.includes("int")) json.type = "integer";
	else json.type = "number";
	const exMin = typeof exclusiveMinimum === "number" && exclusiveMinimum >= (minimum ?? Number.NEGATIVE_INFINITY);
	const exMax = typeof exclusiveMaximum === "number" && exclusiveMaximum <= (maximum ?? Number.POSITIVE_INFINITY);
	const legacy = ctx.target === "draft-04" || ctx.target === "openapi-3.0";
	if (exMin) if (legacy) {
		json.minimum = exclusiveMinimum;
		json.exclusiveMinimum = true;
	} else json.exclusiveMinimum = exclusiveMinimum;
	else if (typeof minimum === "number") json.minimum = minimum;
	if (exMax) if (legacy) {
		json.maximum = exclusiveMaximum;
		json.exclusiveMaximum = true;
	} else json.exclusiveMaximum = exclusiveMaximum;
	else if (typeof maximum === "number") json.maximum = maximum;
	if (typeof multipleOf === "number") json.multipleOf = multipleOf;
};
var booleanProcessor = (_schema, _ctx, json, _params) => {
	json.type = "boolean";
};
var bigintProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("BigInt cannot be represented in JSON Schema");
};
var symbolProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("Symbols cannot be represented in JSON Schema");
};
var nullProcessor = (_schema, ctx, json, _params) => {
	if (ctx.target === "openapi-3.0") {
		json.type = "string";
		json.nullable = true;
		json.enum = [null];
	} else json.type = "null";
};
var undefinedProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("Undefined cannot be represented in JSON Schema");
};
var voidProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("Void cannot be represented in JSON Schema");
};
var neverProcessor = (_schema, _ctx, json, _params) => {
	json.not = {};
};
var anyProcessor = (_schema, _ctx, _json, _params) => {};
var unknownProcessor = (_schema, _ctx, _json, _params) => {};
var dateProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("Date cannot be represented in JSON Schema");
};
var enumProcessor = (schema, _ctx, json, _params) => {
	const def = schema._zod.def;
	const values = getEnumValues(def.entries);
	if (values.every((v) => typeof v === "number")) json.type = "number";
	if (values.every((v) => typeof v === "string")) json.type = "string";
	json.enum = values;
};
var literalProcessor = (schema, ctx, json, _params) => {
	const def = schema._zod.def;
	const vals = [];
	for (const val of def.values) if (val === void 0) {
		if (ctx.unrepresentable === "throw") throw new Error("Literal `undefined` cannot be represented in JSON Schema");
	} else if (typeof val === "bigint") if (ctx.unrepresentable === "throw") throw new Error("BigInt literals cannot be represented in JSON Schema");
	else vals.push(Number(val));
	else vals.push(val);
	if (vals.length === 0) {} else if (vals.length === 1) {
		const val = vals[0];
		json.type = val === null ? "null" : typeof val;
		if (ctx.target === "draft-04" || ctx.target === "openapi-3.0") json.enum = [val];
		else json.const = val;
	} else {
		if (vals.every((v) => typeof v === "number")) json.type = "number";
		if (vals.every((v) => typeof v === "string")) json.type = "string";
		if (vals.every((v) => typeof v === "boolean")) json.type = "boolean";
		if (vals.every((v) => v === null)) json.type = "null";
		json.enum = vals;
	}
};
var nanProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("NaN cannot be represented in JSON Schema");
};
var templateLiteralProcessor = (schema, _ctx, json, _params) => {
	const _json = json;
	const pattern = schema._zod.pattern;
	if (!pattern) throw new Error("Pattern not found in template literal");
	_json.type = "string";
	_json.pattern = pattern.source;
};
var fileProcessor = (schema, _ctx, json, _params) => {
	const _json = json;
	const file = {
		type: "string",
		format: "binary",
		contentEncoding: "binary"
	};
	const { minimum, maximum, mime } = schema._zod.bag;
	if (minimum !== void 0) file.minLength = minimum;
	if (maximum !== void 0) file.maxLength = maximum;
	if (mime) if (mime.length === 1) {
		file.contentMediaType = mime[0];
		Object.assign(_json, file);
	} else {
		Object.assign(_json, file);
		_json.anyOf = mime.map((m) => ({ contentMediaType: m }));
	}
	else Object.assign(_json, file);
};
var successProcessor = (_schema, _ctx, json, _params) => {
	json.type = "boolean";
};
var customProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("Custom types cannot be represented in JSON Schema");
};
var functionProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("Function types cannot be represented in JSON Schema");
};
var transformProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("Transforms cannot be represented in JSON Schema");
};
var mapProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("Map cannot be represented in JSON Schema");
};
var setProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("Set cannot be represented in JSON Schema");
};
var arrayProcessor = (schema, ctx, _json, params) => {
	const json = _json;
	const def = schema._zod.def;
	const { minimum, maximum } = schema._zod.bag;
	if (typeof minimum === "number") json.minItems = minimum;
	if (typeof maximum === "number") json.maxItems = maximum;
	json.type = "array";
	json.items = process(def.element, ctx, {
		...params,
		path: [...params.path, "items"]
	});
};
var objectProcessor = (schema, ctx, _json, params) => {
	const json = _json;
	const def = schema._zod.def;
	json.type = "object";
	json.properties = {};
	const shape = def.shape;
	for (const key in shape) json.properties[key] = process(shape[key], ctx, {
		...params,
		path: [
			...params.path,
			"properties",
			key
		]
	});
	const allKeys = new Set(Object.keys(shape));
	const requiredKeys = new Set([...allKeys].filter((key) => {
		const v = def.shape[key]._zod;
		if (ctx.io === "input") return v.optin === void 0;
		else return v.optout === void 0;
	}));
	if (requiredKeys.size > 0) json.required = Array.from(requiredKeys);
	if (def.catchall?._zod.def.type === "never") json.additionalProperties = false;
	else if (!def.catchall) {
		if (ctx.io === "output") json.additionalProperties = false;
	} else if (def.catchall) json.additionalProperties = process(def.catchall, ctx, {
		...params,
		path: [...params.path, "additionalProperties"]
	});
};
var unionProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	const isExclusive = def.inclusive === false;
	const options = def.options.map((x, i) => process(x, ctx, {
		...params,
		path: [
			...params.path,
			isExclusive ? "oneOf" : "anyOf",
			i
		]
	}));
	if (isExclusive) json.oneOf = options;
	else json.anyOf = options;
};
var intersectionProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	const a = process(def.left, ctx, {
		...params,
		path: [
			...params.path,
			"allOf",
			0
		]
	});
	const b = process(def.right, ctx, {
		...params,
		path: [
			...params.path,
			"allOf",
			1
		]
	});
	const isSimpleIntersection = (val) => "allOf" in val && Object.keys(val).length === 1;
	json.allOf = [...isSimpleIntersection(a) ? a.allOf : [a], ...isSimpleIntersection(b) ? b.allOf : [b]];
};
var tupleProcessor = (schema, ctx, _json, params) => {
	const json = _json;
	const def = schema._zod.def;
	json.type = "array";
	const prefixPath = ctx.target === "draft-2020-12" ? "prefixItems" : "items";
	const restPath = ctx.target === "draft-2020-12" ? "items" : ctx.target === "openapi-3.0" ? "items" : "additionalItems";
	const prefixItems = def.items.map((x, i) => process(x, ctx, {
		...params,
		path: [
			...params.path,
			prefixPath,
			i
		]
	}));
	const rest = def.rest ? process(def.rest, ctx, {
		...params,
		path: [
			...params.path,
			restPath,
			...ctx.target === "openapi-3.0" ? [def.items.length] : []
		]
	}) : null;
	if (ctx.target === "draft-2020-12") {
		json.prefixItems = prefixItems;
		if (rest) json.items = rest;
	} else if (ctx.target === "openapi-3.0") {
		json.items = { anyOf: prefixItems };
		if (rest) json.items.anyOf.push(rest);
		json.minItems = prefixItems.length;
		if (!rest) json.maxItems = prefixItems.length;
	} else {
		json.items = prefixItems;
		if (rest) json.additionalItems = rest;
	}
	const { minimum, maximum } = schema._zod.bag;
	if (typeof minimum === "number") json.minItems = minimum;
	if (typeof maximum === "number") json.maxItems = maximum;
};
var recordProcessor = (schema, ctx, _json, params) => {
	const json = _json;
	const def = schema._zod.def;
	json.type = "object";
	const keyType = def.keyType;
	const patterns = keyType._zod.bag?.patterns;
	if (def.mode === "loose" && patterns && patterns.size > 0) {
		const valueSchema = process(def.valueType, ctx, {
			...params,
			path: [
				...params.path,
				"patternProperties",
				"*"
			]
		});
		json.patternProperties = {};
		for (const pattern of patterns) json.patternProperties[pattern.source] = valueSchema;
	} else {
		if (ctx.target === "draft-07" || ctx.target === "draft-2020-12") json.propertyNames = process(def.keyType, ctx, {
			...params,
			path: [...params.path, "propertyNames"]
		});
		json.additionalProperties = process(def.valueType, ctx, {
			...params,
			path: [...params.path, "additionalProperties"]
		});
	}
	const keyValues = keyType._zod.values;
	if (keyValues) {
		const validKeyValues = [...keyValues].filter((v) => typeof v === "string" || typeof v === "number");
		if (validKeyValues.length > 0) json.required = validKeyValues;
	}
};
var nullableProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	const inner = process(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	if (ctx.target === "openapi-3.0") {
		seen.ref = def.innerType;
		json.nullable = true;
	} else json.anyOf = [inner, { type: "null" }];
};
var nonoptionalProcessor = (schema, ctx, _json, params) => {
	const def = schema._zod.def;
	process(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
};
var defaultProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	process(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
	json.default = JSON.parse(JSON.stringify(def.defaultValue));
};
var prefaultProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	process(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
	if (ctx.io === "input") json._prefault = JSON.parse(JSON.stringify(def.defaultValue));
};
var catchProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	process(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
	let catchValue;
	try {
		catchValue = def.catchValue(void 0);
	} catch {
		throw new Error("Dynamic catch values are not supported in JSON Schema");
	}
	json.default = catchValue;
};
var pipeProcessor = (schema, ctx, _json, params) => {
	const def = schema._zod.def;
	const inIsTransform = def.in._zod.traits.has("$ZodTransform");
	const innerType = ctx.io === "input" ? inIsTransform ? def.out : def.in : def.out;
	process(innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = innerType;
};
var readonlyProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	process(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
	json.readOnly = true;
};
var promiseProcessor = (schema, ctx, _json, params) => {
	const def = schema._zod.def;
	process(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
};
var optionalProcessor = (schema, ctx, _json, params) => {
	const def = schema._zod.def;
	process(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
};
var lazyProcessor = (schema, ctx, _json, params) => {
	const innerType = schema._zod.innerType;
	process(innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = innerType;
};
var allProcessors = {
	string: stringProcessor,
	number: numberProcessor,
	boolean: booleanProcessor,
	bigint: bigintProcessor,
	symbol: symbolProcessor,
	null: nullProcessor,
	undefined: undefinedProcessor,
	void: voidProcessor,
	never: neverProcessor,
	any: anyProcessor,
	unknown: unknownProcessor,
	date: dateProcessor,
	enum: enumProcessor,
	literal: literalProcessor,
	nan: nanProcessor,
	template_literal: templateLiteralProcessor,
	file: fileProcessor,
	success: successProcessor,
	custom: customProcessor,
	function: functionProcessor,
	transform: transformProcessor,
	map: mapProcessor,
	set: setProcessor,
	array: arrayProcessor,
	object: objectProcessor,
	union: unionProcessor,
	intersection: intersectionProcessor,
	tuple: tupleProcessor,
	record: recordProcessor,
	nullable: nullableProcessor,
	nonoptional: nonoptionalProcessor,
	default: defaultProcessor,
	prefault: prefaultProcessor,
	catch: catchProcessor,
	pipe: pipeProcessor,
	readonly: readonlyProcessor,
	promise: promiseProcessor,
	optional: optionalProcessor,
	lazy: lazyProcessor
};
function toJSONSchema(input, params) {
	if ("_idmap" in input) {
		const registry = input;
		const ctx = initializeContext({
			...params,
			processors: allProcessors
		});
		const defs = {};
		for (const entry of registry._idmap.entries()) {
			const [_, schema] = entry;
			process(schema, ctx);
		}
		const schemas = {};
		ctx.external = {
			registry,
			uri: params?.uri,
			defs
		};
		for (const entry of registry._idmap.entries()) {
			const [key, schema] = entry;
			extractDefs(ctx, schema);
			schemas[key] = finalize(ctx, schema);
		}
		if (Object.keys(defs).length > 0) schemas.__shared = { [ctx.target === "draft-2020-12" ? "$defs" : "definitions"]: defs };
		return { schemas };
	}
	const ctx = initializeContext({
		...params,
		processors: allProcessors
	});
	process(input, ctx);
	extractDefs(ctx, input);
	return finalize(ctx, input);
}
//#endregion
//#region ../../node_modules/zod/v4/classic/iso.js
var ZodISODateTime = /*@__PURE__*/ $constructor("ZodISODateTime", (inst, def) => {
	$ZodISODateTime.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function datetime(params) {
	return /* @__PURE__ */ _isoDateTime(ZodISODateTime, params);
}
var ZodISODate = /*@__PURE__*/ $constructor("ZodISODate", (inst, def) => {
	$ZodISODate.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function date(params) {
	return /* @__PURE__ */ _isoDate(ZodISODate, params);
}
var ZodISOTime = /*@__PURE__*/ $constructor("ZodISOTime", (inst, def) => {
	$ZodISOTime.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function time(params) {
	return /* @__PURE__ */ _isoTime(ZodISOTime, params);
}
var ZodISODuration = /*@__PURE__*/ $constructor("ZodISODuration", (inst, def) => {
	$ZodISODuration.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function duration(params) {
	return /* @__PURE__ */ _isoDuration(ZodISODuration, params);
}
//#endregion
//#region ../../node_modules/zod/v4/classic/errors.js
var initializer = (inst, issues) => {
	$ZodError.init(inst, issues);
	inst.name = "ZodError";
	Object.defineProperties(inst, {
		format: { value: (mapper) => formatError(inst, mapper) },
		flatten: { value: (mapper) => flattenError(inst, mapper) },
		addIssue: { value: (issue) => {
			inst.issues.push(issue);
			inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
		} },
		addIssues: { value: (issues) => {
			inst.issues.push(...issues);
			inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
		} },
		isEmpty: { get() {
			return inst.issues.length === 0;
		} }
	});
};
var ZodRealError = /*@__PURE__*/ $constructor("ZodError", initializer, { Parent: Error });
//#endregion
//#region ../../node_modules/zod/v4/classic/parse.js
var parse = /* @__PURE__ */ _parse(ZodRealError);
var parseAsync = /* @__PURE__ */ _parseAsync(ZodRealError);
var safeParse = /* @__PURE__ */ _safeParse(ZodRealError);
var safeParseAsync = /* @__PURE__ */ _safeParseAsync(ZodRealError);
var encode = /* @__PURE__ */ _encode(ZodRealError);
var decode = /* @__PURE__ */ _decode(ZodRealError);
var encodeAsync = /* @__PURE__ */ _encodeAsync(ZodRealError);
var decodeAsync = /* @__PURE__ */ _decodeAsync(ZodRealError);
var safeEncode = /* @__PURE__ */ _safeEncode(ZodRealError);
var safeDecode = /* @__PURE__ */ _safeDecode(ZodRealError);
var safeEncodeAsync = /* @__PURE__ */ _safeEncodeAsync(ZodRealError);
var safeDecodeAsync = /* @__PURE__ */ _safeDecodeAsync(ZodRealError);
//#endregion
//#region ../../node_modules/zod/v4/classic/schemas.js
var _installedGroups = /* @__PURE__ */ new WeakMap();
function _installLazyMethods(inst, group, methods) {
	const proto = Object.getPrototypeOf(inst);
	let installed = _installedGroups.get(proto);
	if (!installed) {
		installed = /* @__PURE__ */ new Set();
		_installedGroups.set(proto, installed);
	}
	if (installed.has(group)) return;
	installed.add(group);
	for (const key in methods) {
		const fn = methods[key];
		Object.defineProperty(proto, key, {
			configurable: true,
			enumerable: false,
			get() {
				const bound = fn.bind(this);
				Object.defineProperty(this, key, {
					configurable: true,
					writable: true,
					enumerable: true,
					value: bound
				});
				return bound;
			},
			set(v) {
				Object.defineProperty(this, key, {
					configurable: true,
					writable: true,
					enumerable: true,
					value: v
				});
			}
		});
	}
}
var ZodType = /*@__PURE__*/ $constructor("ZodType", (inst, def) => {
	$ZodType.init(inst, def);
	Object.assign(inst["~standard"], { jsonSchema: {
		input: createStandardJSONSchemaMethod(inst, "input"),
		output: createStandardJSONSchemaMethod(inst, "output")
	} });
	inst.toJSONSchema = createToJSONSchemaMethod(inst, {});
	inst.def = def;
	inst.type = def.type;
	Object.defineProperty(inst, "_def", { value: def });
	inst.parse = (data, params) => parse(inst, data, params, { callee: inst.parse });
	inst.safeParse = (data, params) => safeParse(inst, data, params);
	inst.parseAsync = async (data, params) => parseAsync(inst, data, params, { callee: inst.parseAsync });
	inst.safeParseAsync = async (data, params) => safeParseAsync(inst, data, params);
	inst.spa = inst.safeParseAsync;
	inst.encode = (data, params) => encode(inst, data, params);
	inst.decode = (data, params) => decode(inst, data, params);
	inst.encodeAsync = async (data, params) => encodeAsync(inst, data, params);
	inst.decodeAsync = async (data, params) => decodeAsync(inst, data, params);
	inst.safeEncode = (data, params) => safeEncode(inst, data, params);
	inst.safeDecode = (data, params) => safeDecode(inst, data, params);
	inst.safeEncodeAsync = async (data, params) => safeEncodeAsync(inst, data, params);
	inst.safeDecodeAsync = async (data, params) => safeDecodeAsync(inst, data, params);
	_installLazyMethods(inst, "ZodType", {
		check(...chks) {
			const def = this.def;
			return this.clone(mergeDefs(def, { checks: [...def.checks ?? [], ...chks.map((ch) => typeof ch === "function" ? { _zod: {
				check: ch,
				def: { check: "custom" },
				onattach: []
			} } : ch)] }), { parent: true });
		},
		with(...chks) {
			return this.check(...chks);
		},
		clone(def, params) {
			return clone(this, def, params);
		},
		brand() {
			return this;
		},
		register(reg, meta) {
			reg.add(this, meta);
			return this;
		},
		refine(check, params) {
			return this.check(refine(check, params));
		},
		superRefine(refinement, params) {
			return this.check(superRefine(refinement, params));
		},
		overwrite(fn) {
			return this.check(/* @__PURE__ */ _overwrite(fn));
		},
		optional() {
			return optional(this);
		},
		exactOptional() {
			return exactOptional(this);
		},
		nullable() {
			return nullable(this);
		},
		nullish() {
			return optional(nullable(this));
		},
		nonoptional(params) {
			return nonoptional(this, params);
		},
		array() {
			return array(this);
		},
		or(arg) {
			return union([this, arg]);
		},
		and(arg) {
			return intersection(this, arg);
		},
		transform(tx) {
			return pipe(this, transform(tx));
		},
		default(d) {
			return _default(this, d);
		},
		prefault(d) {
			return prefault(this, d);
		},
		catch(params) {
			return _catch(this, params);
		},
		pipe(target) {
			return pipe(this, target);
		},
		readonly() {
			return readonly(this);
		},
		describe(description) {
			const cl = this.clone();
			globalRegistry.add(cl, { description });
			return cl;
		},
		meta(...args) {
			if (args.length === 0) return globalRegistry.get(this);
			const cl = this.clone();
			globalRegistry.add(cl, args[0]);
			return cl;
		},
		isOptional() {
			return this.safeParse(void 0).success;
		},
		isNullable() {
			return this.safeParse(null).success;
		},
		apply(fn) {
			return fn(this);
		}
	});
	Object.defineProperty(inst, "description", {
		get() {
			return globalRegistry.get(inst)?.description;
		},
		configurable: true
	});
	return inst;
});
/** @internal */
var _ZodString = /*@__PURE__*/ $constructor("_ZodString", (inst, def) => {
	$ZodString.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => stringProcessor(inst, ctx, json, params);
	const bag = inst._zod.bag;
	inst.format = bag.format ?? null;
	inst.minLength = bag.minimum ?? null;
	inst.maxLength = bag.maximum ?? null;
	_installLazyMethods(inst, "_ZodString", {
		regex(...args) {
			return this.check(/* @__PURE__ */ _regex(...args));
		},
		includes(...args) {
			return this.check(/* @__PURE__ */ _includes(...args));
		},
		startsWith(...args) {
			return this.check(/* @__PURE__ */ _startsWith(...args));
		},
		endsWith(...args) {
			return this.check(/* @__PURE__ */ _endsWith(...args));
		},
		min(...args) {
			return this.check(/* @__PURE__ */ _minLength(...args));
		},
		max(...args) {
			return this.check(/* @__PURE__ */ _maxLength(...args));
		},
		length(...args) {
			return this.check(/* @__PURE__ */ _length(...args));
		},
		nonempty(...args) {
			return this.check(/* @__PURE__ */ _minLength(1, ...args));
		},
		lowercase(params) {
			return this.check(/* @__PURE__ */ _lowercase(params));
		},
		uppercase(params) {
			return this.check(/* @__PURE__ */ _uppercase(params));
		},
		trim() {
			return this.check(/* @__PURE__ */ _trim());
		},
		normalize(...args) {
			return this.check(/* @__PURE__ */ _normalize(...args));
		},
		toLowerCase() {
			return this.check(/* @__PURE__ */ _toLowerCase());
		},
		toUpperCase() {
			return this.check(/* @__PURE__ */ _toUpperCase());
		},
		slugify() {
			return this.check(/* @__PURE__ */ _slugify());
		}
	});
});
var ZodString = /*@__PURE__*/ $constructor("ZodString", (inst, def) => {
	$ZodString.init(inst, def);
	_ZodString.init(inst, def);
	inst.email = (params) => inst.check(/* @__PURE__ */ _email(ZodEmail, params));
	inst.url = (params) => inst.check(/* @__PURE__ */ _url(ZodURL, params));
	inst.jwt = (params) => inst.check(/* @__PURE__ */ _jwt(ZodJWT, params));
	inst.emoji = (params) => inst.check(/* @__PURE__ */ _emoji(ZodEmoji, params));
	inst.guid = (params) => inst.check(/* @__PURE__ */ _guid(ZodGUID, params));
	inst.uuid = (params) => inst.check(/* @__PURE__ */ _uuid(ZodUUID, params));
	inst.uuidv4 = (params) => inst.check(/* @__PURE__ */ _uuidv4(ZodUUID, params));
	inst.uuidv6 = (params) => inst.check(/* @__PURE__ */ _uuidv6(ZodUUID, params));
	inst.uuidv7 = (params) => inst.check(/* @__PURE__ */ _uuidv7(ZodUUID, params));
	inst.nanoid = (params) => inst.check(/* @__PURE__ */ _nanoid(ZodNanoID, params));
	inst.guid = (params) => inst.check(/* @__PURE__ */ _guid(ZodGUID, params));
	inst.cuid = (params) => inst.check(/* @__PURE__ */ _cuid(ZodCUID, params));
	inst.cuid2 = (params) => inst.check(/* @__PURE__ */ _cuid2(ZodCUID2, params));
	inst.ulid = (params) => inst.check(/* @__PURE__ */ _ulid(ZodULID, params));
	inst.base64 = (params) => inst.check(/* @__PURE__ */ _base64(ZodBase64, params));
	inst.base64url = (params) => inst.check(/* @__PURE__ */ _base64url(ZodBase64URL, params));
	inst.xid = (params) => inst.check(/* @__PURE__ */ _xid(ZodXID, params));
	inst.ksuid = (params) => inst.check(/* @__PURE__ */ _ksuid(ZodKSUID, params));
	inst.ipv4 = (params) => inst.check(/* @__PURE__ */ _ipv4(ZodIPv4, params));
	inst.ipv6 = (params) => inst.check(/* @__PURE__ */ _ipv6(ZodIPv6, params));
	inst.cidrv4 = (params) => inst.check(/* @__PURE__ */ _cidrv4(ZodCIDRv4, params));
	inst.cidrv6 = (params) => inst.check(/* @__PURE__ */ _cidrv6(ZodCIDRv6, params));
	inst.e164 = (params) => inst.check(/* @__PURE__ */ _e164(ZodE164, params));
	inst.datetime = (params) => inst.check(datetime(params));
	inst.date = (params) => inst.check(date(params));
	inst.time = (params) => inst.check(time(params));
	inst.duration = (params) => inst.check(duration(params));
});
function string(params) {
	return /* @__PURE__ */ _string(ZodString, params);
}
var ZodStringFormat = /*@__PURE__*/ $constructor("ZodStringFormat", (inst, def) => {
	$ZodStringFormat.init(inst, def);
	_ZodString.init(inst, def);
});
var ZodEmail = /*@__PURE__*/ $constructor("ZodEmail", (inst, def) => {
	$ZodEmail.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodGUID = /*@__PURE__*/ $constructor("ZodGUID", (inst, def) => {
	$ZodGUID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodUUID = /*@__PURE__*/ $constructor("ZodUUID", (inst, def) => {
	$ZodUUID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodURL = /*@__PURE__*/ $constructor("ZodURL", (inst, def) => {
	$ZodURL.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodEmoji = /*@__PURE__*/ $constructor("ZodEmoji", (inst, def) => {
	$ZodEmoji.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodNanoID = /*@__PURE__*/ $constructor("ZodNanoID", (inst, def) => {
	$ZodNanoID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
/**
* @deprecated CUID v1 is deprecated by its authors due to information leakage
* (timestamps embedded in the id). Use {@link ZodCUID2} instead.
* See https://github.com/paralleldrive/cuid.
*/
var ZodCUID = /*@__PURE__*/ $constructor("ZodCUID", (inst, def) => {
	$ZodCUID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodCUID2 = /*@__PURE__*/ $constructor("ZodCUID2", (inst, def) => {
	$ZodCUID2.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodULID = /*@__PURE__*/ $constructor("ZodULID", (inst, def) => {
	$ZodULID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodXID = /*@__PURE__*/ $constructor("ZodXID", (inst, def) => {
	$ZodXID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodKSUID = /*@__PURE__*/ $constructor("ZodKSUID", (inst, def) => {
	$ZodKSUID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodIPv4 = /*@__PURE__*/ $constructor("ZodIPv4", (inst, def) => {
	$ZodIPv4.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodIPv6 = /*@__PURE__*/ $constructor("ZodIPv6", (inst, def) => {
	$ZodIPv6.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodCIDRv4 = /*@__PURE__*/ $constructor("ZodCIDRv4", (inst, def) => {
	$ZodCIDRv4.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodCIDRv6 = /*@__PURE__*/ $constructor("ZodCIDRv6", (inst, def) => {
	$ZodCIDRv6.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodBase64 = /*@__PURE__*/ $constructor("ZodBase64", (inst, def) => {
	$ZodBase64.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodBase64URL = /*@__PURE__*/ $constructor("ZodBase64URL", (inst, def) => {
	$ZodBase64URL.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodE164 = /*@__PURE__*/ $constructor("ZodE164", (inst, def) => {
	$ZodE164.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodJWT = /*@__PURE__*/ $constructor("ZodJWT", (inst, def) => {
	$ZodJWT.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodNumber = /*@__PURE__*/ $constructor("ZodNumber", (inst, def) => {
	$ZodNumber.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => numberProcessor(inst, ctx, json, params);
	_installLazyMethods(inst, "ZodNumber", {
		gt(value, params) {
			return this.check(/* @__PURE__ */ _gt(value, params));
		},
		gte(value, params) {
			return this.check(/* @__PURE__ */ _gte(value, params));
		},
		min(value, params) {
			return this.check(/* @__PURE__ */ _gte(value, params));
		},
		lt(value, params) {
			return this.check(/* @__PURE__ */ _lt(value, params));
		},
		lte(value, params) {
			return this.check(/* @__PURE__ */ _lte(value, params));
		},
		max(value, params) {
			return this.check(/* @__PURE__ */ _lte(value, params));
		},
		int(params) {
			return this.check(int(params));
		},
		safe(params) {
			return this.check(int(params));
		},
		positive(params) {
			return this.check(/* @__PURE__ */ _gt(0, params));
		},
		nonnegative(params) {
			return this.check(/* @__PURE__ */ _gte(0, params));
		},
		negative(params) {
			return this.check(/* @__PURE__ */ _lt(0, params));
		},
		nonpositive(params) {
			return this.check(/* @__PURE__ */ _lte(0, params));
		},
		multipleOf(value, params) {
			return this.check(/* @__PURE__ */ _multipleOf(value, params));
		},
		step(value, params) {
			return this.check(/* @__PURE__ */ _multipleOf(value, params));
		},
		finite() {
			return this;
		}
	});
	const bag = inst._zod.bag;
	inst.minValue = Math.max(bag.minimum ?? Number.NEGATIVE_INFINITY, bag.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null;
	inst.maxValue = Math.min(bag.maximum ?? Number.POSITIVE_INFINITY, bag.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null;
	inst.isInt = (bag.format ?? "").includes("int") || Number.isSafeInteger(bag.multipleOf ?? .5);
	inst.isFinite = true;
	inst.format = bag.format ?? null;
});
function number(params) {
	return /* @__PURE__ */ _number(ZodNumber, params);
}
var ZodNumberFormat = /*@__PURE__*/ $constructor("ZodNumberFormat", (inst, def) => {
	$ZodNumberFormat.init(inst, def);
	ZodNumber.init(inst, def);
});
function int(params) {
	return /* @__PURE__ */ _int(ZodNumberFormat, params);
}
var ZodBoolean = /*@__PURE__*/ $constructor("ZodBoolean", (inst, def) => {
	$ZodBoolean.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => booleanProcessor(inst, ctx, json, params);
});
function boolean(params) {
	return /* @__PURE__ */ _boolean(ZodBoolean, params);
}
var ZodUnknown = /*@__PURE__*/ $constructor("ZodUnknown", (inst, def) => {
	$ZodUnknown.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => void 0;
});
function unknown() {
	return /* @__PURE__ */ _unknown(ZodUnknown);
}
var ZodNever = /*@__PURE__*/ $constructor("ZodNever", (inst, def) => {
	$ZodNever.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => neverProcessor(inst, ctx, json, params);
});
function never(params) {
	return /* @__PURE__ */ _never(ZodNever, params);
}
var ZodArray = /*@__PURE__*/ $constructor("ZodArray", (inst, def) => {
	$ZodArray.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => arrayProcessor(inst, ctx, json, params);
	inst.element = def.element;
	_installLazyMethods(inst, "ZodArray", {
		min(n, params) {
			return this.check(/* @__PURE__ */ _minLength(n, params));
		},
		nonempty(params) {
			return this.check(/* @__PURE__ */ _minLength(1, params));
		},
		max(n, params) {
			return this.check(/* @__PURE__ */ _maxLength(n, params));
		},
		length(n, params) {
			return this.check(/* @__PURE__ */ _length(n, params));
		},
		unwrap() {
			return this.element;
		}
	});
});
function array(element, params) {
	return /* @__PURE__ */ _array(ZodArray, element, params);
}
var ZodObject = /*@__PURE__*/ $constructor("ZodObject", (inst, def) => {
	$ZodObjectJIT.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => objectProcessor(inst, ctx, json, params);
	defineLazy(inst, "shape", () => {
		return def.shape;
	});
	_installLazyMethods(inst, "ZodObject", {
		keyof() {
			return _enum(Object.keys(this._zod.def.shape));
		},
		catchall(catchall) {
			return this.clone({
				...this._zod.def,
				catchall
			});
		},
		passthrough() {
			return this.clone({
				...this._zod.def,
				catchall: unknown()
			});
		},
		loose() {
			return this.clone({
				...this._zod.def,
				catchall: unknown()
			});
		},
		strict() {
			return this.clone({
				...this._zod.def,
				catchall: never()
			});
		},
		strip() {
			return this.clone({
				...this._zod.def,
				catchall: void 0
			});
		},
		extend(incoming) {
			return extend(this, incoming);
		},
		safeExtend(incoming) {
			return safeExtend(this, incoming);
		},
		merge(other) {
			return merge(this, other);
		},
		pick(mask) {
			return pick(this, mask);
		},
		omit(mask) {
			return omit(this, mask);
		},
		partial(...args) {
			return partial(ZodOptional, this, args[0]);
		},
		required(...args) {
			return required(ZodNonOptional, this, args[0]);
		}
	});
});
function object(shape, params) {
	return new ZodObject({
		type: "object",
		shape: shape ?? {},
		...normalizeParams(params)
	});
}
var ZodUnion = /*@__PURE__*/ $constructor("ZodUnion", (inst, def) => {
	$ZodUnion.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => unionProcessor(inst, ctx, json, params);
	inst.options = def.options;
});
function union(options, params) {
	return new ZodUnion({
		type: "union",
		options,
		...normalizeParams(params)
	});
}
var ZodIntersection = /*@__PURE__*/ $constructor("ZodIntersection", (inst, def) => {
	$ZodIntersection.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => intersectionProcessor(inst, ctx, json, params);
});
function intersection(left, right) {
	return new ZodIntersection({
		type: "intersection",
		left,
		right
	});
}
var ZodEnum = /*@__PURE__*/ $constructor("ZodEnum", (inst, def) => {
	$ZodEnum.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => enumProcessor(inst, ctx, json, params);
	inst.enum = def.entries;
	inst.options = Object.values(def.entries);
	const keys = new Set(Object.keys(def.entries));
	inst.extract = (values, params) => {
		const newEntries = {};
		for (const value of values) if (keys.has(value)) newEntries[value] = def.entries[value];
		else throw new Error(`Key ${value} not found in enum`);
		return new ZodEnum({
			...def,
			checks: [],
			...normalizeParams(params),
			entries: newEntries
		});
	};
	inst.exclude = (values, params) => {
		const newEntries = { ...def.entries };
		for (const value of values) if (keys.has(value)) delete newEntries[value];
		else throw new Error(`Key ${value} not found in enum`);
		return new ZodEnum({
			...def,
			checks: [],
			...normalizeParams(params),
			entries: newEntries
		});
	};
});
function _enum(values, params) {
	return new ZodEnum({
		type: "enum",
		entries: Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values,
		...normalizeParams(params)
	});
}
var ZodTransform = /*@__PURE__*/ $constructor("ZodTransform", (inst, def) => {
	$ZodTransform.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => transformProcessor(inst, ctx, json, params);
	inst._zod.parse = (payload, _ctx) => {
		if (_ctx.direction === "backward") throw new $ZodEncodeError(inst.constructor.name);
		payload.addIssue = (issue$1) => {
			if (typeof issue$1 === "string") payload.issues.push(issue(issue$1, payload.value, def));
			else {
				const _issue = issue$1;
				if (_issue.fatal) _issue.continue = false;
				_issue.code ?? (_issue.code = "custom");
				_issue.input ?? (_issue.input = payload.value);
				_issue.inst ?? (_issue.inst = inst);
				payload.issues.push(issue(_issue));
			}
		};
		const output = def.transform(payload.value, payload);
		if (output instanceof Promise) return output.then((output) => {
			payload.value = output;
			payload.fallback = true;
			return payload;
		});
		payload.value = output;
		payload.fallback = true;
		return payload;
	};
});
function transform(fn) {
	return new ZodTransform({
		type: "transform",
		transform: fn
	});
}
var ZodOptional = /*@__PURE__*/ $constructor("ZodOptional", (inst, def) => {
	$ZodOptional.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function optional(innerType) {
	return new ZodOptional({
		type: "optional",
		innerType
	});
}
var ZodExactOptional = /*@__PURE__*/ $constructor("ZodExactOptional", (inst, def) => {
	$ZodExactOptional.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function exactOptional(innerType) {
	return new ZodExactOptional({
		type: "optional",
		innerType
	});
}
var ZodNullable = /*@__PURE__*/ $constructor("ZodNullable", (inst, def) => {
	$ZodNullable.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => nullableProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function nullable(innerType) {
	return new ZodNullable({
		type: "nullable",
		innerType
	});
}
var ZodDefault = /*@__PURE__*/ $constructor("ZodDefault", (inst, def) => {
	$ZodDefault.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => defaultProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
	inst.removeDefault = inst.unwrap;
});
function _default(innerType, defaultValue) {
	return new ZodDefault({
		type: "default",
		innerType,
		get defaultValue() {
			return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
		}
	});
}
var ZodPrefault = /*@__PURE__*/ $constructor("ZodPrefault", (inst, def) => {
	$ZodPrefault.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => prefaultProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function prefault(innerType, defaultValue) {
	return new ZodPrefault({
		type: "prefault",
		innerType,
		get defaultValue() {
			return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
		}
	});
}
var ZodNonOptional = /*@__PURE__*/ $constructor("ZodNonOptional", (inst, def) => {
	$ZodNonOptional.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => nonoptionalProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function nonoptional(innerType, params) {
	return new ZodNonOptional({
		type: "nonoptional",
		innerType,
		...normalizeParams(params)
	});
}
var ZodCatch = /*@__PURE__*/ $constructor("ZodCatch", (inst, def) => {
	$ZodCatch.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => catchProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
	inst.removeCatch = inst.unwrap;
});
function _catch(innerType, catchValue) {
	return new ZodCatch({
		type: "catch",
		innerType,
		catchValue: typeof catchValue === "function" ? catchValue : () => catchValue
	});
}
var ZodPipe = /*@__PURE__*/ $constructor("ZodPipe", (inst, def) => {
	$ZodPipe.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => pipeProcessor(inst, ctx, json, params);
	inst.in = def.in;
	inst.out = def.out;
});
function pipe(in_, out) {
	return new ZodPipe({
		type: "pipe",
		in: in_,
		out
	});
}
var ZodReadonly = /*@__PURE__*/ $constructor("ZodReadonly", (inst, def) => {
	$ZodReadonly.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => readonlyProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function readonly(innerType) {
	return new ZodReadonly({
		type: "readonly",
		innerType
	});
}
var ZodCustom = /*@__PURE__*/ $constructor("ZodCustom", (inst, def) => {
	$ZodCustom.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => customProcessor(inst, ctx, json, params);
});
function refine(fn, _params = {}) {
	return /* @__PURE__ */ _refine(ZodCustom, fn, _params);
}
function superRefine(fn, params) {
	return /* @__PURE__ */ _superRefine(fn, params);
}
//#endregion
//#region ../llms/src/errors.ts
/**
* Error types and error handling for LLM invocations.
*/
var InvokeErrorTypes = {
	NETWORK_ERROR: "network_error",
	RATE_LIMIT: "rate_limit",
	SERVER_ERROR: "server_error",
	NO_TOOL_CALL: "no_tool_call",
	INVALID_TOOL_ARGS: "invalid_tool_args",
	TOOL_EXECUTION_ERROR: "tool_execution_error",
	INVALID_RESPONSE: "invalid_response",
	INVALID_SCHEMA: "invalid_schema",
	UNKNOWN: "unknown",
	CONFIG_ERROR: "config_error",
	AUTH_ERROR: "auth_error",
	CONTEXT_LENGTH: "context_length",
	CONTENT_FILTER: "content_filter"
};
var RETRYABLE_TYPES = [
	InvokeErrorTypes.NETWORK_ERROR,
	InvokeErrorTypes.RATE_LIMIT,
	InvokeErrorTypes.SERVER_ERROR,
	InvokeErrorTypes.NO_TOOL_CALL,
	InvokeErrorTypes.INVALID_TOOL_ARGS,
	InvokeErrorTypes.TOOL_EXECUTION_ERROR,
	InvokeErrorTypes.INVALID_RESPONSE,
	InvokeErrorTypes.INVALID_SCHEMA,
	InvokeErrorTypes.UNKNOWN
];
var InvokeError = class extends Error {
	type;
	retryable;
	statusCode;
	rawError;
	rawResponse;
	constructor(type, message, rawError, rawResponse) {
		super(message);
		this.name = "InvokeError";
		this.type = type;
		this.retryable = RETRYABLE_TYPES.includes(type);
		this.rawError = rawError;
		this.rawResponse = rawResponse;
	}
};
//#endregion
//#region ../../node_modules/chalk/source/vendor/ansi-styles/index.js
var ANSI_BACKGROUND_OFFSET = 10;
var wrapAnsi16 = (offset = 0) => (code) => `\u001B[${code + offset}m`;
var wrapAnsi256 = (offset = 0) => (code) => `\u001B[${38 + offset};5;${code}m`;
var wrapAnsi16m = (offset = 0) => (red, green, blue) => `\u001B[${38 + offset};2;${red};${green};${blue}m`;
var styles$1 = {
	modifier: {
		reset: [0, 0],
		bold: [1, 22],
		dim: [2, 22],
		italic: [3, 23],
		underline: [4, 24],
		overline: [53, 55],
		inverse: [7, 27],
		hidden: [8, 28],
		strikethrough: [9, 29]
	},
	color: {
		black: [30, 39],
		red: [31, 39],
		green: [32, 39],
		yellow: [33, 39],
		blue: [34, 39],
		magenta: [35, 39],
		cyan: [36, 39],
		white: [37, 39],
		blackBright: [90, 39],
		gray: [90, 39],
		grey: [90, 39],
		redBright: [91, 39],
		greenBright: [92, 39],
		yellowBright: [93, 39],
		blueBright: [94, 39],
		magentaBright: [95, 39],
		cyanBright: [96, 39],
		whiteBright: [97, 39]
	},
	bgColor: {
		bgBlack: [40, 49],
		bgRed: [41, 49],
		bgGreen: [42, 49],
		bgYellow: [43, 49],
		bgBlue: [44, 49],
		bgMagenta: [45, 49],
		bgCyan: [46, 49],
		bgWhite: [47, 49],
		bgBlackBright: [100, 49],
		bgGray: [100, 49],
		bgGrey: [100, 49],
		bgRedBright: [101, 49],
		bgGreenBright: [102, 49],
		bgYellowBright: [103, 49],
		bgBlueBright: [104, 49],
		bgMagentaBright: [105, 49],
		bgCyanBright: [106, 49],
		bgWhiteBright: [107, 49]
	}
};
var modifierNames = Object.keys(styles$1.modifier);
var foregroundColorNames = Object.keys(styles$1.color);
var backgroundColorNames = Object.keys(styles$1.bgColor);
var colorNames = [...foregroundColorNames, ...backgroundColorNames];
function assembleStyles() {
	const codes = /* @__PURE__ */ new Map();
	for (const [groupName, group] of Object.entries(styles$1)) {
		for (const [styleName, style] of Object.entries(group)) {
			styles$1[styleName] = {
				open: `\u001B[${style[0]}m`,
				close: `\u001B[${style[1]}m`
			};
			group[styleName] = styles$1[styleName];
			codes.set(style[0], style[1]);
		}
		Object.defineProperty(styles$1, groupName, {
			value: group,
			enumerable: false
		});
	}
	Object.defineProperty(styles$1, "codes", {
		value: codes,
		enumerable: false
	});
	styles$1.color.close = "\x1B[39m";
	styles$1.bgColor.close = "\x1B[49m";
	styles$1.color.ansi = wrapAnsi16();
	styles$1.color.ansi256 = wrapAnsi256();
	styles$1.color.ansi16m = wrapAnsi16m();
	styles$1.bgColor.ansi = wrapAnsi16(ANSI_BACKGROUND_OFFSET);
	styles$1.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET);
	styles$1.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET);
	Object.defineProperties(styles$1, {
		rgbToAnsi256: {
			value(red, green, blue) {
				if (red === green && green === blue) {
					if (red < 8) return 16;
					if (red > 248) return 231;
					return Math.round((red - 8) / 247 * 24) + 232;
				}
				return 16 + 36 * Math.round(red / 255 * 5) + 6 * Math.round(green / 255 * 5) + Math.round(blue / 255 * 5);
			},
			enumerable: false
		},
		hexToRgb: {
			value(hex) {
				const matches = /[a-f\d]{6}|[a-f\d]{3}/i.exec(hex.toString(16));
				if (!matches) return [
					0,
					0,
					0
				];
				let [colorString] = matches;
				if (colorString.length === 3) colorString = [...colorString].map((character) => character + character).join("");
				const integer = Number.parseInt(colorString, 16);
				return [
					integer >> 16 & 255,
					integer >> 8 & 255,
					integer & 255
				];
			},
			enumerable: false
		},
		hexToAnsi256: {
			value: (hex) => styles$1.rgbToAnsi256(...styles$1.hexToRgb(hex)),
			enumerable: false
		},
		ansi256ToAnsi: {
			value(code) {
				if (code < 8) return 30 + code;
				if (code < 16) return 90 + (code - 8);
				let red;
				let green;
				let blue;
				if (code >= 232) {
					red = ((code - 232) * 10 + 8) / 255;
					green = red;
					blue = red;
				} else {
					code -= 16;
					const remainder = code % 36;
					red = Math.floor(code / 36) / 5;
					green = Math.floor(remainder / 6) / 5;
					blue = remainder % 6 / 5;
				}
				const value = Math.max(red, green, blue) * 2;
				if (value === 0) return 30;
				let result = 30 + (Math.round(blue) << 2 | Math.round(green) << 1 | Math.round(red));
				if (value === 2) result += 60;
				return result;
			},
			enumerable: false
		},
		rgbToAnsi: {
			value: (red, green, blue) => styles$1.ansi256ToAnsi(styles$1.rgbToAnsi256(red, green, blue)),
			enumerable: false
		},
		hexToAnsi: {
			value: (hex) => styles$1.ansi256ToAnsi(styles$1.hexToAnsi256(hex)),
			enumerable: false
		}
	});
	return styles$1;
}
var ansiStyles = assembleStyles();
//#endregion
//#region ../../node_modules/chalk/source/vendor/supports-color/browser.js
var level = (() => {
	if (!("navigator" in globalThis)) return 0;
	if (globalThis.navigator.userAgentData) {
		const brand = navigator.userAgentData.brands.find(({ brand }) => brand === "Chromium");
		if (brand && brand.version > 93) return 3;
	}
	if (/\b(Chrome|Chromium)\//.test(globalThis.navigator.userAgent)) return 1;
	return 0;
})();
var colorSupport = level !== 0 && {
	level,
	hasBasic: true,
	has256: level >= 2,
	has16m: level >= 3
};
var supportsColor = {
	stdout: colorSupport,
	stderr: colorSupport
};
//#endregion
//#region ../../node_modules/chalk/source/utilities.js
function stringReplaceAll(string, substring, replacer) {
	let index = string.indexOf(substring);
	if (index === -1) return string;
	const substringLength = substring.length;
	let endIndex = 0;
	let returnValue = "";
	do {
		returnValue += string.slice(endIndex, index) + substring + replacer;
		endIndex = index + substringLength;
		index = string.indexOf(substring, endIndex);
	} while (index !== -1);
	returnValue += string.slice(endIndex);
	return returnValue;
}
function stringEncaseCRLFWithFirstIndex(string, prefix, postfix, index) {
	let endIndex = 0;
	let returnValue = "";
	do {
		const gotCR = string[index - 1] === "\r";
		returnValue += string.slice(endIndex, gotCR ? index - 1 : index) + prefix + (gotCR ? "\r\n" : "\n") + postfix;
		endIndex = index + 1;
		index = string.indexOf("\n", endIndex);
	} while (index !== -1);
	returnValue += string.slice(endIndex);
	return returnValue;
}
//#endregion
//#region ../../node_modules/chalk/source/index.js
var { stdout: stdoutColor, stderr: stderrColor } = supportsColor;
var GENERATOR = Symbol("GENERATOR");
var STYLER = Symbol("STYLER");
var IS_EMPTY = Symbol("IS_EMPTY");
var levelMapping = [
	"ansi",
	"ansi",
	"ansi256",
	"ansi16m"
];
var styles = Object.create(null);
var applyOptions = (object, options = {}) => {
	if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) throw new Error("The `level` option should be an integer from 0 to 3");
	const colorLevel = stdoutColor ? stdoutColor.level : 0;
	object.level = options.level === void 0 ? colorLevel : options.level;
};
var chalkFactory = (options) => {
	const chalk = (...strings) => strings.join(" ");
	applyOptions(chalk, options);
	Object.setPrototypeOf(chalk, createChalk.prototype);
	return chalk;
};
function createChalk(options) {
	return chalkFactory(options);
}
Object.setPrototypeOf(createChalk.prototype, Function.prototype);
for (const [styleName, style] of Object.entries(ansiStyles)) styles[styleName] = { get() {
	const builder = createBuilder(this, createStyler(style.open, style.close, this[STYLER]), this[IS_EMPTY]);
	Object.defineProperty(this, styleName, { value: builder });
	return builder;
} };
styles.visible = { get() {
	const builder = createBuilder(this, this[STYLER], true);
	Object.defineProperty(this, "visible", { value: builder });
	return builder;
} };
var getModelAnsi = (model, level, type, ...arguments_) => {
	if (model === "rgb") {
		if (level === "ansi16m") return ansiStyles[type].ansi16m(...arguments_);
		if (level === "ansi256") return ansiStyles[type].ansi256(ansiStyles.rgbToAnsi256(...arguments_));
		return ansiStyles[type].ansi(ansiStyles.rgbToAnsi(...arguments_));
	}
	if (model === "hex") return getModelAnsi("rgb", level, type, ...ansiStyles.hexToRgb(...arguments_));
	return ansiStyles[type][model](...arguments_);
};
for (const model of [
	"rgb",
	"hex",
	"ansi256"
]) {
	styles[model] = { get() {
		const { level } = this;
		return function(...arguments_) {
			const styler = createStyler(getModelAnsi(model, levelMapping[level], "color", ...arguments_), ansiStyles.color.close, this[STYLER]);
			return createBuilder(this, styler, this[IS_EMPTY]);
		};
	} };
	const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
	styles[bgModel] = { get() {
		const { level } = this;
		return function(...arguments_) {
			const styler = createStyler(getModelAnsi(model, levelMapping[level], "bgColor", ...arguments_), ansiStyles.bgColor.close, this[STYLER]);
			return createBuilder(this, styler, this[IS_EMPTY]);
		};
	} };
}
var proto = Object.defineProperties(() => {}, {
	...styles,
	level: {
		enumerable: true,
		get() {
			return this[GENERATOR].level;
		},
		set(level) {
			this[GENERATOR].level = level;
		}
	}
});
var createStyler = (open, close, parent) => {
	let openAll;
	let closeAll;
	if (parent === void 0) {
		openAll = open;
		closeAll = close;
	} else {
		openAll = parent.openAll + open;
		closeAll = close + parent.closeAll;
	}
	return {
		open,
		close,
		openAll,
		closeAll,
		parent
	};
};
var createBuilder = (self, _styler, _isEmpty) => {
	const builder = (...arguments_) => applyStyle(builder, arguments_.length === 1 ? "" + arguments_[0] : arguments_.join(" "));
	Object.setPrototypeOf(builder, proto);
	builder[GENERATOR] = self;
	builder[STYLER] = _styler;
	builder[IS_EMPTY] = _isEmpty;
	return builder;
};
var applyStyle = (self, string) => {
	if (self.level <= 0 || !string) return self[IS_EMPTY] ? "" : string;
	let styler = self[STYLER];
	if (styler === void 0) return string;
	const { openAll, closeAll } = styler;
	if (string.includes("\x1B")) while (styler !== void 0) {
		string = stringReplaceAll(string, styler.close, styler.open);
		styler = styler.parent;
	}
	const lfIndex = string.indexOf("\n");
	if (lfIndex !== -1) string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
	return openAll + string + closeAll;
};
Object.defineProperties(createChalk.prototype, styles);
var chalk = createChalk();
var chalkStderr = createChalk({ level: stderrColor ? stderrColor.level : 0 });
//#endregion
//#region ../llms/src/utils.ts
/**
* Utility functions for LLM integration
*/
var debug = console.debug.bind(console, chalk.gray("[LLM]"));
/**
* Convert Zod schema to OpenAI tool format
* Uses Zod 4 native z.toJSONSchema()
*/
function zodToOpenAITool(name, tool) {
	return {
		type: "function",
		function: {
			name,
			description: tool.description,
			parameters: toJSONSchema(tool.inputSchema, { target: "openapi-3.0" })
		}
	};
}
/**
* Patch model specific parameters
* @note in-place modification
*/
function modelPatch(body) {
	const model = body.model || "";
	if (!model) return body;
	const modelName = normalizeModelName(model);
	if (modelName.startsWith("qwen")) {
		debug("Applying Qwen patch: use higher temperature for auto fixing");
		body.temperature = Math.max(body.temperature || 0, 1);
		body.enable_thinking = false;
	}
	if (modelName.startsWith("claude")) {
		debug("Applying Claude patch: disable thinking");
		body.thinking = { type: "disabled" };
		if (body.tool_choice === "required") {
			debug("Applying Claude patch: convert tool_choice \"required\" to { type: \"any\" }");
			body.tool_choice = { type: "any" };
		} else if (body.tool_choice?.function?.name) {
			debug("Applying Claude patch: convert tool_choice format");
			body.tool_choice = {
				type: "tool",
				name: body.tool_choice.function.name
			};
		}
		if (modelName.startsWith("claude-opus-4-7") || modelName.startsWith("claude-opus-47") || modelName.startsWith("claude-opus-4-8") || modelName.startsWith("claude-opus-48")) {
			debug("Applying Claude-4.7/4.8 patch: remove temperature");
			delete body.temperature;
		}
	}
	if (modelName.startsWith("grok")) {
		debug("Applying Grok patch: removing tool_choice");
		delete body.tool_choice;
		debug("Applying Grok patch: disable reasoning and thinking");
		body.thinking = {
			type: "disabled",
			effort: "minimal"
		};
		body.reasoning = {
			enabled: false,
			effort: "low"
		};
	}
	if (modelName.startsWith("gpt")) {
		debug("Applying GPT patch: set verbosity to low");
		body.verbosity = "low";
		if (modelName.includes("chat-latest")) {
			debug("Omitting reasoning_effort and temperature for chat-latest");
			delete body.reasoning_effort;
			delete body.temperature;
		} else if (modelName.startsWith("gpt-52")) {
			debug("Applying GPT-52 patch: disable reasoning");
			body.reasoning_effort = "none";
		} else if (modelName.startsWith("gpt-51")) {
			debug("Applying GPT-51 patch: disable reasoning");
			body.reasoning_effort = "none";
		} else if (modelName.startsWith("gpt-54")) {
			debug("Applying GPT-5.4 patch: remove reasoning_effort");
			delete body.reasoning_effort;
		} else if (modelName.startsWith("gpt-55")) {
			debug("Applying GPT-5.4 patch: remove reasoning_effort and temperature");
			delete body.reasoning_effort;
			delete body.temperature;
		} else if (modelName.startsWith("gpt-5-mini")) {
			debug("Applying GPT-5-mini patch: set reasoning effort to low, temperature to 1");
			body.reasoning_effort = "low";
			body.temperature = 1;
		} else if (modelName.startsWith("gpt-5")) {
			debug("Applying GPT-5 patch: set reasoning effort to low");
			body.reasoning_effort = "low";
		}
	}
	if (modelName.startsWith("gemini")) {
		debug("Applying Gemini patch: set reasoning effort to minimal");
		body.reasoning_effort = "minimal";
	}
	if (modelName.startsWith("deepseek")) {
		debug("Applying DeepSeek patch: remove tool_choice");
		delete body.tool_choice;
	}
	if (modelName.startsWith("minimax")) {
		debug("Applying MiniMax patch: clamp temperature to (0, 1]");
		body.temperature = Math.max(body.temperature || 0, .01);
		if (body.temperature > 1) body.temperature = 1;
		delete body.parallel_tool_calls;
	}
	return body;
}
/**
* check if a given model ID fits a specific model name
*
* @note
* Different model providers may use different model IDs for the same model.
* For example, openai's `gpt-5.2` may called:
*
* - `gpt-5.2-version`
* - `gpt-5_2-date`
* - `GPT-52-version-date`
* - `openai/gpt-5.2-chat`
*
* They should be treated as the same model.
* Normalize them to `gpt-52`
*/
function normalizeModelName(modelName) {
	let normalizedName = modelName.toLowerCase();
	if (normalizedName.includes("/")) normalizedName = normalizedName.split("/")[1];
	normalizedName = normalizedName.replace(/_/g, "");
	normalizedName = normalizedName.replace(/\./g, "");
	return normalizedName;
}
//#endregion
//#region ../llms/src/OpenAIClient.ts
/**
* OpenAI Client implementation
*/
/**
* Client for OpenAI compatible APIs
*/
var OpenAIClient = class {
	config;
	fetch;
	constructor(config) {
		this.config = config;
		this.fetch = config.customFetch;
	}
	async invoke(messages, tools, abortSignal, options) {
		abortSignal?.throwIfAborted();
		const openaiTools = Object.entries(tools).map(([name, t]) => zodToOpenAITool(name, t));
		let toolChoice = "required";
		if (options?.toolChoiceName && !this.config.disableNamedToolChoice) toolChoice = {
			type: "function",
			function: { name: options.toolChoiceName }
		};
		const requestBody = {
			model: this.config.model,
			temperature: this.config.temperature,
			messages,
			tools: openaiTools,
			parallel_tool_calls: false,
			tool_choice: toolChoice
		};
		modelPatch(requestBody);
		let transformedBody;
		try {
			transformedBody = this.config.transformRequestBody(requestBody);
		} catch (error) {
			throw new InvokeError(InvokeErrorTypes.CONFIG_ERROR, `transformRequestBody failed: ${error.message}`, error);
		}
		const finalRequestBody = transformedBody ?? requestBody;
		let response;
		try {
			response = await this.fetch(`${this.config.baseURL}/chat/completions`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					...this.config.apiKey && { Authorization: `Bearer ${this.config.apiKey}` }
				},
				body: JSON.stringify(finalRequestBody),
				signal: abortSignal
			});
		} catch (error) {
			if (error?.name === "AbortError") throw error;
			console.error(error);
			throw new InvokeError(InvokeErrorTypes.NETWORK_ERROR, "Network request failed", error);
		}
		if (!response.ok) {
			let errorData;
			try {
				errorData = await response.json();
			} catch (error) {
				if (error?.name === "AbortError") throw error;
			}
			const errorMessage = errorData?.error?.message || response.statusText;
			if (response.status === 401 || response.status === 403) throw new InvokeError(InvokeErrorTypes.AUTH_ERROR, `Authentication failed: ${errorMessage}`, errorData);
			if (response.status === 429) throw new InvokeError(InvokeErrorTypes.RATE_LIMIT, `Rate limit exceeded: ${errorMessage}`, errorData);
			if (response.status >= 500) throw new InvokeError(InvokeErrorTypes.SERVER_ERROR, `Server error: ${errorMessage}`, errorData);
			throw new InvokeError(InvokeErrorTypes.UNKNOWN, `HTTP ${response.status}: ${errorMessage}`, errorData);
		}
		let data;
		try {
			data = await response.json();
		} catch (error) {
			if (error?.name === "AbortError") throw error;
			throw new InvokeError(InvokeErrorTypes.INVALID_RESPONSE, "Response body is not valid JSON", error);
		}
		const choice = data.choices?.[0];
		if (!choice) throw new InvokeError(InvokeErrorTypes.INVALID_SCHEMA, "No choices in response", data);
		switch (choice.finish_reason) {
			case "tool_calls":
			case "function_call":
			case "stop": break;
			case "length": throw new InvokeError(InvokeErrorTypes.CONTEXT_LENGTH, "Response truncated: max tokens reached", void 0, data);
			case "content_filter": throw new InvokeError(InvokeErrorTypes.CONTENT_FILTER, "Content filtered by safety system", void 0, data);
			default: throw new InvokeError(InvokeErrorTypes.INVALID_SCHEMA, `Unexpected finish_reason: ${choice.finish_reason}`, void 0, data);
		}
		const normalizedChoice = (options?.normalizeResponse ? options.normalizeResponse(data) : data).choices?.[0];
		const toolCallName = normalizedChoice?.message?.tool_calls?.[0]?.function?.name;
		if (!toolCallName) throw new InvokeError(InvokeErrorTypes.NO_TOOL_CALL, "No tool call found in response", void 0, data);
		const tool = tools[toolCallName];
		if (!tool) throw new InvokeError(InvokeErrorTypes.UNKNOWN, `Tool "${toolCallName}" not found in tools`, void 0, data);
		const argString = normalizedChoice.message?.tool_calls?.[0]?.function?.arguments;
		if (!argString) throw new InvokeError(InvokeErrorTypes.INVALID_TOOL_ARGS, "No tool call arguments found", void 0, data);
		let parsedArgs;
		try {
			parsedArgs = JSON.parse(argString);
		} catch (error) {
			throw new InvokeError(InvokeErrorTypes.INVALID_TOOL_ARGS, "Failed to parse tool arguments as JSON", error, data);
		}
		const validation = tool.inputSchema.safeParse(parsedArgs);
		if (!validation.success) {
			console.error(prettifyError(validation.error));
			throw new InvokeError(InvokeErrorTypes.INVALID_TOOL_ARGS, "Tool arguments validation failed", validation.error, data);
		}
		const toolInput = validation.data;
		let toolResult;
		try {
			toolResult = await tool.execute(toolInput);
		} catch (error) {
			if (error?.name === "AbortError") throw error;
			throw new InvokeError(InvokeErrorTypes.TOOL_EXECUTION_ERROR, `Tool execution failed: ${error?.message}`, error, data);
		}
		return {
			toolCall: {
				name: toolCallName,
				args: toolInput
			},
			toolResult,
			usage: {
				promptTokens: data.usage?.prompt_tokens ?? 0,
				completionTokens: data.usage?.completion_tokens ?? 0,
				totalTokens: data.usage?.total_tokens ?? 0,
				cachedTokens: data.usage?.prompt_tokens_details?.cached_tokens,
				reasoningTokens: data.usage?.completion_tokens_details?.reasoning_tokens
			},
			rawResponse: data,
			rawRequest: finalRequestBody
		};
	}
};
//#endregion
//#region ../llms/src/constants.ts
var DEFAULT_TEMPERATURE = .7;
//#endregion
//#region ../llms/src/index.ts
function parseLLMConfig(config) {
	if (!config.baseURL || !config.model) throw new Error("[PageAgent] LLM configuration required. Please provide: baseURL, model. See: https://alibaba.github.io/page-agent/docs/features/models");
	return {
		baseURL: config.baseURL,
		model: config.model,
		apiKey: config.apiKey || "",
		temperature: config.temperature ?? .7,
		maxRetries: config.maxRetries ?? 2,
		transformRequestBody: config.transformRequestBody ?? ((requestBody) => requestBody),
		disableNamedToolChoice: config.disableNamedToolChoice ?? false,
		customFetch: (config.customFetch ?? fetch).bind(globalThis)
	};
}
var LLM = class extends EventTarget {
	config;
	client;
	constructor(config) {
		super();
		this.config = parseLLMConfig(config);
		this.client = new OpenAIClient(this.config);
	}
	/**
	* - call llm api *once*
	* - invoke tool call *once*
	* - return the result of the tool
	*/
	async invoke(messages, tools, abortSignal, options) {
		return await withRetry(async () => this.client.invoke(messages, tools, abortSignal, options), {
			maxRetries: this.config.maxRetries,
			onRetry: (attempt, lastError) => {
				this.dispatchEvent(new CustomEvent("retry", { detail: {
					attempt,
					maxAttempts: this.config.maxRetries,
					lastError
				} }));
			}
		});
	}
};
/**
* Retry a function until it succeeds or reaches the maximum number of retries.
*/
async function withRetry(fn, settings) {
	let attempt = 0;
	while (true) try {
		return await fn();
	} catch (error) {
		if (error?.name === "AbortError") throw error;
		if (error instanceof InvokeError && !error.retryable) throw error;
		attempt++;
		if (attempt > settings.maxRetries) throw error;
		console.debug("[LLM] retryable failure, will retry:", error);
		settings.onRetry(attempt, error);
		await new Promise((resolve) => setTimeout(resolve, 100));
	}
}
//#endregion
//#region ../core/src/prompts/system_prompt.md?raw
var system_prompt_default = "You are an AI agent designed to operate in an iterative loop to automate browser tasks. Your ultimate goal is accomplishing the task provided in <user_request>.\n\n<intro>\nYou excel at following tasks:\n1. Navigating complex websites and extracting precise information\n2. Automating form submissions and interactive web actions\n3. Gathering and saving information \n4. Operate effectively in an agent loop\n5. Efficiently performing diverse web tasks\n</intro>\n\n<language_settings>\n- Default working language: **English**\n- Use the language that user is using. Return in user's language.\n</language_settings>\n\n<input>\nAt every step, your input will consist of: \n1. <agent_state>: The current <user_request>.\n2. <system_instructions> (optional): App-wide guidance that applies to every step.\n3. <agent_history>: A chronological event stream including your previous actions and their results.\n4. <page_context> (optional): Guidance specific to the current page (<page_instructions>, <llms_txt>).\n5. <browser_state>: Current URL, interactive elements indexed for actions, and visible page content.\n6. <step_info>: The current step number and the maximum number of steps.\n</input>\n\n<agent_history>\nAgent history will be given as a list of step information as follows:\n\n<step_{step_number}>:\nEvaluation of Previous Step: Assessment of last action\nMemory: Your memory of this step\nNext Goal: Your goal for this step\nAction Results: Your actions and their results\n</step_{step_number}>\n\nand system messages wrapped in <sys> tag.\n</agent_history>\n\n<user_request>\nUSER REQUEST: This is your ultimate objective and always remains visible.\n- This has the highest priority. Make the user happy.\n- If the user request is very specific - then carefully follow each step and dont skip or hallucinate steps.\n- If the task is open ended you can plan yourself how to get it done.\n</user_request>\n\n<browser_state>\n1. Browser State will be given as:\n\nCurrent URL: URL of the page you are currently viewing.\nInteractive Elements: All interactive elements will be provided in format as [index]<type>text</type> where\n- index: Numeric identifier for interaction\n- type: HTML element type (button, input, etc.)\n- text: Element description\n\nExamples:\n[33]<div>User form</div>\n\\t*[35]<button aria-label='Submit form'>Submit</button>\n\nNote that:\n- Only elements with numeric indexes in [] are interactive\n- (stacked) indentation (with \\t) is important and means that the element is a (html) child of the element above (with a lower index)\n- Elements tagged with `*[` are the new clickable elements that appeared on the website since the last step - if url has not changed.\n- Pure text elements without [] are not interactive.\n</browser_state>\n\n<browser_rules>\nStrictly follow these rules while using the browser and navigating the web:\n- Only interact with elements that have a numeric [index] assigned.\n- Only use indexes that are explicitly provided.\n- If the page changes after, for example, an input text action, analyze if you need to interact with new elements, e.g. selecting the right option from the list.\n- By default, only elements in the visible viewport are listed. Use scrolling actions if you suspect relevant content is offscreen which you need to interact with. Scroll ONLY if there are more pixels below or above the page.\n- You can scroll by a specific number of pages using the num_pages parameter (e.g., 0.5 for half page, 2.0 for two pages).\n- All the elements that are scrollable are marked with `data-scrollable` attribute. Including the scrollable distance in every directions. You can scroll *the element* in case some area are overflowed.\n- If a captcha appears, tell user you can not solve captcha. Finish the task and ask user to solve it.\n- If the page is not fully loaded, use the `wait` action.\n- Do not repeat one action for more than 3 times unless some conditions changed.\n- Toggles, switches and checkboxes expose their state via `aria-checked`/`aria-pressed`/`data-state`. `aria-checked=true` (or `data-state=checked`) means ON/enabled; `aria-checked=false` (or `data-state=unchecked`) means OFF/disabled. To enable something the target state is ON; to disable something the target state is OFF. ALWAYS read the control's current state in `<browser_state>` BEFORE acting: if it already shows the target state (e.g. you were asked to disable it and it is already `aria-checked=false`), the task for that control is already DONE — do NOT click it. Clicking a toggle that already matches the goal flips it the wrong way.\n- NEVER click a toggle/switch/checkbox just to \"verify\" or \"confirm\" its state. Clicking ALWAYS flips it. To check a control's state, READ its `aria-checked`/`data-state` in `<browser_state>` — do not interact with it.\n- If you fill an input field and your action sequence is interrupted, most often something changed e.g. suggestions popped up under the field.\n- If the <user_request> includes specific page information such as product type, rating, price, location, etc., try to apply filters to be more efficient.\n- The <user_request> is the ultimate goal. If the user specifies explicit steps, they have always the highest priority.\n- If you input_text into a field, you might need to press enter, click the search button, or select from dropdown for completion.\n- Don't login into a page if you don't have to. Don't login if you don't have the credentials. \n- There are 2 types of tasks always first think which type of request you are dealing with:\n1. Very specific step by step instructions:\n- Follow them as very precise and don't skip steps. Try to complete everything as requested.\n2. Open ended tasks. Plan yourself, be creative in achieving them.\n- If you get stuck e.g. with logins or captcha in open-ended tasks you can re-evaluate the task and try alternative ways, e.g. sometimes accidentally login pops up, even though there some part of the page is accessible or you get some information via web search.\n</browser_rules>\n\n<capability>\n- You can only handle single page app. Do not jump out of current page.\n- Do not click on link if it will open in a new page (e.g., <a target=\"_blank\">)\n- It is ok to fail the task.\n	- User can be wrong. If the request of user is not achievable, inappropriate or you do not have enough information or tools to achieve it. Tell user to make a better request.\n	- Webpage can be broken. All webpages or apps have bugs. Some bug will make it hard for your job. It's encouraged to tell user the problem of current page. Your feedbacks (including failing) are valuable for user.\n	- Trying too hard can be harmful. Repeating some action back and forth or pushing for a complex procedure with little knowledge can cause unwanted results and harmful side-effects. User would rather you complete the task with a fail.\n- If you do not have knowledge for the current webpage or task. You must require user to give specific instructions and detailed steps.\n</capability>\n\n<task_completion_rules>\nYou must call the `done` action in one of three cases:\n- When you have fully completed the USER REQUEST.\n- When you reach the final allowed step (`max_steps`), even if the task is incomplete.\n- When you feel stuck or unable to solve user request. Or user request is not clear or contains inappropriate content.\n- If it is ABSOLUTELY IMPOSSIBLE to continue.\n\nThe `done` action is your opportunity to terminate and share your findings with the user.\n- Set `success` to `true` only if the full USER REQUEST has been completed with no missing components.\n- If any part of the request is missing, incomplete, or uncertain, set `success` to `false`.\n- You can use the `text` field of the `done` action to communicate your findings and to provide a coherent reply to the user and fulfill the USER REQUEST.\n- You are ONLY ALLOWED to call `done` as a single action. Don't call it together with other actions.\n- If the user asks for specified format, such as \"return JSON with following structure\", \"return a list of format...\", MAKE sure to use the right format in your answer.\n- If the user asks for a structured output, your `done` action's schema may be modified. Take this schema into account when solving the task!\n</task_completion_rules>\n\n<reasoning_rules>\nExhibit the following reasoning patterns to successfully achieve the <user_request>:\n\n- Reason about <agent_history> to track progress and context toward <user_request>.\n- Analyze the most recent \"Next Goal\" and \"Action Result\" in <agent_history> and clearly state what you previously tried to achieve.\n- Analyze all relevant items in <agent_history> and <browser_state> to understand your state.\n- Explicitly judge success/failure/uncertainty of the last action. Never assume an action succeeded just because it appears to be executed in your last step in <agent_history>. If the expected change is missing, mark the last action as failed (or uncertain) and plan a recovery.\n- Analyze whether you are stuck, e.g. when you repeat the same actions multiple times without any progress. Then consider alternative approaches e.g. scrolling for more context or ask user for help.\n- Ask user for help if you have any difficulty. Keep user in the loop.\n- If you see information relevant to <user_request>, plan saving the information to memory.\n- Always reason about the <user_request>. Make sure to carefully analyze the specific steps and information required. E.g. specific filters, specific form fields, specific information to search. Make sure to always compare the current trajectory with the user request and think carefully if thats how the user requested it.\n</reasoning_rules>\n\n<examples>\nHere are examples of good output patterns. Use them as reference but never copy them directly.\n\n<evaluation_examples>\n\"evaluation_previous_goal\": \"Successfully navigated to the product page and found the target information. Verdict: Success\"\n\"evaluation_previous_goal\": \"Clicked the login button and user authentication form appeared. Verdict: Success\"\n</evaluation_examples>\n\n<memory_examples>\n\"memory\": \"Found many pending reports that need to be analyzed in the main page. Successfully processed the first 2 reports on quarterly sales data and moving on to inventory analysis and customer feedback reports.\"\n</memory_examples>\n\n<next_goal_examples>\n\"next_goal\": \"Click on the 'Add to Cart' button to proceed with the purchase flow.\"\n</next_goal_examples>\n</examples>\n\n<output>\n{\n  \"evaluation_previous_goal\": \"Concise one-sentence analysis of your last action. Clearly state success, failure, or uncertain.\",\n  \"memory\": \"1-3 concise sentences of specific memory of this step and overall progress. You should put here everything that will help you track progress in future steps. Like counting pages visited, items found, etc.\",\n  \"next_goal\": \"State the next immediate goal and action to achieve it, in one clear sentence.\",\n  \"action\":{\n    \"Action name\": {// Action parameters}\n  }\n}\n</output>\n";
//#endregion
//#region ../core/src/utils/autoFixer.ts
var log = console.log.bind(console, chalk.yellow("[autoFixer]"));
/**
* Normalize LLM response and fix common format issues.
*
* Handles:
* - No tool_calls but JSON in message.content (fallback)
* - Model returns action name as tool call instead of AgentOutput
* - Arguments wrapped as double JSON string
* - Nested function call format
* - Missing action field (fallback to wait)
* - Primitive action input for single-field tools (e.g. `{"click_element_by_index": 2}`)
* - etc.
*/
function normalizeResponse(response, tools) {
	let resolvedArguments;
	const choice = response.choices?.[0];
	if (!choice) throw new Error("No choices in response");
	const message = choice.message;
	if (!message) throw new Error("No message in choice");
	const toolCall = message.tool_calls?.[0];
	if (toolCall?.function?.arguments) {
		resolvedArguments = safeJsonParse(toolCall.function.arguments);
		if (toolCall.function.name && toolCall.function.name !== "AgentOutput") {
			log(`#1: fixing tool_call`);
			resolvedArguments = { action: safeJsonParse(resolvedArguments) };
		}
	} else if (message.content) {
		const jsonInContent = retrieveJsonFromString(message.content.trim());
		if (jsonInContent) {
			resolvedArguments = safeJsonParse(jsonInContent);
			if (resolvedArguments?.name === "AgentOutput") {
				log(`#2: fixing tool_call`);
				resolvedArguments = safeJsonParse(resolvedArguments.arguments);
			}
			if (resolvedArguments?.type === "function") {
				log(`#3: fixing tool_call`);
				resolvedArguments = safeJsonParse(resolvedArguments.function.arguments);
			}
			if (!resolvedArguments?.action && !resolvedArguments?.evaluation_previous_goal && !resolvedArguments?.memory && !resolvedArguments?.next_goal && !resolvedArguments?.thinking) {
				log(`#4: fixing tool_call`);
				resolvedArguments = { action: safeJsonParse(resolvedArguments) };
			}
		} else throw new Error("No tool_call and the message content does not contain valid JSON");
	} else throw new Error("No tool_call nor message content is present");
	resolvedArguments = safeJsonParse(resolvedArguments);
	if (resolvedArguments.action) resolvedArguments.action = safeJsonParse(resolvedArguments.action);
	if (resolvedArguments.action && tools) resolvedArguments.action = validateAction(resolvedArguments.action, tools);
	if (!resolvedArguments.action) {
		log(`#5: fixing tool_call`);
		resolvedArguments.action = { wait: { seconds: 1 } };
	}
	return {
		...response,
		choices: [{
			...choice,
			message: {
				...message,
				tool_calls: [{
					...toolCall || {},
					function: {
						...toolCall?.function || {},
						name: "AgentOutput",
						arguments: JSON.stringify(resolvedArguments)
					}
				}]
			}
		}]
	};
}
/**
* Validate action against tool schemas. Provides clear error messages
* instead of letting the union schema produce unreadable errors.
*
* Also coerces primitive inputs for single-field tools:
* e.g. `{"click_element_by_index": 2}` → `{"click_element_by_index": {"index": 2}}`
*/
function validateAction(action, tools) {
	if (typeof action !== "object" || action === null) return action;
	const toolName = Object.keys(action)[0];
	if (!toolName) return action;
	const tool = tools.get(toolName);
	if (!tool) {
		const available = Array.from(tools.keys()).join(", ");
		throw new InvokeError(InvokeErrorTypes.INVALID_TOOL_ARGS, `Unknown action "${toolName}". Available: ${available}`);
	}
	let value = action[toolName];
	const schema = tool.inputSchema;
	if (schema instanceof ZodObject && value !== null && typeof value !== "object") {
		const requiredKey = Object.keys(schema.shape).find((k) => !schema.shape[k].safeParse(void 0).success);
		if (requiredKey) {
			log(`coercing primitive action input for "${toolName}"`);
			value = { [requiredKey]: value };
		}
	}
	const result = schema.safeParse(value);
	if (!result.success) throw new InvokeError(InvokeErrorTypes.INVALID_TOOL_ARGS, `Invalid input for action "${toolName}": ${prettifyError(result.error)}`);
	return { [toolName]: result.data };
}
/**
* Safely parse JSON, return original input if not json.
*/
function safeJsonParse(input) {
	if (typeof input === "string") try {
		return JSON.parse(input.trim());
	} catch {
		return input;
	}
	return input;
}
/**
* Extract and parse JSON from a string.
* - Treat content between the first `{` and the last `}` as JSON.
* - Try to parse that content as JSON and return the parsed value (object/array/primitive) if successful, otherwise return null.
*/
function retrieveJsonFromString(str) {
	try {
		const json = /({[\s\S]*})/.exec(str) ?? [];
		if (json.length === 0) return null;
		return JSON.parse(json[0]);
	} catch {
		return null;
	}
}
//#endregion
//#region ../core/src/utils/index.ts
/**
* Wait for `seconds`. If a `signal` is provided, the wait is cancellable:
* aborting rejects with the signal's reason (an `AbortError`).
*/
async function waitFor$1(seconds, signal) {
	if (!signal) {
		await new Promise((resolve) => setTimeout(resolve, seconds * 1e3));
		return;
	}
	signal.throwIfAborted();
	await new Promise((resolve, reject) => {
		const timer = setTimeout(() => {
			signal.removeEventListener("abort", onAbort);
			resolve();
		}, seconds * 1e3);
		const onAbort = () => {
			clearTimeout(timer);
			reject(signal.reason);
		};
		signal.addEventListener("abort", onAbort, { once: true });
	});
}
function truncate$1(text, maxLength) {
	if (text.length > maxLength) return text.substring(0, maxLength) + "...";
	return text;
}
function randomID(existingIDs) {
	let id = Math.random().toString(36).substring(2, 11);
	if (!existingIDs) return id;
	const MAX_TRY = 1e3;
	let tryCount = 0;
	while (existingIDs.includes(id)) {
		id = Math.random().toString(36).substring(2, 11);
		tryCount++;
		if (tryCount > MAX_TRY) throw new Error("randomID: too many tries");
	}
	return id;
}
var _global = globalThis;
if (!_global.__PAGE_AGENT_IDS__) _global.__PAGE_AGENT_IDS__ = [];
var ids = _global.__PAGE_AGENT_IDS__;
/**
* Generate a random ID.
* @note Unique within this window.
*/
function uid() {
	const id = randomID(ids);
	ids.push(id);
	return id;
}
var llmsTxtCache = /* @__PURE__ */ new Map();
/** Fetch /llms.txt for a URL's origin. Cached per origin, `null` = tried and not found. */
async function fetchLlmsTxt(url) {
	let origin;
	try {
		origin = new URL(url).origin;
	} catch {
		return null;
	}
	if (origin === "null") return null;
	if (llmsTxtCache.has(origin)) return llmsTxtCache.get(origin);
	const endpoint = `${origin}/llms.txt`;
	let result = null;
	try {
		console.log(chalk.gray(`[llms.txt] Fetching ${endpoint}`));
		const res = await fetch(endpoint, { signal: AbortSignal.timeout(3e3) });
		if (res.ok) {
			result = await res.text();
			console.log(chalk.green(`[llms.txt] Found (${result.length} chars)`));
			if (result.length > 1e3) {
				console.log(chalk.yellow(`[llms.txt] Truncating to 1000 chars`));
				result = truncate$1(result, 1e3);
			}
		} else console.debug(chalk.gray(`[llms.txt] ${res.status} for ${endpoint}`));
	} catch (e) {
		console.debug(chalk.gray(`[llms.txt] not found for ${endpoint}`), e);
	}
	llmsTxtCache.set(origin, result);
	return result;
}
/**
* Simple assertion function that throws an error if the condition is falsy
* @param condition - The condition to assert
* @param message - Optional error message
* @throws Error if condition is falsy
*/
function assert(condition, message, silent) {
	if (!condition) {
		const errorMessage = message ?? "Assertion failed";
		if (!silent) console.error(chalk.red(`❌ assert: ${errorMessage}`));
		throw new Error(errorMessage);
	}
}
/**
* Suppress errors from a function.
*/
async function suppress(fn) {
	try {
		return await fn();
	} catch (error) {
		console.error(error);
		return;
	}
}
//#endregion
//#region ../core/src/tools/index.ts
/**
* Internal tools for PageAgent.
* @note Adapted from browser-use
*/
function tool(options) {
	return options;
}
/**
* Internal tools for PageAgent.
* Note: Using any to allow different parameter types for each tool
*/
var tools = /* @__PURE__ */ new Map();
tools.set("done", tool({
	description: "Complete task. Text is your final response to the user — keep it concise unless the user explicitly asks for detail.",
	inputSchema: object({
		text: string(),
		success: boolean().default(true)
	}),
	execute: async function(input) {
		return Promise.resolve("Task completed");
	}
}));
tools.set("wait", tool({
	description: "Wait for x seconds. Can be used to wait until the page or data is fully loaded.",
	inputSchema: object({ seconds: number().min(1).max(10).default(1) }),
	execute: async function(input, { signal }) {
		const lastTimeUpdate = await this.pageController.getLastUpdateTime();
		const secondsSinceLastUpdate = (Date.now() - lastTimeUpdate) / 1e3;
		const actualWaitTime = Math.max(0, input.seconds - secondsSinceLastUpdate);
		console.log(`actualWaitTime: ${actualWaitTime} seconds`);
		await waitFor$1(actualWaitTime, signal);
		return `✅ Waited for ${(secondsSinceLastUpdate + actualWaitTime).toFixed(2)} seconds.`;
	}
}));
tools.set("ask_user", tool({
	description: "Ask the user a question and wait for their answer. Use this if you need more information or clarification.",
	inputSchema: object({ question: string() }),
	execute: async function(input, { signal }) {
		if (!this.onAskUser) throw new Error("ask_user tool requires onAskUser callback to be set");
		return `User answered: ${await this.onAskUser(input.question, { signal })}`;
	}
}));
tools.set("click_element_by_index", tool({
	description: "Click element by index",
	inputSchema: object({ index: int().min(0) }),
	execute: async function(input) {
		return (await this.pageController.clickElement(input.index)).message;
	}
}));
tools.set("input_text", tool({
	description: "Click and type text into an interactive input element",
	inputSchema: object({
		index: int().min(0),
		text: string()
	}),
	execute: async function(input) {
		return (await this.pageController.inputText(input.index, input.text)).message;
	}
}));
tools.set("select_dropdown_option", tool({
	description: "Select dropdown option for interactive element index by the text of the option you want to select",
	inputSchema: object({
		index: int().min(0),
		text: string()
	}),
	execute: async function(input) {
		return (await this.pageController.selectOption(input.index, input.text)).message;
	}
}));
/**
* @note Reference from browser-use
*/
tools.set("scroll", tool({
	description: "Scroll vertically. Without index: scrolls the document. With index: scrolls the container at that index (or its nearest scrollable ancestor). Use index of a data-scrollable element to scroll a specific area.",
	inputSchema: object({
		down: boolean().default(true),
		num_pages: number().min(0).max(10).optional().default(.1),
		pixels: number().int().min(0).optional(),
		index: number().int().min(0).optional()
	}),
	execute: async function(input) {
		return (await this.pageController.scroll({
			...input,
			numPages: input.num_pages
		})).message;
	}
}));
/**
* @todo Tables need a dedicated parser to extract structured data. This tool is useless.
*/
tools.set("scroll_horizontally", tool({
	description: "Scroll horizontally. Without index: scrolls the document. With index: scrolls the container at that index (or its nearest scrollable ancestor). Use index of a data-scrollable element to scroll a specific area.",
	inputSchema: object({
		right: boolean().default(true),
		pixels: number().int().min(0),
		index: number().int().min(0).optional()
	}),
	execute: async function(input) {
		return (await this.pageController.scrollHorizontally(input)).message;
	}
}));
tools.set("execute_javascript", tool({
	description: "Execute JavaScript code on the current page. Supports async/await syntax. Use with caution! An `AbortSignal` named `signal` is available in scope: long-running async code MUST honor it (e.g. `await fetch(url, { signal })`, or `signal.throwIfAborted()` in loops)",
	inputSchema: object({ script: string() }),
	execute: async function(input, { signal }) {
		const result = await this.pageController.executeJavascript(input.script, signal);
		signal.throwIfAborted();
		return result.message;
	}
}));
//#endregion
//#region ../core/src/PageAgentCore.ts
/**
* Copyright (C) 2025 Alibaba Group Holding Limited
* Copyright (C) 2026 SimonLuvRamen
* All rights reserved.
*/
/**
* AI agent for browser automation.
*
* @remarks
* ## Re-act Agent Loop
* - step
*    - observe (gather information about current environment and context)
*    - think (LLM calling)
*      - reflection (evaluate history, generate memory, short-term planning)
*      - action (give the action to approach the next goal)
*    - act (execute the action)
* - loop
*
* ## Event System
* - `statuschange` - Agent status transitions (idle → running → completed/error/stopped)
* - `historychange` - History events updated (persistent, part of agent memory)
* - `activity` - Real-time activity feedback (transient, for UI only)
* - `dispose` - Agent cleanup triggered
*
* ## Information Streams
* 1. **History Events** (`history` array)
*    - Persistent event stream that forms agent's memory
*    - Included in LLM context across steps
*    - Types: steps, observations, user takeovers, llm errors
*
* 2. **Activity Events** (via `activity` event)
*    - Transient UI feedback during task execution
*    - NOT included in LLM context
*    - Types: thinking, executing, executed, retrying, error
*/
var PageAgentCore = class extends EventTarget {
	id = uid();
	config;
	tools;
	/** PageController for DOM operations */
	pageController;
	task = "";
	taskId = "";
	/** History events */
	history = [];
	/** Whether this agent has been disposed */
	disposed = false;
	/**
	* Called when the agent needs to ask the user questions.
	* If unset, the `ask_user` tool will be disabled.
	* Implementations should reject the promise when `signal` aborts.
	* @example onAskUser: (q) => window.prompt(q) || ''
	*/
	onAskUser;
	#status = "idle";
	#llm;
	/**
	* Task cancellation primitive: its signal reaches the LLM fetch, tools
	* (via `ctx.signal`) and async callbacks. Aborted only by `stop`/`dispose`
	* (during a task) or task setup, always WITHOUT a reason so `signal.reason`
	* stays a standard `AbortError`.
	*/
	#abortController = new AbortController();
	#observations = [];
	/** Resolves when the current run has fully settled. Awaited by `stop()`. */
	#running = Promise.resolve();
	#lastResult = null;
	/** internal states during a single task execution */
	#states = {
		/** Accumulated wait time in seconds */
		totalWaitTime: 0,
		/** For detecting navigation */
		lastURL: "",
		/** Browser state */
		browserState: null
	};
	constructor(config) {
		super();
		this.config = {
			...config,
			maxSteps: config.maxSteps ?? 40
		};
		this.#llm = new LLM(this.config);
		this.tools = new Map(tools);
		this.pageController = config.pageController;
		this.#llm.addEventListener("retry", (e) => {
			const { attempt, maxAttempts, lastError } = e.detail;
			this.#emitActivity({
				type: "retrying",
				attempt,
				maxAttempts
			});
			this.history.push({
				type: "error",
				message: String(lastError),
				rawResponse: lastError.rawResponse
			});
			this.history.push({
				type: "retry",
				message: `LLM retry attempt ${attempt} of ${maxAttempts}`,
				attempt,
				maxAttempts
			});
			this.#emitHistoryChange();
		});
		if (this.config.customTools) for (const [name, tool] of Object.entries(this.config.customTools)) {
			if (tool === null) {
				this.tools.delete(name);
				continue;
			}
			this.tools.set(name, tool);
		}
		if (!this.config.experimentalScriptExecutionTool) this.tools.delete("execute_javascript");
	}
	/** Get current agent status */
	get status() {
		return this.#status;
	}
	/** Result of the most recent run, or `null` before the first run completes. */
	get lastResult() {
		return this.#lastResult;
	}
	/** Emit statuschange event */
	#emitStatusChange() {
		this.dispatchEvent(new Event("statuschange"));
	}
	/** Emit historychange event */
	#emitHistoryChange(pushHistoricalEvent) {
		if (pushHistoricalEvent) this.history.push(pushHistoricalEvent);
		this.dispatchEvent(new Event("historychange"));
	}
	/**
	* Emit activity event - for transient UI feedback
	* @param activity - Current agent activity
	*/
	#emitActivity(activity) {
		this.dispatchEvent(new CustomEvent("activity", { detail: activity }));
	}
	/** Update status and emit event */
	#setStatus(status) {
		if (this.#status !== status) {
			this.#status = status;
			this.#emitStatusChange();
		}
	}
	/**
	* Push an observation message to the history event stream.
	* This will be visible in <agent_history> and remain persistent in memory across steps.
	* @experimental @internal
	* @note history change will be emitted before next step starts
	*/
	pushObservation(content) {
		this.#observations.push(content);
	}
	/**
	* Stop the current task and wait until the run has fully settled (including lifecycle hooks).
	* @note never await .stop() in a lifecycle hook.
	*/
	async stop() {
		if (this.#status !== "running") return;
		this.#abortController.abort();
		await this.#running;
	}
	/**
	* external errors (pre-checks/config/hooks) will threw;
	* agent errors will be caught and added to history, and return a failed result
	*/
	async execute(task) {
		if (this.disposed) throw new Error("PageAgent has been disposed. Create a new instance.");
		if (this.#status === "running") throw new Error("A task is already running.");
		if (!task) throw new Error("Task is required");
		this.task = task;
		this.taskId = uid();
		this.history = [];
		this.#observations = [];
		this.#states = {
			totalWaitTime: 0,
			lastURL: "",
			browserState: null
		};
		this.#abortController = new AbortController();
		const signal = this.#abortController.signal;
		let resolveRunning;
		this.#running = new Promise((r) => resolveRunning = r);
		this.#setStatus("running");
		this.#emitHistoryChange();
		if (!this.onAskUser) this.tools.delete("ask_user");
		const onBeforeStep = this.config.onBeforeStep;
		const onAfterStep = this.config.onAfterStep;
		const onBeforeTask = this.config.onBeforeTask;
		const onAfterTask = this.config.onAfterTask;
		const stepDelay = this.config.stepDelay ?? .4;
		const maxSteps = this.config.maxSteps;
		let step = 0;
		let taskResult;
		let finalStatus = "error";
		await suppress(() => this.pageController.showMask());
		try {
			await onBeforeTask?.(this);
			while (true) {
				await onBeforeStep?.(this, step);
				try {
					console.group(`step: ${step}`);
					if (step > 0) await waitFor$1(stepDelay, signal);
					signal.throwIfAborted();
					console.log(chalk.blue.bold("👀 Observing..."));
					this.#states.browserState = await this.pageController.getBrowserState();
					await this.#handleObservations(step);
					const messages = [{
						role: "system",
						content: this.#getSystemPrompt()
					}, {
						role: "user",
						content: await this.#assembleUserPrompt()
					}];
					const macroTool = { AgentOutput: this.#packMacroTool() };
					console.log(chalk.blue.bold("🧠 Thinking..."));
					this.#emitActivity({ type: "thinking" });
					const result = await this.#llm.invoke(messages, macroTool, signal, {
						toolChoiceName: "AgentOutput",
						normalizeResponse: (res) => normalizeResponse(res, this.tools)
					});
					const macroResult = result.toolResult;
					const input = macroResult.input;
					const output = macroResult.output;
					const reflection = {
						evaluation_previous_goal: input.evaluation_previous_goal,
						memory: input.memory,
						next_goal: input.next_goal
					};
					const actionName = Object.keys(input.action)[0];
					const action = {
						name: actionName,
						input: input.action[actionName],
						output
					};
					this.#emitHistoryChange({
						type: "step",
						stepIndex: step,
						reflection,
						action,
						usage: result.usage,
						rawResponse: result.rawResponse,
						rawRequest: result.rawRequest
					});
					if (actionName === "done") {
						const success = action.input?.success ?? false;
						const data = action.input?.text || "no text provided";
						console.log(chalk.green.bold("Task completed"), success, data);
						taskResult = {
							success,
							data,
							history: this.history
						};
						this.#lastResult = taskResult;
						finalStatus = "completed";
						break;
					}
				} catch (error) {
					const isAbortError = error?.name === "AbortError";
					if (!isAbortError) console.error("Task failed", error);
					const message = isAbortError ? "Task aborted" : String(error);
					this.#emitActivity({
						type: "error",
						message
					});
					this.#emitHistoryChange({
						type: "error",
						message,
						rawResponse: error
					});
					taskResult = {
						success: false,
						data: message,
						history: this.history
					};
					this.#lastResult = taskResult;
					finalStatus = isAbortError ? "stopped" : "error";
					break;
				} finally {
					console.groupEnd();
					await onAfterStep?.(this, this.history);
				}
				step++;
				if (step > maxSteps) {
					const message = "Step count exceeded maximum limit";
					console.error(message);
					this.#emitActivity({
						type: "error",
						message
					});
					this.#emitHistoryChange({
						type: "error",
						message
					});
					taskResult = {
						success: false,
						data: message,
						history: this.history
					};
					this.#lastResult = taskResult;
					finalStatus = "error";
					break;
				}
			}
			await onAfterTask?.(this, taskResult);
			return taskResult;
		} catch (error) {
			this.#emitActivity({
				type: "error",
				message: String(error)
			});
			finalStatus = "error";
			throw error;
		} finally {
			await suppress(() => this.pageController.cleanUpHighlights());
			await suppress(() => this.pageController.hideMask());
			this.#abortController.abort();
			resolveRunning();
			this.#setStatus(finalStatus);
		}
	}
	/**
	* Merge all tools into a single MacroTool with the following input:
	* - thinking: string
	* - evaluation_previous_goal: string
	* - memory: string
	* - next_goal: string
	* - action: { toolName: toolInput }
	* where action must be selected from tools defined in this.tools
	*/
	#packMacroTool() {
		const tools = this.tools;
		const actionSchema = union(Array.from(tools.entries()).map(([toolName, tool]) => {
			return object({ [toolName]: tool.inputSchema }).describe(tool.description);
		}));
		return {
			description: "You MUST call this tool every step!",
			inputSchema: object({
				evaluation_previous_goal: string().optional(),
				memory: string().optional(),
				next_goal: string().optional(),
				action: actionSchema
			}),
			execute: async (input) => {
				const signal = this.#abortController.signal;
				signal.throwIfAborted();
				console.log(chalk.blue.bold("MacroTool input"), input);
				const action = input.action;
				const toolName = Object.keys(action)[0];
				const toolInput = action[toolName];
				const reflectionLines = [];
				if (input.evaluation_previous_goal) reflectionLines.push(`✅: ${input.evaluation_previous_goal}`);
				if (input.memory) reflectionLines.push(`💾: ${input.memory}`);
				if (input.next_goal) reflectionLines.push(`🎯: ${input.next_goal}`);
				const reflectionText = reflectionLines.length > 0 ? reflectionLines.join("\n") : "";
				if (reflectionText) console.log(reflectionText);
				const tool = tools.get(toolName);
				assert(tool, `Tool ${toolName} not found`);
				console.log(chalk.blue.bold(`Executing tool: ${toolName}`), toolInput);
				this.#emitActivity({
					type: "executing",
					tool: toolName,
					input: toolInput
				});
				const startTime = Date.now();
				const result = await tool.execute.bind(this)(toolInput, { signal });
				signal.throwIfAborted();
				const duration = Date.now() - startTime;
				console.log(chalk.green.bold(`Tool (${toolName}) executed for ${duration}ms`), result);
				this.#emitActivity({
					type: "executed",
					tool: toolName,
					input: toolInput,
					output: result,
					duration
				});
				if (toolName === "wait") this.#states.totalWaitTime += toolInput?.seconds || 0;
				else this.#states.totalWaitTime = 0;
				return {
					input,
					output: result
				};
			}
		};
	}
	/**
	* Get system prompt, dynamically replace language settings based on configured language
	*/
	#getSystemPrompt() {
		if (this.config.customSystemPrompt) return this.config.customSystemPrompt;
		const targetLanguage = {
			"zh-CN": "中文",
			"fr-FR": "Français",
			"es-ES": "Español",
			"de-DE": "Deutsch",
			"it-IT": "Italiano",
			"pt-BR": "Português (Brasil)"
		}[this.config.language ?? ""] ?? "English";
		return system_prompt_default.replace(/Default working language: \*\*.*?\*\*/, `Default working language: **${targetLanguage}**`);
	}
	/**
	* App-wide instructions (`instructions.system`) that stay constant for the
	* whole run. Kept in the stable prompt prefix so the provider's prompt-prefix
	* cache can cover it and everything before the volatile page context.
	*/
	#getSystemInstructions() {
		const systemInstructions = this.config.instructions?.system?.trim();
		if (!systemInstructions) return "";
		return `<system_instructions>\n${systemInstructions}\n</system_instructions>\n\n`;
	}
	/**
	* Page-specific context (`instructions.getPageInstructions(url)` and llms.txt),
	* keyed on the current URL. This changes on navigation, so it lives in the
	* volatile suffix, next to <browser_state>, to avoid invalidating the cached
	* prefix on every step.
	*/
	async #getPageContext() {
		const { instructions, experimentalLlmsTxt } = this.config;
		let pageInstructions;
		const url = this.#states.browserState?.url || "";
		if (instructions?.getPageInstructions && url) try {
			pageInstructions = instructions.getPageInstructions(url)?.trim();
		} catch (error) {
			console.error(chalk.red("[PageAgent] Failed to execute getPageInstructions callback:"), error);
		}
		const llmsTxt = experimentalLlmsTxt && url ? await fetchLlmsTxt(url) : void 0;
		if (!pageInstructions && !llmsTxt) return "";
		let result = "<page_context>\n";
		if (pageInstructions) result += `<page_instructions>\n${pageInstructions}\n</page_instructions>\n`;
		if (llmsTxt) result += `<llms_txt>\n${llmsTxt}\n</llms_txt>\n`;
		result += "</page_context>\n\n";
		return result;
	}
	/**
	* Generate system observations before each step
	* @todo loop detection
	* @todo console error
	*/
	async #handleObservations(step) {
		if (this.#states.totalWaitTime >= 3) this.pushObservation(`You have waited ${this.#states.totalWaitTime} seconds accumulatively. DO NOT wait any longer unless you have a good reason.`);
		const currentURL = this.#states.browserState?.url || "";
		if (currentURL !== this.#states.lastURL) {
			this.pushObservation(`Page navigated to → ${currentURL}`);
			this.#states.lastURL = currentURL;
			await waitFor$1(.5);
		}
		const remaining = this.config.maxSteps - step;
		if (remaining === 5) this.pushObservation(`⚠️ Only ${remaining} steps remaining. Consider wrapping up or calling done with partial results.`);
		else if (remaining === 2) this.pushObservation(`⚠️ Critical: Only ${remaining} steps left! You must finish the task or call done immediately.`);
		if (this.#observations.length > 0) {
			for (const content of this.#observations) {
				this.history.push({
					type: "observation",
					content
				});
				console.log(chalk.cyan("Observation:"), content);
			}
			this.#observations = [];
			this.#emitHistoryChange();
		}
	}
	async #assembleUserPrompt() {
		const browserState = this.#states.browserState;
		let prompt = "";
		prompt += "<agent_state>\n";
		prompt += "<user_request>\n";
		prompt += `${this.task}\n`;
		prompt += "</user_request>\n";
		prompt += "</agent_state>\n\n";
		prompt += this.#getSystemInstructions();
		prompt += "<agent_history>\n";
		let stepIndex = 0;
		for (const event of this.history) if (event.type === "step") {
			stepIndex++;
			prompt += `<step_${stepIndex}>\n`;
			prompt += `Evaluation of Previous Step: ${event.reflection.evaluation_previous_goal}\n`;
			prompt += `Memory: ${event.reflection.memory}\n`;
			prompt += `Next Goal: ${event.reflection.next_goal}\n`;
			prompt += `Action Results: ${event.action.output}\n`;
			prompt += `</step_${stepIndex}>\n`;
		} else if (event.type === "observation") prompt += `<sys>${event.content}</sys>\n`;
		else if (event.type === "user_takeover") prompt += `<sys>User took over control and made changes to the page</sys>\n`;
		else if (event.type === "error") {}
		prompt += "</agent_history>\n\n";
		prompt += await this.#getPageContext();
		let pageContent = browserState.content;
		if (this.config.transformPageContent) pageContent = await this.config.transformPageContent(pageContent);
		prompt += "<browser_state>\n";
		prompt += browserState.header + "\n";
		prompt += pageContent + "\n";
		prompt += browserState.footer + "\n\n";
		prompt += "</browser_state>\n\n";
		const stepCount = this.history.filter((e) => e.type === "step").length;
		prompt += "<step_info>\n";
		prompt += `Step ${stepCount + 1} of ${this.config.maxSteps} max possible steps\n`;
		prompt += "</step_info>\n";
		return prompt;
	}
	dispose() {
		console.log("Disposing PageAgent...");
		this.disposed = true;
		this.pageController.dispose();
		this.#abortController.abort();
		this.dispatchEvent(new Event("dispose"));
		this.config.onDispose?.(this);
	}
};
//#endregion
//#region ../page-controller/src/utils/index.ts
function isHTMLElement(el) {
	return !!el && el.nodeType === 1;
}
function isInputElement(el) {
	return el?.nodeType === 1 && el.tagName === "INPUT";
}
function isTextAreaElement(el) {
	return el?.nodeType === 1 && el.tagName === "TEXTAREA";
}
function isSelectElement(el) {
	return el?.nodeType === 1 && el.tagName === "SELECT";
}
function isAnchorElement(el) {
	return el?.nodeType === 1 && el.tagName === "A";
}
/** Iframe offset for translating element coordinates to top-frame viewport. */
function getIframeOffset(element) {
	const frame = element.ownerDocument.defaultView?.frameElement;
	if (!frame) return {
		x: 0,
		y: 0
	};
	const rect = frame.getBoundingClientRect();
	return {
		x: rect.left,
		y: rect.top
	};
}
/**
* Get native value setter from the element's own prototype (iframe-safe).
* @note for React
*/
function getNativeValueSetter(element) {
	return Object.getOwnPropertyDescriptor(Object.getPrototypeOf(element), "value").set;
}
async function waitFor(seconds) {
	await new Promise((resolve) => setTimeout(resolve, seconds * 1e3));
}
/**
* Move the visual pointer to a position within an element.
* @param x - x coordinate in the element's document viewport
* @param y - y coordinate in the element's document viewport
*/
async function movePointerToElement(element, x, y) {
	const offset = getIframeOffset(element);
	window.dispatchEvent(new CustomEvent("PageAgent::MovePointerTo", { detail: {
		x: x + offset.x,
		y: y + offset.y
	} }));
	await waitFor(.3);
}
async function clickPointer() {
	window.dispatchEvent(new CustomEvent("PageAgent::ClickPointer"));
}
async function enablePassThrough() {
	window.dispatchEvent(new CustomEvent("PageAgent::EnablePassThrough"));
}
async function disablePassThrough() {
	window.dispatchEvent(new CustomEvent("PageAgent::DisablePassThrough"));
}
//#endregion
//#region ../page-controller/src/actions.ts
/**
* Get the HTMLElement by index from a selectorMap.
* @private Internal method, subject to change at any time.
*/
function getElementByIndex(selectorMap, index) {
	const interactiveNode = selectorMap.get(index);
	if (!interactiveNode) throw new Error(`No interactive element found at index ${index}`);
	const element = interactiveNode.ref;
	if (!element) throw new Error(`Element at index ${index} does not have a reference`);
	if (!isHTMLElement(element)) throw new Error(`Element at index ${index} is not an HTMLElement`);
	return element;
}
var TOGGLE_ROLES = new Set([
	"switch",
	"checkbox",
	"radio",
	"menuitemcheckbox",
	"menuitemradio"
]);
/**
* Read the on/off state of a toggle-like control (switch, checkbox, aria-pressed
* button, Radix `data-state`). Returns null when the element is not a toggle, so
* callers can fall back to a generic click message.
*
* @private Internal method, subject to change at any time.
*/
function readToggleState(element) {
	const role = element.getAttribute("role");
	const ariaChecked = element.getAttribute("aria-checked");
	const ariaPressed = element.getAttribute("aria-pressed");
	const dataState = element.getAttribute("data-state");
	if (!(role !== null && TOGGLE_ROLES.has(role) || ariaChecked !== null || ariaPressed !== null || dataState === "checked" || dataState === "unchecked" || isInputElement(element) && (element.type === "checkbox" || element.type === "radio"))) return null;
	if (ariaChecked !== null) return {
		on: ariaChecked === "true",
		raw: `aria-checked=${ariaChecked}`
	};
	if (ariaPressed !== null) return {
		on: ariaPressed === "true",
		raw: `aria-pressed=${ariaPressed}`
	};
	if (dataState === "checked" || dataState === "unchecked") return {
		on: dataState === "checked",
		raw: `data-state=${dataState}`
	};
	if (isInputElement(element)) return {
		on: element.checked,
		raw: `checked=${element.checked}`
	};
	return null;
}
/**
* Re-fetch the live element after a click. Controlled React toggles re-render,
* which may replace the node; resolving by id returns the current node so its
* post-click state is read accurately.
*
* @private Internal method, subject to change at any time.
*/
function getLiveElement(element) {
	if (element.id) {
		const byId = element.ownerDocument.getElementById(element.id);
		if (byId instanceof HTMLElement) return byId;
	}
	return element;
}
/**
* Best-effort accessible name for an interactive element, used to refer to it in
* action feedback without the noisy attribute dump from the serialized tree.
*
* @private Internal method, subject to change at any time.
*/
function getAccessibleName(element) {
	const ariaLabel = element.getAttribute("aria-label")?.trim();
	if (ariaLabel) return ariaLabel;
	const labelledBy = element.getAttribute("aria-labelledby");
	if (labelledBy) {
		const text = labelledBy.split(/\s+/).map((id) => element.ownerDocument.getElementById(id)?.textContent?.trim() ?? "").filter(Boolean).join(" ");
		if (text) return text;
	}
	const text = element.textContent?.trim();
	if (text) return text;
	return "";
}
var lastClickedElement = null;
function blurLastClickedElement() {
	if (lastClickedElement) {
		lastClickedElement.dispatchEvent(new PointerEvent("pointerout", { bubbles: true }));
		lastClickedElement.dispatchEvent(new PointerEvent("pointerleave", { bubbles: false }));
		lastClickedElement.dispatchEvent(new MouseEvent("mouseout", { bubbles: true }));
		lastClickedElement.dispatchEvent(new MouseEvent("mouseleave", { bubbles: false }));
		lastClickedElement.blur();
		lastClickedElement = null;
	}
}
/**
* Simulate a full click following W3C Pointer Events + UI Events spec order:
* pointerover/enter → mouseover/enter → pointerdown → mousedown → [focus] →
* pointerup → mouseup → click
*
* @private Internal method, subject to change at any time.
*/
async function clickElement(element) {
	blurLastClickedElement();
	lastClickedElement = element;
	await scrollIntoViewIfNeeded(element);
	const frame = element.ownerDocument.defaultView?.frameElement;
	if (frame) await scrollIntoViewIfNeeded(frame);
	const rect = element.getBoundingClientRect();
	const x = rect.left + rect.width / 2;
	const y = rect.top + rect.height / 2;
	await movePointerToElement(element, x, y);
	await clickPointer();
	await waitFor(.1);
	const doc = element.ownerDocument;
	await enablePassThrough();
	const hitTarget = doc.elementFromPoint(x, y);
	await disablePassThrough();
	const target = hitTarget instanceof HTMLElement && element.contains(hitTarget) ? hitTarget : element;
	const pointerOpts = {
		bubbles: true,
		cancelable: true,
		clientX: x,
		clientY: y,
		pointerType: "mouse"
	};
	const mouseOpts = {
		bubbles: true,
		cancelable: true,
		clientX: x,
		clientY: y,
		button: 0
	};
	target.dispatchEvent(new PointerEvent("pointerover", pointerOpts));
	target.dispatchEvent(new PointerEvent("pointerenter", {
		...pointerOpts,
		bubbles: false
	}));
	target.dispatchEvent(new MouseEvent("mouseover", mouseOpts));
	target.dispatchEvent(new MouseEvent("mouseenter", {
		...mouseOpts,
		bubbles: false
	}));
	target.dispatchEvent(new PointerEvent("pointerdown", pointerOpts));
	target.dispatchEvent(new MouseEvent("mousedown", mouseOpts));
	element.focus({ preventScroll: true });
	target.dispatchEvent(new PointerEvent("pointerup", pointerOpts));
	target.dispatchEvent(new MouseEvent("mouseup", mouseOpts));
	target.click();
	await waitFor(.2);
}
/**
* @private Internal method, subject to change at any time.
*/
async function inputTextElement(element, text) {
	const isContentEditable = element.isContentEditable;
	if (!isInputElement(element) && !isTextAreaElement(element) && !isContentEditable) throw new Error("Element is not an input, textarea, or contenteditable");
	await clickElement(element);
	if (isContentEditable) {
		if (element.dispatchEvent(new InputEvent("beforeinput", {
			bubbles: true,
			cancelable: true,
			inputType: "deleteContent"
		}))) {
			element.innerText = "";
			element.dispatchEvent(new InputEvent("input", {
				bubbles: true,
				inputType: "deleteContent"
			}));
		}
		if (element.dispatchEvent(new InputEvent("beforeinput", {
			bubbles: true,
			cancelable: true,
			inputType: "insertText",
			data: text
		}))) {
			element.innerText = text;
			element.dispatchEvent(new InputEvent("input", {
				bubbles: true,
				inputType: "insertText",
				data: text
			}));
		}
		if (!(element.innerText.trim() === text.trim())) {
			element.focus();
			const doc = element.ownerDocument;
			const selection = (doc.defaultView || window).getSelection();
			const range = doc.createRange();
			range.selectNodeContents(element);
			selection?.removeAllRanges();
			selection?.addRange(range);
			doc.execCommand("delete", false);
			doc.execCommand("insertText", false, text);
		}
		element.dispatchEvent(new Event("change", { bubbles: true }));
		element.blur();
	} else getNativeValueSetter(element).call(element, text);
	if (!isContentEditable) element.dispatchEvent(new Event("input", { bubbles: true }));
	await waitFor(.1);
	blurLastClickedElement();
}
/**
* @todo browser-use version is very complex and supports menu tags, need to follow up
* @private Internal method, subject to change at any time.
*/
async function selectOptionElement(selectElement, optionText) {
	if (!isSelectElement(selectElement)) throw new Error("Element is not a select element");
	const option = Array.from(selectElement.options).find((opt) => opt.textContent?.trim() === optionText.trim());
	if (!option) throw new Error(`Option with text "${optionText}" not found in select element`);
	selectElement.value = option.value;
	selectElement.dispatchEvent(new Event("change", { bubbles: true }));
	await waitFor(.1);
}
/**
* @private Internal method, subject to change at any time.
*/
async function scrollIntoViewIfNeeded(element) {
	const el = element;
	if (typeof el.scrollIntoViewIfNeeded === "function") el.scrollIntoViewIfNeeded();
	else element.scrollIntoView({
		behavior: "auto",
		block: "center",
		inline: "nearest"
	});
}
async function scrollVertically(scroll_amount, element) {
	if (element) {
		const targetElement = element;
		let currentElement = targetElement;
		let scrollSuccess = false;
		let scrolledElement = null;
		let scrollDelta = 0;
		let attempts = 0;
		const dy = scroll_amount;
		while (currentElement && attempts < 10) {
			const computedStyle = window.getComputedStyle(currentElement);
			const hasScrollableY = /(auto|scroll|overlay)/.test(computedStyle.overflowY) || computedStyle.scrollbarWidth && computedStyle.scrollbarWidth !== "auto" || computedStyle.scrollbarGutter && computedStyle.scrollbarGutter !== "auto";
			const canScrollVertically = currentElement.scrollHeight > currentElement.clientHeight;
			if (hasScrollableY && canScrollVertically) {
				const beforeScroll = currentElement.scrollTop;
				const maxScroll = currentElement.scrollHeight - currentElement.clientHeight;
				let scrollAmount = dy / 3;
				if (scrollAmount > 0) scrollAmount = Math.min(scrollAmount, maxScroll - beforeScroll);
				else scrollAmount = Math.max(scrollAmount, -beforeScroll);
				currentElement.scrollTop = beforeScroll + scrollAmount;
				const actualScrollDelta = currentElement.scrollTop - beforeScroll;
				if (Math.abs(actualScrollDelta) > .5) {
					scrollSuccess = true;
					scrolledElement = currentElement;
					scrollDelta = actualScrollDelta;
					break;
				}
			}
			if (currentElement === document.body || currentElement === document.documentElement) break;
			currentElement = currentElement.parentElement;
			attempts++;
		}
		if (scrollSuccess) return `Scrolled container (${scrolledElement?.tagName}) by ${scrollDelta}px`;
		else return `No scrollable container found for element (${targetElement.tagName})`;
	}
	const dy = scroll_amount;
	const bigEnough = (el) => el.clientHeight >= window.innerHeight * .5;
	const canScroll = (el) => Boolean(el && /(auto|scroll|overlay)/.test(getComputedStyle(el).overflowY) && el.scrollHeight > el.clientHeight && bigEnough(el));
	let el = document.activeElement;
	while (el && !canScroll(el) && el !== document.body) el = el.parentElement;
	el = canScroll(el) ? el : Array.from(document.querySelectorAll("*")).find(canScroll) || document.scrollingElement || document.documentElement;
	if (el === document.scrollingElement || el === document.documentElement || el === document.body) {
		const scrollBefore = window.scrollY;
		const scrollMax = document.documentElement.scrollHeight - window.innerHeight;
		window.scrollBy(0, dy);
		const scrollAfter = window.scrollY;
		const scrolled = scrollAfter - scrollBefore;
		if (Math.abs(scrolled) < 1) return dy > 0 ? `⚠️ Already at the bottom of the page, cannot scroll down further.` : `⚠️ Already at the top of the page, cannot scroll up further.`;
		const reachedBottom = dy > 0 && scrollAfter >= scrollMax - 1;
		const reachedTop = dy < 0 && scrollAfter <= 1;
		if (reachedBottom) return `✅ Scrolled page by ${scrolled}px. Reached the bottom of the page.`;
		if (reachedTop) return `✅ Scrolled page by ${scrolled}px. Reached the top of the page.`;
		return `✅ Scrolled page by ${scrolled}px.`;
	} else {
		const warningMsg = `The document is not scrollable. Falling back to container scroll.`;
		console.log(`[PageController] ${warningMsg}`);
		const scrollBefore = el.scrollTop;
		const scrollMax = el.scrollHeight - el.clientHeight;
		el.scrollBy({
			top: dy,
			behavior: "smooth"
		});
		await waitFor(.1);
		const scrollAfter = el.scrollTop;
		const scrolled = scrollAfter - scrollBefore;
		if (Math.abs(scrolled) < 1) return dy > 0 ? `⚠️ ${warningMsg} Already at the bottom of container (${el.tagName}), cannot scroll down further.` : `⚠️ ${warningMsg} Already at the top of container (${el.tagName}), cannot scroll up further.`;
		const reachedBottom = dy > 0 && scrollAfter >= scrollMax - 1;
		const reachedTop = dy < 0 && scrollAfter <= 1;
		if (reachedBottom) return `✅ ${warningMsg} Scrolled container (${el.tagName}) by ${scrolled}px. Reached the bottom.`;
		if (reachedTop) return `✅ ${warningMsg} Scrolled container (${el.tagName}) by ${scrolled}px. Reached the top.`;
		return `✅ ${warningMsg} Scrolled container (${el.tagName}) by ${scrolled}px.`;
	}
}
async function scrollHorizontally(scroll_amount, element) {
	if (element) {
		const targetElement = element;
		let currentElement = targetElement;
		let scrollSuccess = false;
		let scrolledElement = null;
		let scrollDelta = 0;
		let attempts = 0;
		const dx = scroll_amount;
		while (currentElement && attempts < 10) {
			const computedStyle = window.getComputedStyle(currentElement);
			const hasScrollableX = /(auto|scroll|overlay)/.test(computedStyle.overflowX) || computedStyle.scrollbarWidth && computedStyle.scrollbarWidth !== "auto" || computedStyle.scrollbarGutter && computedStyle.scrollbarGutter !== "auto";
			const canScrollHorizontally = currentElement.scrollWidth > currentElement.clientWidth;
			if (hasScrollableX && canScrollHorizontally) {
				const beforeScroll = currentElement.scrollLeft;
				const maxScroll = currentElement.scrollWidth - currentElement.clientWidth;
				let scrollAmount = dx / 3;
				if (scrollAmount > 0) scrollAmount = Math.min(scrollAmount, maxScroll - beforeScroll);
				else scrollAmount = Math.max(scrollAmount, -beforeScroll);
				currentElement.scrollLeft = beforeScroll + scrollAmount;
				const actualScrollDelta = currentElement.scrollLeft - beforeScroll;
				if (Math.abs(actualScrollDelta) > .5) {
					scrollSuccess = true;
					scrolledElement = currentElement;
					scrollDelta = actualScrollDelta;
					break;
				}
			}
			if (currentElement === document.body || currentElement === document.documentElement) break;
			currentElement = currentElement.parentElement;
			attempts++;
		}
		if (scrollSuccess) return `Scrolled container (${scrolledElement?.tagName}) horizontally by ${scrollDelta}px`;
		else return `No horizontally scrollable container found for element (${targetElement.tagName})`;
	}
	const dx = scroll_amount;
	const bigEnough = (el) => el.clientWidth >= window.innerWidth * .5;
	const canScroll = (el) => Boolean(el && /(auto|scroll|overlay)/.test(getComputedStyle(el).overflowX) && el.scrollWidth > el.clientWidth && bigEnough(el));
	let el = document.activeElement;
	while (el && !canScroll(el) && el !== document.body) el = el.parentElement;
	el = canScroll(el) ? el : Array.from(document.querySelectorAll("*")).find(canScroll) || document.scrollingElement || document.documentElement;
	if (el === document.scrollingElement || el === document.documentElement || el === document.body) {
		const scrollBefore = window.scrollX;
		const scrollMax = document.documentElement.scrollWidth - window.innerWidth;
		window.scrollBy(dx, 0);
		const scrollAfter = window.scrollX;
		const scrolled = scrollAfter - scrollBefore;
		if (Math.abs(scrolled) < 1) return dx > 0 ? `⚠️ Already at the right edge of the page, cannot scroll right further.` : `⚠️ Already at the left edge of the page, cannot scroll left further.`;
		const reachedRight = dx > 0 && scrollAfter >= scrollMax - 1;
		const reachedLeft = dx < 0 && scrollAfter <= 1;
		if (reachedRight) return `✅ Scrolled page by ${scrolled}px. Reached the right edge of the page.`;
		if (reachedLeft) return `✅ Scrolled page by ${scrolled}px. Reached the left edge of the page.`;
		return `✅ Scrolled page horizontally by ${scrolled}px.`;
	} else {
		const warningMsg = `The document is not scrollable. Falling back to container scroll.`;
		console.log(`[PageController] ${warningMsg}`);
		const scrollBefore = el.scrollLeft;
		const scrollMax = el.scrollWidth - el.clientWidth;
		el.scrollBy({
			left: dx,
			behavior: "smooth"
		});
		await waitFor(.1);
		const scrollAfter = el.scrollLeft;
		const scrolled = scrollAfter - scrollBefore;
		if (Math.abs(scrolled) < 1) return dx > 0 ? `⚠️ ${warningMsg} Already at the right edge of container (${el.tagName}), cannot scroll right further.` : `⚠️ ${warningMsg} Already at the left edge of container (${el.tagName}), cannot scroll left further.`;
		const reachedRight = dx > 0 && scrollAfter >= scrollMax - 1;
		const reachedLeft = dx < 0 && scrollAfter <= 1;
		if (reachedRight) return `✅ ${warningMsg} Scrolled container (${el.tagName}) by ${scrolled}px. Reached the right edge.`;
		if (reachedLeft) return `✅ ${warningMsg} Scrolled container (${el.tagName}) by ${scrolled}px. Reached the left edge.`;
		return `✅ ${warningMsg} Scrolled container (${el.tagName}) horizontally by ${scrolled}px.`;
	}
}
//#endregion
//#region ../page-controller/src/dom/dom_tree/index.js
/**
* @file port from browser-use
* @see https://github.com/browser-use/browser-use/commits/main/browser_use/dom/dom_tree/index.js
* @match 0.5.9 d51b6e73daff7165fdd3e44debd667e7f5f7fdc5
*
* search @edit for all the changed lines.
*
* @edit export
* @edit add interactiveBlacklist interactiveWhitelist
* @edit adjustable opacity
* @edit direct dom ref
* @edit @workaround input.checked
* @edit smaller zIndex for highlight
* @edit no need for xpath
* @edit add `extra` field for extra data
* @edit scrollable element detection
* @edit add `data-browser-use-ignore` attribute
* @edit improve `sampleRect`, filter out rects with 0 area
* @edit exclude aria-hidden elements
* @edit make sure attributes exist for interactive candidates.
* @edit fix "aria-*" attributes check
* @edit add `data-page-agent-readonly` attribute
*/
var dom_tree_default = (args = {
	doHighlightElements: true,
	focusHighlightIndex: -1,
	viewportExpansion: 0,
	debugMode: false,
	/**
	* @edit
	*/
	/** @type {Element[]} */
	interactiveBlacklist: [],
	/** @type {Element[]} */
	interactiveWhitelist: [],
	highlightOpacity: .1,
	highlightLabelOpacity: .5
}) => {
	/**
	* @edit
	*/
	const { interactiveBlacklist, interactiveWhitelist, highlightOpacity, highlightLabelOpacity } = args;
	const { doHighlightElements, focusHighlightIndex, viewportExpansion, debugMode } = args;
	let highlightIndex = 0;
	/**
	* @edit add `extra` field for extra data
	*/
	const extraData = /* @__PURE__ */ new WeakMap();
	function addExtraData(element, data) {
		if (!element || element.nodeType !== Node.ELEMENT_NODE) return;
		extraData.set(element, {
			...extraData.get(element),
			...data
		});
	}
	const DOM_CACHE = {
		boundingRects: /* @__PURE__ */ new WeakMap(),
		clientRects: /* @__PURE__ */ new WeakMap(),
		computedStyles: /* @__PURE__ */ new WeakMap(),
		clearCache: () => {
			DOM_CACHE.boundingRects = /* @__PURE__ */ new WeakMap();
			DOM_CACHE.clientRects = /* @__PURE__ */ new WeakMap();
			DOM_CACHE.computedStyles = /* @__PURE__ */ new WeakMap();
		}
	};
	/**
	* Gets the cached bounding rect for an element.
	*
	* @param {HTMLElement} element - The element to get the bounding rect for.
	* @returns {DOMRect | null} The cached bounding rect, or null if the element is not found.
	*/
	function getCachedBoundingRect(element) {
		if (!element) return null;
		if (DOM_CACHE.boundingRects.has(element)) return DOM_CACHE.boundingRects.get(element);
		const rect = element.getBoundingClientRect();
		if (rect) DOM_CACHE.boundingRects.set(element, rect);
		return rect;
	}
	/**
	* Gets the cached computed style for an element.
	*
	* @param {HTMLElement} element - The element to get the computed style for.
	* @returns {CSSStyleDeclaration | null} The cached computed style, or null if the element is not found.
	*/
	function getCachedComputedStyle(element) {
		if (!element) return null;
		if (DOM_CACHE.computedStyles.has(element)) return DOM_CACHE.computedStyles.get(element);
		const style = window.getComputedStyle(element);
		if (style) DOM_CACHE.computedStyles.set(element, style);
		return style;
	}
	/**
	* Gets the cached client rects for an element.
	*
	* @param {HTMLElement} element - The element to get the client rects for.
	* @returns {DOMRectList | null} The cached client rects, or null if the element is not found.
	*/
	function getCachedClientRects(element) {
		if (!element) return null;
		if (DOM_CACHE.clientRects.has(element)) return DOM_CACHE.clientRects.get(element);
		const rects = element.getClientRects();
		if (rects) DOM_CACHE.clientRects.set(element, rects);
		return rects;
	}
	/**
	* Hash map of DOM nodes indexed by their highlight index.
	*
	* @type {Object<string, any>}
	*/
	const DOM_HASH_MAP = {};
	const ID = { current: 0 };
	const HIGHLIGHT_CONTAINER_ID = "playwright-highlight-container";
	/**
	* Highlights an element in the DOM and returns the index of the next element.
	*
	* @param {HTMLElement} element - The element to highlight.
	* @param {number} index - The index of the element.
	* @param {HTMLElement | null} parentIframe - The parent iframe node.
	* @returns {number} The index of the next element.
	*/
	function highlightElement(element, index, parentIframe = null) {
		if (!element) return index;
		const overlays = [];
		/**
		* @type {HTMLElement | null}
		*/
		let label = null;
		let labelWidth = 20;
		let labelHeight = 16;
		let cleanupFn = null;
		try {
			let container = document.getElementById(HIGHLIGHT_CONTAINER_ID);
			if (!container) {
				container = document.createElement("div");
				container.id = HIGHLIGHT_CONTAINER_ID;
				container.style.position = "fixed";
				container.style.pointerEvents = "none";
				container.style.top = "0";
				container.style.left = "0";
				container.style.width = "100%";
				container.style.height = "100%";
				/**
				* @edit smaller zIndex for highlight
				*/
				container.style.zIndex = "2147483640";
				container.style.backgroundColor = "transparent";
				document.body.appendChild(container);
			}
			const rects = element.getClientRects();
			if (!rects || rects.length === 0) return index;
			const colors = [
				"#FF0000",
				"#00FF00",
				"#0000FF",
				"#FFA500",
				"#800080",
				"#008080",
				"#FF69B4",
				"#4B0082",
				"#FF4500",
				"#2E8B57",
				"#DC143C",
				"#4682B4"
			];
			let baseColor = colors[index % colors.length];
			/**
			* @edit adjustable opacity
			*/
			const backgroundColor = baseColor + Math.floor(highlightOpacity * 255).toString(16).padStart(2, "0");
			baseColor = baseColor + Math.floor(highlightLabelOpacity * 255).toString(16).padStart(2, "0");
			let iframeOffset = {
				x: 0,
				y: 0
			};
			if (parentIframe) {
				const iframeRect = parentIframe.getBoundingClientRect();
				iframeOffset.x = iframeRect.left;
				iframeOffset.y = iframeRect.top;
			}
			const fragment = document.createDocumentFragment();
			for (const rect of rects) {
				if (rect.width === 0 || rect.height === 0) continue;
				const overlay = document.createElement("div");
				overlay.style.position = "fixed";
				overlay.style.border = `2px solid ${baseColor}`;
				overlay.style.backgroundColor = backgroundColor;
				overlay.style.pointerEvents = "none";
				overlay.style.boxSizing = "border-box";
				const top = rect.top + iframeOffset.y;
				const left = rect.left + iframeOffset.x;
				overlay.style.top = `${top}px`;
				overlay.style.left = `${left}px`;
				overlay.style.width = `${rect.width}px`;
				overlay.style.height = `${rect.height}px`;
				fragment.appendChild(overlay);
				overlays.push({
					element: overlay,
					initialRect: rect
				});
			}
			const firstRect = rects[0];
			label = document.createElement("div");
			label.className = "playwright-highlight-label";
			label.style.position = "fixed";
			label.style.background = baseColor;
			label.style.color = "white";
			label.style.padding = "1px 4px";
			label.style.borderRadius = "4px";
			label.style.fontSize = `${Math.min(12, Math.max(8, firstRect.height / 2))}px`;
			label.textContent = index.toString();
			labelWidth = label.offsetWidth > 0 ? label.offsetWidth : labelWidth;
			labelHeight = label.offsetHeight > 0 ? label.offsetHeight : labelHeight;
			const firstRectTop = firstRect.top + iframeOffset.y;
			const firstRectLeft = firstRect.left + iframeOffset.x;
			let labelTop = firstRectTop + 2;
			let labelLeft = firstRectLeft + firstRect.width - labelWidth - 2;
			if (firstRect.width < labelWidth + 4 || firstRect.height < labelHeight + 4) {
				labelTop = firstRectTop - labelHeight - 2;
				labelLeft = firstRectLeft + firstRect.width - labelWidth;
				if (labelLeft < iframeOffset.x) labelLeft = firstRectLeft;
			}
			labelTop = Math.max(0, Math.min(labelTop, window.innerHeight - labelHeight));
			labelLeft = Math.max(0, Math.min(labelLeft, window.innerWidth - labelWidth));
			label.style.top = `${labelTop}px`;
			label.style.left = `${labelLeft}px`;
			fragment.appendChild(label);
			const updatePositions = () => {
				const newRects = element.getClientRects();
				let newIframeOffset = {
					x: 0,
					y: 0
				};
				if (parentIframe) {
					const iframeRect = parentIframe.getBoundingClientRect();
					newIframeOffset.x = iframeRect.left;
					newIframeOffset.y = iframeRect.top;
				}
				overlays.forEach((overlayData, i) => {
					if (i < newRects.length) {
						const newRect = newRects[i];
						const newTop = newRect.top + newIframeOffset.y;
						const newLeft = newRect.left + newIframeOffset.x;
						overlayData.element.style.top = `${newTop}px`;
						overlayData.element.style.left = `${newLeft}px`;
						overlayData.element.style.width = `${newRect.width}px`;
						overlayData.element.style.height = `${newRect.height}px`;
						overlayData.element.style.display = newRect.width === 0 || newRect.height === 0 ? "none" : "block";
					} else overlayData.element.style.display = "none";
				});
				if (newRects.length < overlays.length) for (let i = newRects.length; i < overlays.length; i++) overlays[i].element.style.display = "none";
				if (label && newRects.length > 0) {
					const firstNewRect = newRects[0];
					const firstNewRectTop = firstNewRect.top + newIframeOffset.y;
					const firstNewRectLeft = firstNewRect.left + newIframeOffset.x;
					let newLabelTop = firstNewRectTop + 2;
					let newLabelLeft = firstNewRectLeft + firstNewRect.width - labelWidth - 2;
					if (firstNewRect.width < labelWidth + 4 || firstNewRect.height < labelHeight + 4) {
						newLabelTop = firstNewRectTop - labelHeight - 2;
						newLabelLeft = firstNewRectLeft + firstNewRect.width - labelWidth;
						if (newLabelLeft < newIframeOffset.x) newLabelLeft = firstNewRectLeft;
					}
					newLabelTop = Math.max(0, Math.min(newLabelTop, window.innerHeight - labelHeight));
					newLabelLeft = Math.max(0, Math.min(newLabelLeft, window.innerWidth - labelWidth));
					label.style.top = `${newLabelTop}px`;
					label.style.left = `${newLabelLeft}px`;
					label.style.display = "block";
				} else if (label) label.style.display = "none";
			};
			const throttleFunction = (func, delay) => {
				let lastCall = 0;
				return (...args) => {
					const now = performance.now();
					if (now - lastCall < delay) return;
					lastCall = now;
					return func(...args);
				};
			};
			const throttledUpdatePositions = throttleFunction(updatePositions, 16);
			window.addEventListener("scroll", throttledUpdatePositions, true);
			window.addEventListener("resize", throttledUpdatePositions);
			cleanupFn = () => {
				window.removeEventListener("scroll", throttledUpdatePositions, true);
				window.removeEventListener("resize", throttledUpdatePositions);
				overlays.forEach((overlay) => overlay.element.remove());
				if (label) label.remove();
			};
			container.appendChild(fragment);
			return index + 1;
		} finally {
			if (cleanupFn) (window._highlightCleanupFunctions = window._highlightCleanupFunctions || []).push(cleanupFn);
		}
	}
	/**
	* @edit scrollable element detection
	* Checks if an element is scrollable. if so, return the scrollable distance on each direction (left right top bottom). if not return null.
	* @note distance smaller than 4 will be considered as not scrollable.
	* @note only check block elements, not inline elements.
	*/
	function isScrollableElement(element) {
		if (!element || element.nodeType !== Node.ELEMENT_NODE) return null;
		const style = getCachedComputedStyle(element);
		if (!style) return null;
		const display = style.display;
		if (display === "inline" || display === "inline-block") return null;
		const overflowX = style.overflowX;
		const overflowY = style.overflowY;
		const hasScrollbarSignal = style.scrollbarWidth && style.scrollbarWidth !== "auto" || style.scrollbarGutter && style.scrollbarGutter !== "auto";
		const scrollableX = overflowX === "auto" || overflowX === "scroll";
		const scrollableY = overflowY === "auto" || overflowY === "scroll";
		if (!scrollableX && !scrollableY && !hasScrollbarSignal) return null;
		const scrollWidth = element.scrollWidth - element.clientWidth;
		const scrollHeight = element.scrollHeight - element.clientHeight;
		const threshold = 4;
		if (scrollWidth < threshold && scrollHeight < threshold) return null;
		if (!scrollableY && !hasScrollbarSignal && scrollWidth < threshold) return null;
		if (!scrollableX && !hasScrollbarSignal && scrollHeight < threshold) return null;
		const distanceToTop = element.scrollTop;
		const distanceToLeft = element.scrollLeft;
		const scrollData = {
			top: distanceToTop,
			right: element.scrollWidth - element.clientWidth - element.scrollLeft,
			bottom: element.scrollHeight - element.clientHeight - element.scrollTop,
			left: distanceToLeft
		};
		addExtraData(element, {
			scrollable: true,
			scrollData
		});
		return scrollData;
	}
	/**
	* Checks if a text node is visible.
	*
	* @param {Text} textNode - The text node to check.
	* @returns {boolean} Whether the text node is visible.
	*/
	function isTextNodeVisible(textNode) {
		try {
			if (viewportExpansion === -1) {
				const parentElement = textNode.parentElement;
				if (!parentElement) return false;
				try {
					return parentElement.checkVisibility({
						checkOpacity: true,
						checkVisibilityCSS: true
					});
				} catch (e) {
					const style = window.getComputedStyle(parentElement);
					return style.display !== "none" && style.visibility !== "hidden" && style.opacity !== "0";
				}
			}
			const range = document.createRange();
			range.selectNodeContents(textNode);
			const rects = range.getClientRects();
			if (!rects || rects.length === 0) return false;
			let isAnyRectVisible = false;
			let isAnyRectInViewport = false;
			for (const rect of rects) if (rect.width > 0 && rect.height > 0) {
				isAnyRectVisible = true;
				if (!(rect.bottom < -viewportExpansion || rect.top > window.innerHeight + viewportExpansion || rect.right < -viewportExpansion || rect.left > window.innerWidth + viewportExpansion)) {
					isAnyRectInViewport = true;
					break;
				}
			}
			if (!isAnyRectVisible || !isAnyRectInViewport) return false;
			const parentElement = textNode.parentElement;
			if (!parentElement) return false;
			try {
				return parentElement.checkVisibility({
					checkOpacity: true,
					checkVisibilityCSS: true
				});
			} catch (e) {
				const style = window.getComputedStyle(parentElement);
				return style.display !== "none" && style.visibility !== "hidden" && style.opacity !== "0";
			}
		} catch (e) {
			console.warn("Error checking text node visibility:", e);
			return false;
		}
	}
	/**
	* Checks if an element is accepted.
	*
	* @param {HTMLElement} element - The element to check.
	* @returns {boolean} Whether the element is accepted.
	*/
	function isElementAccepted(element) {
		if (!element || !element.tagName) return false;
		const alwaysAccept = new Set([
			"body",
			"div",
			"main",
			"article",
			"section",
			"nav",
			"header",
			"footer"
		]);
		const tagName = element.tagName.toLowerCase();
		if (alwaysAccept.has(tagName)) return true;
		return !new Set([
			"svg",
			"script",
			"style",
			"link",
			"meta",
			"noscript",
			"template"
		]).has(tagName);
	}
	/**
	* Checks if an element is visible.
	*
	* @param {HTMLElement} element - The element to check.
	* @returns {boolean} Whether the element is visible.
	*/
	function isElementVisible(element) {
		const style = getCachedComputedStyle(element);
		return element.offsetWidth > 0 && element.offsetHeight > 0 && style?.visibility !== "hidden" && style?.display !== "none";
	}
	/**
	* Checks if an element is interactive.
	*
	* lots of comments, and uncommented code - to show the logic of what we already tried
	*
	* One of the things we tried at the beginning was also to use event listeners, and other fancy class, style stuff -> what actually worked best was just combining most things with computed cursor style :)
	*
	* @param {HTMLElement} element - The element to check.
	*/
	function isInteractiveElement(element) {
		if (!element || element.nodeType !== Node.ELEMENT_NODE) return false;
		/**
		* @edit add interactiveBlacklist interactiveWhitelist
		*/
		if (interactiveBlacklist.includes(element)) return false;
		if (interactiveWhitelist.includes(element)) return true;
		const tagName = element.tagName.toLowerCase();
		const style = getCachedComputedStyle(element);
		const interactiveCursors = new Set([
			"pointer",
			"move",
			"text",
			"grab",
			"grabbing",
			"cell",
			"copy",
			"alias",
			"all-scroll",
			"col-resize",
			"context-menu",
			"crosshair",
			"e-resize",
			"ew-resize",
			"help",
			"n-resize",
			"ne-resize",
			"nesw-resize",
			"ns-resize",
			"nw-resize",
			"nwse-resize",
			"row-resize",
			"s-resize",
			"se-resize",
			"sw-resize",
			"vertical-text",
			"w-resize",
			"zoom-in",
			"zoom-out"
		]);
		const nonInteractiveCursors = new Set([
			"not-allowed",
			"no-drop",
			"wait",
			"progress",
			"initial",
			"inherit"
		]);
		/**
		* Checks if an element has an interactive pointer.
		*
		* @param {HTMLElement} element - The element to check.
		* @returns {boolean} Whether the element has an interactive pointer.
		*/
		function doesElementHaveInteractivePointer(element) {
			if (element.tagName.toLowerCase() === "html") return false;
			if (style?.cursor && interactiveCursors.has(style.cursor)) return true;
			return false;
		}
		if (doesElementHaveInteractivePointer(element)) return true;
		const interactiveElements = new Set([
			"a",
			"button",
			"input",
			"select",
			"textarea",
			"details",
			"summary",
			"label",
			"option",
			"optgroup",
			"fieldset",
			"legend"
		]);
		const explicitDisableTags = new Set(["disabled", "readonly"]);
		if (interactiveElements.has(tagName)) {
			if (style?.cursor && nonInteractiveCursors.has(style.cursor)) return false;
			for (const disableTag of explicitDisableTags) if (element.hasAttribute(disableTag) || element.getAttribute(disableTag) === "true" || element.getAttribute(disableTag) === "") return false;
			if (element.disabled) return false;
			if (element.readOnly) return false;
			if (element.inert) return false;
			return true;
		}
		const role = element.getAttribute("role");
		const ariaRole = element.getAttribute("aria-role");
		if (element.getAttribute("contenteditable") === "true" || element.isContentEditable) return true;
		if (element.classList && (element.classList.contains("button") || element.classList.contains("dropdown-toggle") || element.getAttribute("data-index") || element.getAttribute("data-toggle") === "dropdown" || element.getAttribute("aria-haspopup") === "true")) return true;
		const interactiveRoles = new Set([
			"button",
			"menu",
			"menubar",
			"menuitem",
			"menuitemradio",
			"menuitemcheckbox",
			"radio",
			"checkbox",
			"tab",
			"switch",
			"slider",
			"spinbutton",
			"combobox",
			"searchbox",
			"textbox",
			"listbox",
			"option",
			"scrollbar"
		]);
		if (interactiveElements.has(tagName) || role && interactiveRoles.has(role) || ariaRole && interactiveRoles.has(ariaRole)) return true;
		try {
			if (typeof getEventListeners === "function") {
				const listeners = getEventListeners(element);
				for (const eventType of [
					"click",
					"mousedown",
					"mouseup",
					"dblclick"
				]) if (listeners[eventType] && listeners[eventType].length > 0) return true;
			}
			const getEventListenersForNode = element?.ownerDocument?.defaultView?.getEventListenersForNode || window.getEventListenersForNode;
			if (typeof getEventListenersForNode === "function") {
				const listeners = getEventListenersForNode(element);
				for (const eventType of [
					"click",
					"mousedown",
					"mouseup",
					"keydown",
					"keyup",
					"submit",
					"change",
					"input",
					"focus",
					"blur"
				]) for (const listener of listeners) if (listener.type === eventType) return true;
			}
			for (const attr of [
				"onclick",
				"onmousedown",
				"onmouseup",
				"ondblclick"
			]) if (element.hasAttribute(attr) || typeof element[attr] === "function") return true;
		} catch (e) {}
		/**
		* @edit scrollable element detection
		*/
		if (isScrollableElement(element)) return true;
		return false;
	}
	/**
	* Checks if an element is the topmost element at its position.
	*
	* @param {HTMLElement} element - The element to check.
	* @returns {boolean} Whether the element is the topmost element at its position.
	*/
	function isTopElement(element) {
		if (viewportExpansion === -1) return true;
		const rects = getCachedClientRects(element);
		if (!rects || rects.length === 0) return false;
		let isAnyRectInViewport = false;
		for (const rect of rects) if (rect.width > 0 && rect.height > 0 && !(rect.bottom < -viewportExpansion || rect.top > window.innerHeight + viewportExpansion || rect.right < -viewportExpansion || rect.left > window.innerWidth + viewportExpansion)) {
			isAnyRectInViewport = true;
			break;
		}
		if (!isAnyRectInViewport) return false;
		if (element.ownerDocument !== window.document) return true;
		/**
		* @edit improve `sampleRect`, filter out rects with 0 area
		*/
		let rect = Array.from(rects).find((r) => r.width > 0 && r.height > 0);
		if (!rect) return false;
		const shadowRoot = element.getRootNode();
		if (shadowRoot instanceof ShadowRoot) {
			const centerX = rect.left + rect.width / 2;
			const centerY = rect.top + rect.height / 2;
			try {
				const topEl = shadowRoot.elementFromPoint(centerX, centerY);
				if (!topEl) return false;
				let current = topEl;
				while (current && current !== shadowRoot) {
					if (current === element) return true;
					current = current.parentElement;
				}
				return false;
			} catch (e) {
				return true;
			}
		}
		const margin = 5;
		return [
			{
				x: rect.left + rect.width / 2,
				y: rect.top + rect.height / 2
			},
			{
				x: rect.left + margin,
				y: rect.top + margin
			},
			{
				x: rect.right - margin,
				y: rect.bottom - margin
			}
		].some(({ x, y }) => {
			try {
				const topEl = document.elementFromPoint(x, y);
				if (!topEl) return false;
				let current = topEl;
				while (current && current !== document.documentElement) {
					if (current === element) return true;
					current = current.parentElement;
				}
				return false;
			} catch (e) {
				return true;
			}
		});
	}
	/**
	* Checks if an element is within the expanded viewport.
	*
	* @param {HTMLElement} element - The element to check.
	* @param {number} viewportExpansion - The viewport expansion.
	* @returns {boolean} Whether the element is within the expanded viewport.
	*/
	function isInExpandedViewport(element, viewportExpansion) {
		if (viewportExpansion === -1) return true;
		const rects = element.getClientRects();
		if (!rects || rects.length === 0) {
			const boundingRect = getCachedBoundingRect(element);
			if (!boundingRect || boundingRect.width === 0 || boundingRect.height === 0) return false;
			return !(boundingRect.bottom < -viewportExpansion || boundingRect.top > window.innerHeight + viewportExpansion || boundingRect.right < -viewportExpansion || boundingRect.left > window.innerWidth + viewportExpansion);
		}
		for (const rect of rects) {
			if (rect.width === 0 || rect.height === 0) continue;
			if (!(rect.bottom < -viewportExpansion || rect.top > window.innerHeight + viewportExpansion || rect.right < -viewportExpansion || rect.left > window.innerWidth + viewportExpansion)) return true;
		}
		return false;
	}
	/**
	* Checks if an element is an interactive candidate.
	*
	* @param {HTMLElement} element - The element to check.
	* @returns {boolean} Whether the element is an interactive candidate.
	*/
	const INTERACTIVE_ARIA_ATTRS = [
		"aria-expanded",
		"aria-checked",
		"aria-selected",
		"aria-pressed",
		"aria-haspopup",
		"aria-controls",
		"aria-owns",
		"aria-activedescendant",
		"aria-valuenow",
		"aria-valuetext",
		"aria-valuemax",
		"aria-valuemin",
		"aria-autocomplete"
	];
	function hasInteractiveAria(el) {
		for (let i = 0; i < INTERACTIVE_ARIA_ATTRS.length; i++) if (el.hasAttribute(INTERACTIVE_ARIA_ATTRS[i])) return true;
		return false;
	}
	function isInteractiveCandidate(element) {
		if (!element || element.nodeType !== Node.ELEMENT_NODE) return false;
		const tagName = element.tagName.toLowerCase();
		if (new Set([
			"a",
			"button",
			"input",
			"select",
			"textarea",
			"details",
			"summary",
			"label"
		]).has(tagName)) return true;
		return element.hasAttribute("onclick") || element.hasAttribute("role") || element.hasAttribute("tabindex") || hasInteractiveAria(element) || element.hasAttribute("data-action") || element.getAttribute("contenteditable") === "true";
	}
	const DISTINCT_INTERACTIVE_TAGS = new Set([
		"a",
		"button",
		"input",
		"select",
		"textarea",
		"summary",
		"details",
		"label",
		"option",
		"li"
	]);
	const DISTINCT_INTERACTIVE_ROLES = new Set([
		"button",
		"link",
		"menuitem",
		"menuitemradio",
		"menuitemcheckbox",
		"radio",
		"checkbox",
		"tab",
		"switch",
		"slider",
		"spinbutton",
		"combobox",
		"searchbox",
		"textbox",
		"listbox",
		"listitem",
		"treeitem",
		"row",
		"option",
		"scrollbar"
	]);
	/**
	* Heuristically determines if an element should be considered as independently interactive,
	* even if it's nested inside another interactive container.
	*
	* This function helps detect deeply nested actionable elements (e.g., menu items within a button)
	* that may not be picked up by strict interactivity checks.
	*
	* @param {HTMLElement} element - The element to check.
	* @returns {boolean} Whether the element is heuristically interactive.
	*/
	function isHeuristicallyInteractive(element) {
		if (!element || element.nodeType !== Node.ELEMENT_NODE) return false;
		if (!isElementVisible(element)) return false;
		const hasInteractiveAttributes = element.hasAttribute("role") || element.hasAttribute("tabindex") || element.hasAttribute("onclick") || typeof element.onclick === "function";
		const hasInteractiveClass = /\b(btn|clickable|menu|item|entry|link)\b/i.test(element.className || "");
		const isInKnownContainer = Boolean(element.closest("button,a,[role=\"button\"],.menu,.dropdown,.list,.toolbar"));
		const hasVisibleChildren = [...element.children].some(isElementVisible);
		const isParentBody = element.parentElement && element.parentElement.isSameNode(document.body);
		return (isInteractiveElement(element) || hasInteractiveAttributes || hasInteractiveClass) && hasVisibleChildren && isInKnownContainer && !isParentBody;
	}
	/**
	* Checks if an element likely represents a distinct interaction
	* separate from its parent (if the parent is also interactive).
	*
	* @param {HTMLElement} element - The element to check.
	* @returns {boolean} Whether the element is a distinct interaction.
	*/
	function isElementDistinctInteraction(element) {
		if (!element || element.nodeType !== Node.ELEMENT_NODE) return false;
		const tagName = element.tagName.toLowerCase();
		const role = element.getAttribute("role");
		if (tagName === "iframe") return true;
		if (DISTINCT_INTERACTIVE_TAGS.has(tagName)) return true;
		if (role && DISTINCT_INTERACTIVE_ROLES.has(role)) return true;
		if (element.isContentEditable || element.getAttribute("contenteditable") === "true") return true;
		if (element.hasAttribute("data-testid") || element.hasAttribute("data-cy") || element.hasAttribute("data-test")) return true;
		if (element.hasAttribute("onclick") || typeof element.onclick === "function") return true;
		if (hasInteractiveAria(element)) return true;
		try {
			const getEventListenersForNode = element?.ownerDocument?.defaultView?.getEventListenersForNode || window.getEventListenersForNode;
			if (typeof getEventListenersForNode === "function") {
				const listeners = getEventListenersForNode(element);
				for (const eventType of [
					"click",
					"mousedown",
					"mouseup",
					"keydown",
					"keyup",
					"submit",
					"change",
					"input",
					"focus",
					"blur"
				]) for (const listener of listeners) if (listener.type === eventType) return true;
			}
			if ([
				"onmousedown",
				"onmouseup",
				"onkeydown",
				"onkeyup",
				"onsubmit",
				"onchange",
				"oninput",
				"onfocus",
				"onblur"
			].some((attr) => element.hasAttribute(attr))) return true;
		} catch (e) {}
		if (isHeuristicallyInteractive(element)) return true;
		if (extraData.get(element)?.scrollable) return true;
		return false;
	}
	/**
	* Handles the logic for deciding whether to highlight an element and performing the highlight.
	* @param {
	{
	tagName: string;
	attributes: Record<string, string>;
	xpath: any;
	children: never[];
	isVisible?: boolean;
	isTopElement?: boolean;
	isInteractive?: boolean;
	isInViewport?: boolean;
	highlightIndex?: number;
	shadowRoot?: boolean;
	}} nodeData - The node data object.
	* @param {HTMLElement} node - The node to highlight.
	* @param {HTMLElement | null} parentIframe - The parent iframe node.
	* @param {boolean} isParentHighlighted - Whether the parent node is highlighted.
	* @returns {boolean} Whether the element was highlighted.
	*/
	function handleHighlighting(nodeData, node, parentIframe, isParentHighlighted) {
		if (!nodeData.isInteractive) return false;
		/**
		* @edit add `data-page-agent-readonly` attribute
		* Withhold the click index for this element and everything under it,
		* but keep the node in the tree so its text still reaches the LLM.
		* Ancestor-or-self match => whole subtree is covered without threading a flag.
		*/
		if (node.closest?.("[data-page-agent-readonly=\"true\"]")) return false;
		let shouldHighlight = false;
		if (!isParentHighlighted) shouldHighlight = true;
		else if (isElementDistinctInteraction(node)) shouldHighlight = true;
		else shouldHighlight = false;
		if (shouldHighlight) {
			nodeData.isInViewport = isInExpandedViewport(node, viewportExpansion);
			if (nodeData.isInViewport || viewportExpansion === -1) {
				nodeData.highlightIndex = highlightIndex++;
				if (doHighlightElements) {
					if (focusHighlightIndex >= 0) {
						if (focusHighlightIndex === nodeData.highlightIndex) highlightElement(node, nodeData.highlightIndex, parentIframe);
					} else highlightElement(node, nodeData.highlightIndex, parentIframe);
					return true;
				}
			}
		}
		return false;
	}
	/**
	* Creates a node data object for a given node and its descendants.
	*
	* @param {HTMLElement} node - The node to process.
	* @param {HTMLElement | null} parentIframe - The parent iframe node.
	* @param {boolean} isParentHighlighted - Whether the parent node is highlighted.
	* @returns {string | null} The ID of the node data object, or null if the node is not processed.
	*/
	function buildDomTree(node, parentIframe = null, isParentHighlighted = false) {
		if (!node || node.id === HIGHLIGHT_CONTAINER_ID || node.nodeType !== Node.ELEMENT_NODE && node.nodeType !== Node.TEXT_NODE) return null;
		if (!node || node.id === HIGHLIGHT_CONTAINER_ID) return null;
		/**
		* @edit add `data-browser-use-ignore` attribute
		*/
		if (node.dataset?.browserUseIgnore === "true" || node.dataset?.pageAgentIgnore === "true") return null;
		/**
		* @edit exclude aria-hidden elements
		*/
		if (node.getAttribute && node.getAttribute("aria-hidden") === "true") return null;
		if (node === document.body) {
			const nodeData = {
				tagName: "body",
				attributes: {},
				xpath: "/body",
				children: []
			};
			for (const child of node.childNodes) {
				const domElement = buildDomTree(child, parentIframe, false);
				if (domElement) nodeData.children.push(domElement);
			}
			const id = `${ID.current++}`;
			DOM_HASH_MAP[id] = nodeData;
			return id;
		}
		if (node.nodeType !== Node.ELEMENT_NODE && node.nodeType !== Node.TEXT_NODE) return null;
		if (node.nodeType === Node.TEXT_NODE) {
			const textContent = node.textContent?.trim();
			if (!textContent) return null;
			const parentElement = node.parentElement;
			if (!parentElement || parentElement.tagName.toLowerCase() === "script") return null;
			const id = `${ID.current++}`;
			DOM_HASH_MAP[id] = {
				type: "TEXT_NODE",
				text: textContent,
				isVisible: isTextNodeVisible(node)
			};
			return id;
		}
		if (node.nodeType === Node.ELEMENT_NODE && !isElementAccepted(node)) return null;
		if (viewportExpansion !== -1 && !node.shadowRoot) {
			const rect = getCachedBoundingRect(node);
			const style = getCachedComputedStyle(node);
			const isFixedOrSticky = style && (style.position === "fixed" || style.position === "sticky");
			const hasSize = node.offsetWidth > 0 || node.offsetHeight > 0;
			if (!rect || !isFixedOrSticky && !hasSize && (rect.bottom < -viewportExpansion || rect.top > window.innerHeight + viewportExpansion || rect.right < -viewportExpansion || rect.left > window.innerWidth + viewportExpansion)) return null;
		}
		/**
		* @type {
		{
		tagName: string;
		attributes: Record<string, string | null>;
		xpath: any;
		children: never[];
		isVisible?: boolean;
		isTopElement?: boolean;
		isInteractive?: boolean;
		isInViewport?: boolean;
		highlightIndex?: number;
		shadowRoot?: boolean;
		}
		} nodeData - The node data object.
		*/
		const nodeData = {
			tagName: node.tagName.toLowerCase(),
			attributes: {},
			/**
			* @edit no need for xpath
			*/
			children: []
		};
		if (isInteractiveCandidate(node) || node.tagName.toLowerCase() === "iframe" || node.tagName.toLowerCase() === "body") {
			const attributeNames = node.getAttributeNames?.() || [];
			for (const name of attributeNames) {
				const value = node.getAttribute(name);
				nodeData.attributes[name] = value;
			}
			/**
			* @edit @workaround input.checked
			*/
			if (node.tagName.toLowerCase() === "input" && (node.type === "checkbox" || node.type === "radio")) nodeData.attributes.checked = node.checked ? "true" : "false";
		}
		let nodeWasHighlighted = false;
		if (node.nodeType === Node.ELEMENT_NODE) {
			nodeData.isVisible = isElementVisible(node);
			if (nodeData.isVisible) {
				nodeData.isTopElement = isTopElement(node);
				const role = node.getAttribute("role");
				const isMenuContainer = role === "menu" || role === "menubar" || role === "listbox";
				if (nodeData.isTopElement || isMenuContainer) {
					nodeData.isInteractive = isInteractiveElement(node);
					nodeWasHighlighted = handleHighlighting(nodeData, node, parentIframe, isParentHighlighted);
					/**
					* @edit direct dom ref
					*/
					nodeData.ref = node;
					/**
					* @edit make sure attributes exist for interactive candidates.
					* @note if the element failed the isInteractiveCandidate, attributes would be empty.
					*/
					if (nodeData.isInteractive && Object.keys(nodeData.attributes).length === 0) {
						const attributeNames = node.getAttributeNames?.() || [];
						for (const name of attributeNames) {
							const value = node.getAttribute(name);
							nodeData.attributes[name] = value;
						}
					}
				}
			}
		}
		if (node.tagName) {
			const tagName = node.tagName.toLowerCase();
			if (tagName === "iframe") try {
				const iframeDoc = node.contentDocument || node.contentWindow?.document;
				if (iframeDoc) for (const child of iframeDoc.childNodes) {
					const domElement = buildDomTree(child, node, false);
					if (domElement) nodeData.children.push(domElement);
				}
			} catch (e) {
				console.warn("Unable to access iframe:", e);
			}
			else if (node.isContentEditable || node.getAttribute("contenteditable") === "true" || node.id === "tinymce" || node.classList.contains("mce-content-body") || tagName === "body" && node.getAttribute("data-id")?.startsWith("mce_")) for (const child of node.childNodes) {
				const domElement = buildDomTree(child, parentIframe, nodeWasHighlighted);
				if (domElement) nodeData.children.push(domElement);
			}
			else {
				if (node.shadowRoot) {
					nodeData.shadowRoot = true;
					for (const child of node.shadowRoot.childNodes) {
						const domElement = buildDomTree(child, parentIframe, nodeWasHighlighted);
						if (domElement) nodeData.children.push(domElement);
					}
				}
				for (const child of node.childNodes) {
					const domElement = buildDomTree(child, parentIframe, nodeWasHighlighted || isParentHighlighted);
					if (domElement) nodeData.children.push(domElement);
				}
			}
		}
		if (nodeData.tagName === "a" && nodeData.children.length === 0 && !nodeData.attributes.href) {
			const rect = getCachedBoundingRect(node);
			if (!(rect && rect.width > 0 && rect.height > 0 || node.offsetWidth > 0 || node.offsetHeight > 0)) return null;
		}
		/**
		* @edit add `extra` field for extra data
		*/
		nodeData.extra = extraData.get(node) || null;
		const id = `${ID.current++}`;
		DOM_HASH_MAP[id] = nodeData;
		return id;
	}
	const rootId = buildDomTree(document.body);
	DOM_CACHE.clearCache();
	return {
		rootId,
		map: DOM_HASH_MAP
	};
};
//#endregion
//#region ../page-controller/src/dom/index.ts
var dom_exports = /* @__PURE__ */ __exportAll({
	cleanUpHighlights: () => cleanUpHighlights,
	flatTreeToString: () => flatTreeToString,
	getAllTextTillNextClickableElement: () => getAllTextTillNextClickableElement,
	getElementTextMap: () => getElementTextMap,
	getFlatTree: () => getFlatTree,
	getSelectorMap: () => getSelectorMap,
	resolveViewportExpansion: () => resolveViewportExpansion
});
/**
* Viewport expansion for DOM tree extraction.
* -1 means full page (no viewport restriction)
* 0 means viewport only
* positive values expand the viewport by that many pixels
*
* @note Since isTopElement depends on elementFromPoint,
* it returns null when out of viewport, this feature has no practical use, only differ between -1 and 0
*/
var DEFAULT_VIEWPORT_EXPANSION = -1;
function resolveViewportExpansion(viewportExpansion) {
	return viewportExpansion ?? DEFAULT_VIEWPORT_EXPANSION;
}
var SEMANTIC_TAGS = new Set([
	"nav",
	"menu",
	"header",
	"footer",
	"aside",
	"dialog"
]);
/**
* 用于检测可交互元素是否是新出现的。
*/
var newElementsCache = /* @__PURE__ */ new WeakMap();
function getFlatTree(config) {
	const viewportExpansion = resolveViewportExpansion(config.viewportExpansion);
	const interactiveBlacklist = [];
	for (const item of config.interactiveBlacklist || []) if (typeof item === "function") interactiveBlacklist.push(item());
	else interactiveBlacklist.push(item);
	const interactiveWhitelist = [];
	for (const item of config.interactiveWhitelist || []) if (typeof item === "function") interactiveWhitelist.push(item());
	else interactiveWhitelist.push(item);
	const elements = dom_tree_default({
		doHighlightElements: true,
		debugMode: true,
		focusHighlightIndex: -1,
		viewportExpansion,
		interactiveBlacklist,
		interactiveWhitelist,
		highlightOpacity: config.highlightOpacity ?? 0,
		highlightLabelOpacity: config.highlightLabelOpacity ?? .1
	});
	const currentUrl = window.location.href;
	/**
	* 标记新出现的元素
	* @todo browser-use 使用 hash(位置，属性等信息) 来判断是否同一个元素，
	*       能够解决 1. 元素被删除后重新添加 2. 页面卸载 等问题。
	*       这里先简单做.
	*/
	for (const nodeId in elements.map) {
		const node = elements.map[nodeId];
		if (node.isInteractive && node.ref) {
			const ref = node.ref;
			if (!newElementsCache.has(ref)) {
				newElementsCache.set(ref, currentUrl);
				node.isNew = true;
			}
		}
	}
	return elements;
}
var globRegexCache = /* @__PURE__ */ new Map();
function globToRegex(pattern) {
	let regex = globRegexCache.get(pattern);
	if (!regex) {
		const escaped = pattern.replace(/[.+^${}()|[\]\\]/g, "\\$&");
		regex = new RegExp(`^${escaped.replace(/\*/g, ".*")}$`);
		globRegexCache.set(pattern, regex);
	}
	return regex;
}
function matchAttributes(attrs, patterns) {
	const result = {};
	for (const pattern of patterns) if (pattern.includes("*")) {
		const regex = globToRegex(pattern);
		for (const key of Object.keys(attrs)) if (regex.test(key) && attrs[key].trim()) result[key] = attrs[key].trim();
	} else {
		const value = attrs[pattern];
		if (value && value.trim()) result[pattern] = value.trim();
	}
	return result;
}
/**
* 对应 python 中的 views::clickable_elements_to_string,
* 将 dom 信息处理成适合 llm 阅读的文本格式
* @形如
* ``` text
* [0]<a aria-label=page-agent.js 首页 />
* [1]<div >P />
* [2]<div >page-agent.js
* UI Agent in your webpage />
* [3]<a >文档 />
* [4]<a aria-label=查看源码（在新窗口打开）>源码 />
* UI Agent in your webpage
* 用户输入需求，AI 理解页面并自动操作。
* [5]<a role=button>快速开始 />
* [6]<a role=button>查看文档 />
* 无需后端
* ```
* 其中可交互元素用序号标出，提示llm可以用序号操作。
* 缩进代表父子关系。
* 普通文本则直接列出来。
*
* @todo 数据脱敏过滤器
*/
function flatTreeToString(flatTree, includeAttributes = [], keepSemanticTags = false) {
	const DEFAULT_INCLUDE_ATTRIBUTES = [
		"title",
		"type",
		"checked",
		"name",
		"role",
		"value",
		"placeholder",
		"data-date-format",
		"alt",
		"aria-label",
		"aria-expanded",
		"data-state",
		"aria-checked",
		"id",
		"for",
		"target",
		"aria-haspopup",
		"aria-controls",
		"aria-owns",
		"contenteditable"
	];
	const includeAttrs = [...includeAttributes, ...DEFAULT_INCLUDE_ATTRIBUTES];
	const capTextLength = (text, maxLength) => {
		if (text.length > maxLength) return text.substring(0, maxLength) + "...";
		return text;
	};
	const buildTreeNode = (nodeId) => {
		const node = flatTree.map[nodeId];
		if (!node) return null;
		if (node.type === "TEXT_NODE") {
			const textNode = node;
			return {
				type: "text",
				text: textNode.text,
				isVisible: textNode.isVisible,
				parent: null,
				children: []
			};
		} else {
			const elementNode = node;
			const children = [];
			if (elementNode.children) for (const childId of elementNode.children) {
				const child = buildTreeNode(childId);
				if (child) {
					child.parent = null;
					children.push(child);
				}
			}
			return {
				type: "element",
				tagName: elementNode.tagName,
				attributes: elementNode.attributes ?? {},
				isVisible: elementNode.isVisible ?? false,
				isInteractive: elementNode.isInteractive ?? false,
				isTopElement: elementNode.isTopElement ?? false,
				isNew: elementNode.isNew ?? false,
				highlightIndex: elementNode.highlightIndex,
				parent: null,
				children,
				extra: elementNode.extra ?? {}
			};
		}
	};
	const setParentReferences = (node, parent = null) => {
		node.parent = parent;
		for (const child of node.children) setParentReferences(child, node);
	};
	const rootNode = buildTreeNode(flatTree.rootId);
	if (!rootNode) return "";
	setParentReferences(rootNode);
	const hasParentWithHighlightIndex = (node) => {
		let current = node.parent;
		while (current) {
			if (current.type === "element" && current.highlightIndex !== void 0) return true;
			current = current.parent;
		}
		return false;
	};
	const processNode = (node, depth, result) => {
		let nextDepth = depth;
		const depthStr = "	".repeat(depth);
		if (node.type === "element") {
			const isSemantic = keepSemanticTags && node.tagName && SEMANTIC_TAGS.has(node.tagName);
			if (node.highlightIndex !== void 0) {
				nextDepth += 1;
				const text = getAllTextTillNextClickableElement(node);
				let attributesHtmlStr = "";
				if (includeAttrs.length > 0 && node.attributes) {
					const attributesToInclude = matchAttributes(node.attributes, includeAttrs);
					const keys = Object.keys(attributesToInclude);
					if (keys.length > 1) {
						const keysToRemove = /* @__PURE__ */ new Set();
						const seenValues = {};
						for (const key of keys) {
							const value = attributesToInclude[key];
							if (value.length > 5) if (value in seenValues) keysToRemove.add(key);
							else seenValues[value] = key;
						}
						for (const key of keysToRemove) delete attributesToInclude[key];
					}
					if (attributesToInclude.role === node.tagName) delete attributesToInclude.role;
					for (const attr of [
						"aria-label",
						"placeholder",
						"title"
					]) if (attributesToInclude[attr] && attributesToInclude[attr].toLowerCase().trim() === text.toLowerCase().trim()) delete attributesToInclude[attr];
					if (Object.keys(attributesToInclude).length > 0) attributesHtmlStr = Object.entries(attributesToInclude).map(([key, value]) => `${key}=${capTextLength(value, 20)}`).join(" ");
				}
				let line = `${depthStr}${node.isNew ? `*[${node.highlightIndex}]` : `[${node.highlightIndex}]`}<${node.tagName ?? ""}`;
				if (attributesHtmlStr) line += ` ${attributesHtmlStr}`;
				/**
				* @edit scrollable 数据
				*/
				if (node.extra) {
					if (node.extra.scrollable) {
						let scrollDataText = "";
						if (node.extra.scrollData?.left) scrollDataText += `left=${node.extra.scrollData.left}, `;
						if (node.extra.scrollData?.top) scrollDataText += `top=${node.extra.scrollData.top}, `;
						if (node.extra.scrollData?.right) scrollDataText += `right=${node.extra.scrollData.right}, `;
						if (node.extra.scrollData?.bottom) scrollDataText += `bottom=${node.extra.scrollData.bottom}`;
						line += ` data-scrollable="${scrollDataText}"`;
					}
				}
				if (text) {
					const trimmedText = text.trim();
					if (!attributesHtmlStr) line += " ";
					line += `>${trimmedText}`;
				} else if (!attributesHtmlStr) line += " ";
				line += " />";
				result.push(line);
			}
			const emitSemantic = isSemantic && node.highlightIndex === void 0;
			const mark = emitSemantic ? result.length : -1;
			if (emitSemantic) {
				result.push(`${depthStr}<${node.tagName}>`);
				nextDepth += 1;
			}
			for (const child of node.children) processNode(child, nextDepth, result);
			if (emitSemantic) if (result.length === mark + 1) result.pop();
			else result.push(`${depthStr}</${node.tagName}>`);
		} else if (node.type === "text") {
			if (hasParentWithHighlightIndex(node)) return;
			if (node.parent && node.parent.type === "element" && node.parent.isVisible && node.parent.isTopElement) result.push(`${depthStr}${node.text ?? ""}`);
		}
	};
	const result = [];
	processNode(rootNode, 0, result);
	return result.join("\n");
}
var getAllTextTillNextClickableElement = (node, maxDepth = -1) => {
	const textParts = [];
	const collectText = (currentNode, currentDepth) => {
		if (maxDepth !== -1 && currentDepth > maxDepth) return;
		if (currentNode.type === "element" && currentNode !== node && currentNode.highlightIndex !== void 0) return;
		if (currentNode.type === "text" && currentNode.text) textParts.push(currentNode.text);
		else if (currentNode.type === "element") for (const child of currentNode.children) collectText(child, currentDepth + 1);
	};
	collectText(node, 0);
	return textParts.join("\n").trim();
};
function getSelectorMap(flatTree) {
	const selectorMap = /* @__PURE__ */ new Map();
	const keys = Object.keys(flatTree.map);
	for (const key of keys) {
		const node = flatTree.map[key];
		if (node.isInteractive && typeof node.highlightIndex === "number") selectorMap.set(node.highlightIndex, node);
	}
	return selectorMap;
}
function getElementTextMap(simplifiedHTML) {
	const lines = simplifiedHTML.split("\n").map((line) => line.trim()).filter((line) => line.length > 0);
	const elementTextMap = /* @__PURE__ */ new Map();
	for (const line of lines) {
		const match = /^\[(\d+)\]<[^>]+>([^<]*)/.exec(line);
		if (match) {
			const index = parseInt(match[1], 10);
			elementTextMap.set(index, line);
		}
	}
	return elementTextMap;
}
function cleanUpHighlights() {
	const cleanupFunctions = window._highlightCleanupFunctions || [];
	for (const cleanup of cleanupFunctions) if (typeof cleanup === "function") cleanup();
	window._highlightCleanupFunctions = [];
}
window.addEventListener("popstate", () => {
	cleanUpHighlights();
});
window.addEventListener("hashchange", () => {
	cleanUpHighlights();
});
window.addEventListener("beforeunload", () => {
	cleanUpHighlights();
});
var navigation = window.navigation;
if (navigation && typeof navigation.addEventListener === "function") navigation.addEventListener("navigate", () => {
	cleanUpHighlights();
});
else {
	let currentUrl = window.location.href;
	setInterval(() => {
		if (window.location.href !== currentUrl) {
			currentUrl = window.location.href;
			cleanUpHighlights();
		}
	}, 500);
}
//#endregion
//#region ../page-controller/src/dom/getPageInfo.ts
function getPageInfo() {
	const viewport_width = window.innerWidth;
	const viewport_height = window.innerHeight;
	const page_width = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth || 0);
	const page_height = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight || 0);
	const scroll_x = window.scrollX || window.pageXOffset || document.documentElement.scrollLeft || 0;
	const scroll_y = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
	const pixels_below = Math.max(0, page_height - (window.innerHeight + scroll_y));
	const pixels_right = Math.max(0, page_width - (window.innerWidth + scroll_x));
	return {
		viewport_width,
		viewport_height,
		page_width,
		page_height,
		scroll_x,
		scroll_y,
		pixels_above: scroll_y,
		pixels_below,
		pages_above: viewport_height > 0 ? scroll_y / viewport_height : 0,
		pages_below: viewport_height > 0 ? pixels_below / viewport_height : 0,
		total_pages: viewport_height > 0 ? page_height / viewport_height : 0,
		current_page_position: scroll_y / Math.max(1, page_height - viewport_height),
		pixels_left: scroll_x,
		pixels_right
	};
}
//#endregion
//#region ../page-controller/src/patches/react.ts
function patchReact(pageController) {
	const reactRootElements = document.querySelectorAll("[data-reactroot], [data-reactid], [data-react-checksum], #root, #app, [id^=\"root-\"], [id^=\"app-\"], #adex-wrapper, #adex-root");
	for (const element of reactRootElements) element.setAttribute("data-page-agent-not-interactive", "true");
}
/**
* @todo (Heavy, might have false negatives) Interaction detection, if element width/height equals body offsetWidth/Height, consider it root element and non-interactive (React often attaches many events to root elements, causing false positives)
*/
//#endregion
//#region ../page-controller/src/PageController.ts
/**
* Copyright (C) 2025 Alibaba Group Holding Limited
* All rights reserved.
*
* PageController - Manages DOM operations and element interactions.
* Designed to be independent of LLM and can be tested in unit tests.
* All public methods are async for potential remote calling support.
*/
/**
* PageController manages DOM state and element interactions.
* It provides async methods for all DOM operations, keeping state isolated.
*
* @lifecycle
* - beforeUpdate: Emitted before the DOM tree is updated.
* - afterUpdate: Emitted after the DOM tree is updated.
*/
var PageController = class extends EventTarget {
	config;
	/** Corresponds to eval_page in browser-use */
	flatTree = null;
	/**
	* All highlighted index-mapped interactive elements
	* Corresponds to DOMState.selector_map in browser-use
	*/
	selectorMap = /* @__PURE__ */ new Map();
	/** Index -> element text description mapping */
	elementTextMap = /* @__PURE__ */ new Map();
	/**
	* Simplified HTML for LLM consumption.
	* Corresponds to clickable_elements_to_string in browser-use
	*/
	simplifiedHTML = "<EMPTY>";
	/** last time the tree was updated */
	lastTimeUpdate = 0;
	/** Whether the tree has been indexed at least once */
	isIndexed = false;
	/** Visual mask overlay for blocking user interaction during automation */
	mask = null;
	maskReady = null;
	constructor(config = {}) {
		super();
		this.config = config;
		patchReact(this);
		if (config.enableMask) this.initMask();
	}
	/**
	* Initialize mask asynchronously (dynamic import to avoid CSS loading in Node)
	*/
	initMask() {
		if (this.maskReady !== null) return;
		this.maskReady = (async () => {
			const { SimulatorMask } = await import("./SimulatorMask-Cc0CNoUi.js");
			this.mask = new SimulatorMask();
		})();
	}
	/**
	* Get current page URL
	*/
	async getCurrentUrl() {
		return window.location.href;
	}
	/**
	* Get last tree update timestamp
	*/
	async getLastUpdateTime() {
		return this.lastTimeUpdate;
	}
	/**
	* Get structured browser state for LLM consumption.
	* Automatically calls updateTree() to refresh the DOM state.
	*/
	async getBrowserState() {
		const url = window.location.href;
		const title = document.title;
		const pi = getPageInfo();
		const viewportExpansion = resolveViewportExpansion(this.config.viewportExpansion);
		await this.updateTree();
		const content = this.simplifiedHTML;
		return {
			url,
			title,
			header: `${`Current Page: [${title}](${url})`}\n${`Page info: ${pi.viewport_width}x${pi.viewport_height}px viewport, ${pi.page_width}x${pi.page_height}px total page size, ${pi.pages_above.toFixed(1)} pages above, ${pi.pages_below.toFixed(1)} pages below, ${pi.total_pages.toFixed(1)} total pages, at ${(pi.current_page_position * 100).toFixed(0)}% of page`}\n\n${viewportExpansion === -1 ? "Interactive elements from top layer of the current page (full page):" : "Interactive elements from top layer of the current page inside the viewport:"}\n\n${pi.pixels_above > 4 && viewportExpansion !== -1 ? `... ${pi.pixels_above} pixels above (${pi.pages_above.toFixed(1)} pages) - scroll to see more ...` : "[Start of page]"}`,
			content,
			footer: pi.pixels_below > 4 && viewportExpansion !== -1 ? `... ${pi.pixels_below} pixels below (${pi.pages_below.toFixed(1)} pages) - scroll to see more ...` : "[End of page]"
		};
	}
	/**
	* Update DOM tree, returns simplified HTML for LLM.
	* This is the main method to refresh the page state.
	* Automatically bypasses mask during DOM extraction if enabled.
	*/
	async updateTree() {
		this.dispatchEvent(new Event("beforeUpdate"));
		this.lastTimeUpdate = Date.now();
		if (this.mask) this.mask.wrapper.style.pointerEvents = "none";
		cleanUpHighlights();
		const blacklist = [...this.config.interactiveBlacklist || [], ...Array.from(document.querySelectorAll("[data-page-agent-not-interactive]"))];
		this.flatTree = getFlatTree({
			...this.config,
			interactiveBlacklist: blacklist
		});
		this.simplifiedHTML = flatTreeToString(this.flatTree, this.config.includeAttributes, this.config.keepSemanticTags);
		this.selectorMap.clear();
		this.selectorMap = getSelectorMap(this.flatTree);
		this.elementTextMap.clear();
		this.elementTextMap = getElementTextMap(this.simplifiedHTML);
		this.isIndexed = true;
		if (this.mask) this.mask.wrapper.style.pointerEvents = "auto";
		this.dispatchEvent(new Event("afterUpdate"));
		return this.simplifiedHTML;
	}
	/**
	* Clean up all element highlights
	*/
	async cleanUpHighlights() {
		console.log("[PageController] cleanUpHighlights");
		cleanUpHighlights();
	}
	/**
	* Ensure the tree has been indexed before any index-based operation.
	* Throws if updateTree() hasn't been called yet.
	*/
	assertIndexed() {
		if (!this.isIndexed) throw new Error("DOM tree not indexed yet. Can not perform actions on elements.");
	}
	/**
	* Click element by index
	*/
	async clickElement(index) {
		try {
			this.assertIndexed();
			const element = getElementByIndex(this.selectorMap, index);
			const elemText = this.elementTextMap.get(index);
			const before = readToggleState(element);
			await clickElement(element);
			if (isAnchorElement(element) && element.target === "_blank") return {
				success: true,
				message: `✅ Clicked element (${elemText ?? index}). ⚠️ Link opened in a new tab.`
			};
			const after = readToggleState(getLiveElement(element));
			if (before || after) {
				const state = after ?? before;
				const name = getAccessibleName(element) || elemText || `element ${index}`;
				const stateText = state.on ? "ON (enabled)" : "OFF (disabled)";
				const transition = before && after && before.on !== after.on ? ` It changed from ${before.on ? "ON" : "OFF"} to ${after.on ? "ON" : "OFF"}.` : " Its state did not change.";
				return {
					success: true,
					message: `✅ Clicked the "${name}" toggle. It is now ${stateText} [${state.raw}].${transition} If this already matches the goal, do NOT click it again.`
				};
			}
			return {
				success: true,
				message: `✅ Clicked element (${elemText ?? index}).`
			};
		} catch (error) {
			return {
				success: false,
				message: `❌ Failed to click element: ${error}`
			};
		}
	}
	/**
	* Input text into element by index
	*/
	async inputText(index, text) {
		try {
			this.assertIndexed();
			const element = getElementByIndex(this.selectorMap, index);
			const elemText = this.elementTextMap.get(index);
			await inputTextElement(element, text);
			return {
				success: true,
				message: `✅ Input text (${text}) into element (${elemText ?? index}).`
			};
		} catch (error) {
			return {
				success: false,
				message: `❌ Failed to input text: ${error}`
			};
		}
	}
	/**
	* Select dropdown option by index and option text
	*/
	async selectOption(index, optionText) {
		try {
			this.assertIndexed();
			const element = getElementByIndex(this.selectorMap, index);
			const elemText = this.elementTextMap.get(index);
			await selectOptionElement(element, optionText);
			return {
				success: true,
				message: `✅ Selected option (${optionText}) in element (${elemText ?? index}).`
			};
		} catch (error) {
			return {
				success: false,
				message: `❌ Failed to select option: ${error}`
			};
		}
	}
	/**
	* Scroll vertically
	*/
	async scroll(options) {
		try {
			const { down, numPages, pixels, index } = options;
			this.assertIndexed();
			return {
				success: true,
				message: await scrollVertically((pixels ?? numPages * window.innerHeight) * (down ? 1 : -1), index !== void 0 ? getElementByIndex(this.selectorMap, index) : null)
			};
		} catch (error) {
			return {
				success: false,
				message: `❌ Failed to scroll: ${error}`
			};
		}
	}
	/**
	* Scroll horizontally
	*/
	async scrollHorizontally(options) {
		try {
			const { right, pixels, index } = options;
			this.assertIndexed();
			return {
				success: true,
				message: await scrollHorizontally(pixels * (right ? 1 : -1), index !== void 0 ? getElementByIndex(this.selectorMap, index) : null)
			};
		} catch (error) {
			return {
				success: false,
				message: `❌ Failed to scroll horizontally: ${error}`
			};
		}
	}
	/**
	* Execute arbitrary JavaScript on the page.
	* The optional `signal` is exposed to the script scope so cooperative code
	* can abort promptly when the task is stopped.
	*/
	async executeJavascript(script, signal) {
		try {
			const asyncFunction = eval(`(async (signal) => { ${script} })`);
			const result = await asyncFunction(signal);
			return {
				success: true,
				message: `✅ Executed JavaScript. Result: ${result}`
			};
		} catch (error) {
			return {
				success: false,
				message: `❌ Error executing JavaScript: ${error}`
			};
		}
	}
	/**
	* Show the visual mask overlay.
	* Only works after mask is setup.
	*/
	async showMask() {
		await this.maskReady;
		this.mask?.show();
	}
	/**
	* Hide the visual mask overlay.
	* Only works after mask is setup.
	*/
	async hideMask() {
		await this.maskReady;
		this.mask?.hide();
	}
	/**
	* Dispose and clean up resources
	*/
	dispose() {
		cleanUpHighlights();
		this.flatTree = null;
		this.selectorMap.clear();
		this.elementTextMap.clear();
		this.simplifiedHTML = "<EMPTY>";
		this.isIndexed = false;
		this.mask?.dispose();
		this.mask = null;
	}
};
//#endregion
//#region ../ui/src/i18n/locales.ts
var enUS = { ui: {
	panel: {
		ready: "Ready",
		thinking: "Thinking...",
		taskInput: "Enter new task, describe steps in detail, press Enter to submit",
		userAnswerPrompt: "Please answer the question above, press Enter to submit",
		taskTerminated: "Task terminated",
		taskCompleted: "Task completed",
		userAnswer: "User answer: {{input}}",
		question: "Question: {{question}}",
		waitingPlaceholder: "Waiting for task to start...",
		stop: "Stop",
		close: "Close",
		expand: "Expand history",
		collapse: "Collapse history",
		step: "Step {{number}}"
	},
	tools: {
		clicking: "Clicking element [{{index}}]...",
		inputting: "Inputting text to element [{{index}}]...",
		selecting: "Selecting option \"{{text}}\"...",
		scrolling: "Scrolling page...",
		waiting: "Waiting {{seconds}} seconds...",
		askingUser: "Asking user...",
		done: "Task done",
		clicked: "🖱️ Clicked element [{{index}}]",
		inputted: "⌨️ Inputted text \"{{text}}\"",
		selected: "☑️ Selected option \"{{text}}\"",
		scrolled: "🛞 Page scrolled",
		waited: "⌛️ Wait completed",
		executing: "Executing {{toolName}}...",
		resultSuccess: "success",
		resultFailure: "failed",
		resultError: "error"
	},
	errors: {
		elementNotFound: "No interactive element found at index {{index}}",
		taskRequired: "Task description is required",
		executionFailed: "Task execution failed",
		notInputElement: "Element is not an input or textarea",
		notSelectElement: "Element is not a select element",
		optionNotFound: "Option \"{{text}}\" not found"
	}
} };
var zhCN = { ui: {
	panel: {
		ready: "准备就绪",
		thinking: "正在思考...",
		taskInput: "输入新任务，详细描述步骤，回车提交",
		userAnswerPrompt: "请回答上面问题，回车提交",
		taskTerminated: "任务已终止",
		taskCompleted: "任务结束",
		userAnswer: "用户回答: {{input}}",
		question: "询问: {{question}}",
		waitingPlaceholder: "等待任务开始...",
		stop: "终止",
		close: "关闭",
		expand: "展开历史",
		collapse: "收起历史",
		step: "步骤 {{number}}"
	},
	tools: {
		clicking: "正在点击元素 [{{index}}]...",
		inputting: "正在输入文本到元素 [{{index}}]...",
		selecting: "正在选择选项 \"{{text}}\"...",
		scrolling: "正在滚动页面...",
		waiting: "等待 {{seconds}} 秒...",
		askingUser: "正在询问用户...",
		done: "结束任务",
		clicked: "🖱️ 已点击元素 [{{index}}]",
		inputted: "⌨️ 已输入文本 \"{{text}}\"",
		selected: "☑️ 已选择选项 \"{{text}}\"",
		scrolled: "🛞 页面滚动完成",
		waited: "⌛️ 等待完成",
		executing: "正在执行 {{toolName}}...",
		resultSuccess: "成功",
		resultFailure: "失败",
		resultError: "错误"
	},
	errors: {
		elementNotFound: "未找到索引为 {{index}} 的交互元素",
		taskRequired: "任务描述不能为空",
		executionFailed: "任务执行失败",
		notInputElement: "元素不是输入框或文本域",
		notSelectElement: "元素不是选择框",
		optionNotFound: "未找到选项 \"{{text}}\""
	}
} };
var frFR = { ui: {
	panel: {
		ready: "Prêt",
		thinking: "Réflexion...",
		taskInput: "Saisissez une nouvelle tâche, décrivez les étapes en détail, appuyez sur Entrée pour valider",
		userAnswerPrompt: "Veuillez répondre à la question ci-dessus, appuyez sur Entrée pour valider",
		taskTerminated: "Tâche interrompue",
		taskCompleted: "Tâche terminée",
		userAnswer: "Réponse de l’utilisateur : {{input}}",
		question: "Question : {{question}}",
		waitingPlaceholder: "En attente du démarrage de la tâche...",
		stop: "Arrêter",
		close: "Fermer",
		expand: "Afficher l’historique",
		collapse: "Masquer l’historique",
		step: "Étape {{number}}"
	},
	tools: {
		clicking: "Clic sur l’élément [{{index}}]...",
		inputting: "Saisie de texte dans l’élément [{{index}}]...",
		selecting: "Sélection de l’option « {{text}} »...",
		scrolling: "Défilement de la page...",
		waiting: "Attente de {{seconds}} secondes...",
		askingUser: "Question à l’utilisateur...",
		done: "Tâche terminée",
		clicked: "🖱️ Élément cliqué [{{index}}]",
		inputted: "⌨️ Texte saisi « {{text}} »",
		selected: "☑️ Option sélectionnée « {{text}} »",
		scrolled: "🛞 Page défilée",
		waited: "⌛️ Attente terminée",
		executing: "Exécution de {{toolName}}...",
		resultSuccess: "réussi",
		resultFailure: "échoué",
		resultError: "erreur"
	},
	errors: {
		elementNotFound: "Aucun élément interactif trouvé à l’index {{index}}",
		taskRequired: "La description de la tâche est requise",
		executionFailed: "Échec de l’exécution de la tâche",
		notInputElement: "L’élément n’est pas un champ de saisie ou une zone de texte",
		notSelectElement: "L’élément n’est pas une liste déroulante",
		optionNotFound: "Option « {{text}} » introuvable"
	}
} };
var esES = { ui: {
	panel: {
		ready: "Listo",
		thinking: "Pensando...",
		taskInput: "Introduce una nueva tarea, describe los pasos en detalle y pulsa Intro para enviar",
		userAnswerPrompt: "Responde a la pregunta anterior y pulsa Intro para enviar",
		taskTerminated: "Tarea interrumpida",
		taskCompleted: "Tarea completada",
		userAnswer: "Respuesta del usuario: {{input}}",
		question: "Pregunta: {{question}}",
		waitingPlaceholder: "Esperando a que empiece la tarea...",
		stop: "Detener",
		close: "Cerrar",
		expand: "Mostrar historial",
		collapse: "Ocultar historial",
		step: "Paso {{number}}"
	},
	tools: {
		clicking: "Haciendo clic en el elemento [{{index}}]...",
		inputting: "Escribiendo texto en el elemento [{{index}}]...",
		selecting: "Seleccionando la opción «{{text}}»...",
		scrolling: "Desplazando la página...",
		waiting: "Esperando {{seconds}} segundos...",
		askingUser: "Preguntando al usuario...",
		done: "Tarea finalizada",
		clicked: "🖱️ Elemento clicado [{{index}}]",
		inputted: "⌨️ Texto introducido «{{text}}»",
		selected: "☑️ Opción seleccionada «{{text}}»",
		scrolled: "🛞 Página desplazada",
		waited: "⌛️ Espera completada",
		executing: "Ejecutando {{toolName}}...",
		resultSuccess: "correcto",
		resultFailure: "fallido",
		resultError: "error"
	},
	errors: {
		elementNotFound: "No se encontró ningún elemento interactivo en el índice {{index}}",
		taskRequired: "La descripción de la tarea es obligatoria",
		executionFailed: "Error al ejecutar la tarea",
		notInputElement: "El elemento no es un campo de entrada ni un área de texto",
		notSelectElement: "El elemento no es una lista desplegable",
		optionNotFound: "Opción «{{text}}» no encontrada"
	}
} };
var ptBR = { ui: {
	panel: {
		ready: "Pronto",
		thinking: "Pensando...",
		taskInput: "Digite uma nova tarefa, descreva as etapas em detalhes e pressione Enter para enviar",
		userAnswerPrompt: "Responda à pergunta acima e pressione Enter para enviar",
		taskTerminated: "Tarefa interrompida",
		taskCompleted: "Tarefa concluída",
		userAnswer: "Resposta do usuário: {{input}}",
		question: "Pergunta: {{question}}",
		waitingPlaceholder: "Aguardando o início da tarefa...",
		stop: "Parar",
		close: "Fechar",
		expand: "Mostrar histórico",
		collapse: "Ocultar histórico",
		step: "Etapa {{number}}"
	},
	tools: {
		clicking: "Clicando no elemento [{{index}}]...",
		inputting: "Inserindo texto no elemento [{{index}}]...",
		selecting: "Selecionando a opção \"{{text}}\"...",
		scrolling: "Rolando a página...",
		waiting: "Aguardando {{seconds}} segundos...",
		askingUser: "Perguntando ao usuário...",
		done: "Tarefa concluída",
		clicked: "🖱️ Elemento clicado [{{index}}]",
		inputted: "⌨️ Texto inserido \"{{text}}\"",
		selected: "☑️ Opção selecionada \"{{text}}\"",
		scrolled: "🛞 Página rolada",
		waited: "⌛️ Espera concluída",
		executing: "Executando {{toolName}}...",
		resultSuccess: "sucesso",
		resultFailure: "falhou",
		resultError: "erro"
	},
	errors: {
		elementNotFound: "Nenhum elemento interativo encontrado no índice {{index}}",
		taskRequired: "A descrição da tarefa é obrigatória",
		executionFailed: "Falha na execução da tarefa",
		notInputElement: "O elemento não é um campo de entrada nem uma área de texto",
		notSelectElement: "O elemento não é uma lista suspensa",
		optionNotFound: "Opção \"{{text}}\" não encontrada"
	}
} };
var itIT = { ui: {
	panel: {
		ready: "Pronto",
		thinking: "Sto pensando...",
		taskInput: "Inserisci una nuova attività, descrivi i passaggi in dettaglio e premi Invio per inviare",
		userAnswerPrompt: "Rispondi alla domanda qui sopra e premi Invio per inviare",
		taskTerminated: "Attività interrotta",
		taskCompleted: "Attività completata",
		userAnswer: "Risposta dell’utente: {{input}}",
		question: "Domanda: {{question}}",
		waitingPlaceholder: "In attesa dell’avvio dell’attività...",
		stop: "Interrompi",
		close: "Chiudi",
		expand: "Mostra cronologia",
		collapse: "Nascondi cronologia",
		step: "Passaggio {{number}}"
	},
	tools: {
		clicking: "Clic sull’elemento [{{index}}]...",
		inputting: "Inserimento del testo nell’elemento [{{index}}]...",
		selecting: "Selezione dell’opzione «{{text}}»...",
		scrolling: "Scorrimento della pagina...",
		waiting: "Attesa di {{seconds}} secondi...",
		askingUser: "Richiesta all’utente...",
		done: "Attività completata",
		clicked: "🖱️ Elemento cliccato [{{index}}]",
		inputted: "⌨️ Testo inserito «{{text}}»",
		selected: "☑️ Opzione selezionata «{{text}}»",
		scrolled: "🛞 Pagina scorsa",
		waited: "⌛️ Attesa completata",
		executing: "Esecuzione di {{toolName}}...",
		resultSuccess: "riuscito",
		resultFailure: "non riuscito",
		resultError: "errore"
	},
	errors: {
		elementNotFound: "Nessun elemento interattivo trovato all’indice {{index}}",
		taskRequired: "La descrizione dell’attività è obbligatoria",
		executionFailed: "Esecuzione dell’attività non riuscita",
		notInputElement: "L’elemento non è un campo di input o un’area di testo",
		notSelectElement: "L’elemento non è un elenco a discesa",
		optionNotFound: "Opzione «{{text}}» non trovata"
	}
} };
var locales = {
	"en-US": enUS,
	"zh-CN": zhCN,
	"fr-FR": frFR,
	"es-ES": esES,
	"pt-BR": ptBR,
	"it-IT": itIT
};
//#endregion
//#region ../ui/src/i18n/index.ts
var I18n = class {
	language;
	translations;
	constructor(language = "en-US") {
		this.language = language in locales ? language : "en-US";
		this.translations = locales[this.language];
	}
	t(key, params) {
		const value = this.getNestedValue(this.translations, key);
		if (!value) {
			console.warn(`Translation key "${key}" not found for language "${this.language}"`);
			return key;
		}
		if (params) return this.interpolate(value, params);
		return value;
	}
	getNestedValue(obj, path) {
		return path.split(".").reduce((current, key) => current?.[key], obj);
	}
	interpolate(template, params) {
		return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
			return params[key] != null ? params[key].toString() : match;
		});
	}
	getLanguage() {
		return this.language;
	}
};
//#endregion
//#region ../ui/src/utils.ts
function truncate(text, maxLength) {
	if (text.length > maxLength) return text.substring(0, maxLength) + "...";
	return text;
}
/**
* Escape HTML special characters to prevent XSS and rendering issues
*/
function escapeHtml(text) {
	return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
//#endregion
//#region ../ui/src/panel/Panel.module.css
var wrapper = "_wrapper_1tu05_1";
var background = "_background_1tu05_39";
var header = "_header_1tu05_99";
var pulse = "_pulse_1tu05_1";
var retryPulse = "_retryPulse_1tu05_1";
var statusTextFadeOut = "_statusTextFadeOut_1tu05_1";
var statusTextFadeIn = "_statusTextFadeIn_1tu05_1";
var statusSection = "_statusSection_1tu05_121";
var indicator = "_indicator_1tu05_128";
var thinking = "_thinking_1tu05_137";
var tool_executing = "_tool_executing_1tu05_142";
var retry = "_retry_1tu05_147";
var completed = "_completed_1tu05_153";
var input = "_input_1tu05_154";
var output = "_output_1tu05_155";
var error = "_error_1tu05_160";
var statusText = "_statusText_1tu05_166";
var fadeOut = "_fadeOut_1tu05_178";
var fadeIn = "_fadeIn_1tu05_182";
var controls = "_controls_1tu05_188";
var controlButton = "_controlButton_1tu05_193";
var stopButton = "_stopButton_1tu05_212";
var historySectionWrapper = "_historySectionWrapper_1tu05_246";
var shimmer = "_shimmer_1tu05_1";
var celebrate = "_celebrate_1tu05_1";
var expanded = "_expanded_1tu05_278";
var historySection = "_historySection_1tu05_246";
var historyItem = "_historyItem_1tu05_297";
var observation = "_observation_1tu05_355";
var question = "_question_1tu05_360";
var doneSuccess = "_doneSuccess_1tu05_366";
var historyContent = "_historyContent_1tu05_402";
var statusIcon = "_statusIcon_1tu05_403";
var doneError = "_doneError_1tu05_412";
var reflectionLines = "_reflectionLines_1tu05_462";
var historyMeta = "_historyMeta_1tu05_469";
var inputSectionWrapper = "_inputSectionWrapper_1tu05_539";
var hidden = "_hidden_1tu05_562";
var inputSection = "_inputSection_1tu05_539";
var taskInput = "_taskInput_1tu05_573";
var Panel_module_default = {
	wrapper,
	"mask-running": "_mask-running_1tu05_1",
	background,
	header,
	pulse,
	retryPulse,
	statusTextFadeOut,
	statusTextFadeIn,
	statusSection,
	indicator,
	thinking,
	tool_executing,
	retry,
	completed,
	input,
	output,
	error,
	statusText,
	fadeOut,
	fadeIn,
	controls,
	controlButton,
	stopButton,
	historySectionWrapper,
	shimmer,
	celebrate,
	expanded,
	historySection,
	historyItem,
	observation,
	question,
	doneSuccess,
	historyContent,
	statusIcon,
	doneError,
	reflectionLines,
	historyMeta,
	inputSectionWrapper,
	hidden,
	inputSection,
	taskInput
};
//#endregion
//#region ../ui/src/panel/cards.ts
/**
* Card HTML generation utilities for Panel
*/
/** Create a single history card */
function createCard({ icon, content, meta, type }) {
	const typeClass = type ? Panel_module_default[type] : "";
	const contentHtml = Array.isArray(content) ? `<div class="${Panel_module_default.reflectionLines}">${content.map((line) => `<span>${escapeHtml(line)}</span>`).join("")}</div>` : `<span>${escapeHtml(content)}</span>`;
	return `
		<div class="${Panel_module_default.historyItem} ${typeClass}">
			<div class="${Panel_module_default.historyContent}">
				<span class="${Panel_module_default.statusIcon}">${icon}</span>
				${contentHtml}
			</div>
			${meta ? `<div class="${Panel_module_default.historyMeta}">${meta}</div>` : ""}
		</div>
	`;
}
/** Create reflection lines from reflection object */
function createReflectionLines(reflection) {
	const lines = [];
	if (reflection.evaluation_previous_goal) lines.push(`🔍 ${reflection.evaluation_previous_goal}`);
	if (reflection.memory) lines.push(`💾 ${reflection.memory}`);
	if (reflection.next_goal) lines.push(`🎯 ${reflection.next_goal}`);
	return lines;
}
//#endregion
//#region ../ui/src/panel/Panel.ts
/**
* Agent control panel
*
* Architecture:
* - History list: renders directly from agent.history (historical events)
* - Header bar: shows activity events (transient state) and agent status
*
* This separation ensures data consistency - history is the single source of truth
* for what has been done, while activity shows what is happening now.
*/
var Panel = class {
	#wrapper;
	#indicator;
	#statusText;
	#historySection;
	#expandButton;
	#actionButton;
	#inputSection;
	#taskInput;
	#agent;
	#config;
	#isExpanded = false;
	#i18n;
	#userAnswerResolver = null;
	#isWaitingForUserAnswer = false;
	#headerUpdateTimer = null;
	#pendingHeaderText = null;
	#isAnimating = false;
	#onStatusChange = () => this.#handleStatusChange();
	#onHistoryChange = () => this.#handleHistoryChange();
	#onActivity = (e) => this.#handleActivity(e.detail);
	#onAgentDispose = () => this.dispose();
	get wrapper() {
		return this.#wrapper;
	}
	/**
	* Create a Panel bound to an agent
	* @param agent - Agent instance that implements PanelAgentAdapter
	* @param config - Optional panel configuration
	*/
	constructor(agent, config = {}) {
		this.#agent = agent;
		this.#config = config;
		this.#i18n = new I18n(config.language ?? "en-US");
		this.#agent.onAskUser = (question, options) => this.#askUser(question, options?.signal);
		this.#wrapper = this.#createWrapper();
		this.#indicator = this.#wrapper.querySelector(`.${Panel_module_default.indicator}`);
		this.#statusText = this.#wrapper.querySelector(`.${Panel_module_default.statusText}`);
		this.#historySection = this.#wrapper.querySelector(`.${Panel_module_default.historySection}`);
		this.#expandButton = this.#wrapper.querySelector(`.${Panel_module_default.expandButton}`);
		this.#actionButton = this.#wrapper.querySelector(`.${Panel_module_default.stopButton}`);
		this.#inputSection = this.#wrapper.querySelector(`.${Panel_module_default.inputSectionWrapper}`);
		this.#taskInput = this.#wrapper.querySelector(`.${Panel_module_default.taskInput}`);
		this.#agent.addEventListener("statuschange", this.#onStatusChange);
		this.#agent.addEventListener("historychange", this.#onHistoryChange);
		this.#agent.addEventListener("activity", this.#onActivity);
		this.#agent.addEventListener("dispose", this.#onAgentDispose);
		this.#setupEventListeners();
		this.#startHeaderUpdateLoop();
		this.#showInputArea();
		this.hide();
	}
	/** Handle agent status change */
	#handleStatusChange() {
		const status = this.#agent.status;
		const failed = status === "completed" && this.#agent.lastResult?.success === false;
		this.#updateStatusIndicator(failed ? "error" : status);
		if (status === "running") {
			this.#actionButton.textContent = "■";
			this.#actionButton.title = this.#i18n.t("ui.panel.stop");
		} else {
			this.#actionButton.textContent = "X";
			this.#actionButton.title = this.#i18n.t("ui.panel.close");
		}
		if (status === "running") {
			this.show();
			this.#hideInputArea();
		}
		if (status === "completed" || status === "error" || status === "stopped") {
			if (!this.#isExpanded) this.#expand();
			if (this.#shouldShowInputArea()) this.#showInputArea();
		}
	}
	/** Handle agent history change - re-render history list from agent.history */
	#handleHistoryChange() {
		this.#renderHistory();
	}
	/**
	* Handle agent activity - transient state for immediate UI feedback
	* Activity events are NOT persisted in history, only used for header bar updates
	*/
	#handleActivity(activity) {
		switch (activity.type) {
			case "thinking":
				this.#pendingHeaderText = this.#i18n.t("ui.panel.thinking");
				this.#updateStatusIndicator("thinking");
				break;
			case "executing":
				this.#pendingHeaderText = this.#getToolExecutingText(activity.tool, activity.input);
				this.#updateStatusIndicator("executing");
				break;
			case "executed":
				this.#pendingHeaderText = truncate(activity.output, 50);
				break;
			case "retrying":
				this.#pendingHeaderText = `Retrying (${activity.attempt}/${activity.maxAttempts})`;
				this.#updateStatusIndicator("retrying");
				break;
			case "error":
				this.#pendingHeaderText = truncate(activity.message, 50);
				this.#updateStatusIndicator("error");
				break;
		}
	}
	/**
	* Ask for user input (internal, called by agent via onAskUser).
	* Rejects when `signal` aborts (task stopped or disposed), cleaning up the
	* question card and pending state so the agent loop can settle.
	*/
	#askUser(question, signal) {
		return new Promise((resolve, reject) => {
			this.#isWaitingForUserAnswer = true;
			this.#userAnswerResolver = resolve;
			if (!this.#isExpanded) this.#expand();
			const tempCard = document.createElement("div");
			tempCard.innerHTML = createCard({
				icon: "❓",
				content: `Question: ${question}`,
				type: "question"
			});
			const cardElement = tempCard.firstElementChild;
			cardElement.setAttribute("data-temp-card", "true");
			this.#historySection.appendChild(cardElement);
			this.#scrollToBottom();
			this.#showInputArea(this.#i18n.t("ui.panel.userAnswerPrompt"));
			signal?.addEventListener("abort", () => {
				this.#removeTempCards();
				this.#isWaitingForUserAnswer = false;
				this.#userAnswerResolver = null;
				reject(signal.reason);
			}, { once: true });
		});
	}
	/** Remove temporary question cards (only direct children for safety) */
	#removeTempCards() {
		Array.from(this.#historySection.children).forEach((child) => {
			if (child.getAttribute("data-temp-card") === "true") child.remove();
		});
	}
	show() {
		this.wrapper.style.display = "block";
		this.wrapper.offsetHeight;
		this.wrapper.style.opacity = "1";
		this.wrapper.style.transform = "translateX(-50%) translateY(0)";
	}
	hide() {
		this.wrapper.style.opacity = "0";
		this.wrapper.style.transform = "translateX(-50%) translateY(20px)";
		this.wrapper.style.display = "none";
	}
	reset() {
		this.#statusText.textContent = this.#i18n.t("ui.panel.ready");
		this.#updateStatusIndicator("thinking");
		this.#renderHistory();
		this.#collapse();
		this.#isWaitingForUserAnswer = false;
		this.#userAnswerResolver = null;
		this.#showInputArea();
	}
	expand() {
		this.#expand();
	}
	collapse() {
		this.#collapse();
	}
	/**
	* Dispose panel and clean up event listeners
	*/
	dispose() {
		this.#agent.removeEventListener("statuschange", this.#onStatusChange);
		this.#agent.removeEventListener("historychange", this.#onHistoryChange);
		this.#agent.removeEventListener("activity", this.#onActivity);
		this.#agent.removeEventListener("dispose", this.#onAgentDispose);
		this.#isWaitingForUserAnswer = false;
		this.#stopHeaderUpdateLoop();
		this.wrapper.remove();
	}
	#getToolExecutingText(toolName, args) {
		const a = args;
		switch (toolName) {
			case "click_element_by_index": return this.#i18n.t("ui.tools.clicking", { index: a.index });
			case "input_text": return this.#i18n.t("ui.tools.inputting", { index: a.index });
			case "select_dropdown_option": return this.#i18n.t("ui.tools.selecting", { text: a.text });
			case "scroll": return this.#i18n.t("ui.tools.scrolling");
			case "wait": return this.#i18n.t("ui.tools.waiting", { seconds: a.seconds });
			case "ask_user": return this.#i18n.t("ui.tools.askingUser");
			case "done": return this.#i18n.t("ui.tools.done");
			default: return this.#i18n.t("ui.tools.executing", { toolName });
		}
	}
	/**
	* Action button handler: stop when running, close (dispose) when idle
	*/
	#handleActionButton() {
		if (this.#agent.status === "running") this.#agent.stop();
		else this.#agent.dispose();
	}
	/**
	* Submit task
	*/
	#submitTask() {
		const input = this.#taskInput.value.trim();
		if (!input) return;
		this.#hideInputArea();
		if (this.#isWaitingForUserAnswer) this.#handleUserAnswer(input);
		else this.#agent.execute(input);
	}
	/**
	* Handle user answer
	*/
	#handleUserAnswer(input) {
		this.#removeTempCards();
		this.#isWaitingForUserAnswer = false;
		if (this.#userAnswerResolver) {
			this.#userAnswerResolver(input);
			this.#userAnswerResolver = null;
		}
	}
	/**
	* Show input area
	*/
	#showInputArea(placeholder) {
		this.#taskInput.value = "";
		this.#taskInput.placeholder = placeholder || this.#i18n.t("ui.panel.taskInput");
		this.#inputSection.classList.remove(Panel_module_default.hidden);
		setTimeout(() => {
			this.#taskInput.focus();
		}, 100);
	}
	/**
	* Hide input area
	*/
	#hideInputArea() {
		this.#inputSection.classList.add(Panel_module_default.hidden);
	}
	/**
	* Check if input area should be shown
	*/
	#shouldShowInputArea() {
		if (this.#isWaitingForUserAnswer) return true;
		if (this.#agent.history.length === 0) return true;
		const status = this.#agent.status;
		if (status === "completed" || status === "error" || status === "stopped") return this.#config.promptForNextTask ?? true;
		return false;
	}
	#createWrapper() {
		const taskInputMaxLength = 1e3;
		const wrapper = document.createElement("div");
		wrapper.id = "page-agent-runtime_agent-panel";
		wrapper.className = Panel_module_default.wrapper;
		wrapper.setAttribute("data-browser-use-ignore", "true");
		wrapper.setAttribute("data-page-agent-ignore", "true");
		wrapper.innerHTML = `
			<div class="${Panel_module_default.background}"></div>
			<div class="${Panel_module_default.historySectionWrapper}">
				<div class="${Panel_module_default.historySection}">
					<div class="${Panel_module_default.historyItem}">
						<div class="${Panel_module_default.historyContent}">
							<span class="${Panel_module_default.statusIcon}">🧠</span>
							<span>${this.#i18n.t("ui.panel.waitingPlaceholder")}</span>
						</div>
					</div>
				</div>
			</div>
			<div class="${Panel_module_default.header}">
				<div class="${Panel_module_default.statusSection}">
					<div class="${Panel_module_default.indicator} ${Panel_module_default.thinking}"></div>
					<div class="${Panel_module_default.statusText}">${this.#i18n.t("ui.panel.ready")}</div>
				</div>
				<div class="${Panel_module_default.controls}">
					<button class="${Panel_module_default.controlButton} ${Panel_module_default.expandButton}" title="${this.#i18n.t("ui.panel.expand")}">
						▼
					</button>
					<button class="${Panel_module_default.controlButton} ${Panel_module_default.stopButton}" title="${this.#i18n.t("ui.panel.close")}">
						X
					</button>
				</div>
			</div>
			<div class="${Panel_module_default.inputSectionWrapper} ${Panel_module_default.hidden}">
				<div class="${Panel_module_default.inputSection}">
					<input 
						type="text" 
						class="${Panel_module_default.taskInput}" 
						maxlength="${taskInputMaxLength}"
					/>
				</div>
			</div>
		`;
		document.body.appendChild(wrapper);
		return wrapper;
	}
	#setupEventListeners() {
		this.wrapper.querySelector(`.${Panel_module_default.header}`).addEventListener("click", (e) => {
			if (e.target.closest(`.${Panel_module_default.controlButton}`)) return;
			this.#toggle();
		});
		this.#expandButton.addEventListener("click", (e) => {
			e.stopPropagation();
			this.#toggle();
		});
		this.#actionButton.addEventListener("click", (e) => {
			e.stopPropagation();
			this.#handleActionButton();
		});
		this.#taskInput.addEventListener("keydown", (e) => {
			if (e.isComposing) return;
			if (e.key === "Enter") {
				e.preventDefault();
				this.#submitTask();
			}
		});
		this.#inputSection.addEventListener("click", (e) => {
			e.stopPropagation();
		});
	}
	#toggle() {
		if (this.#isExpanded) this.#collapse();
		else this.#expand();
	}
	#expand() {
		this.#isExpanded = true;
		this.wrapper.classList.add(Panel_module_default.expanded);
		this.#expandButton.textContent = "▲";
	}
	#collapse() {
		this.#isExpanded = false;
		this.wrapper.classList.remove(Panel_module_default.expanded);
		this.#expandButton.textContent = "▼";
	}
	/**
	* Start periodic header update loop
	*/
	#startHeaderUpdateLoop() {
		this.#headerUpdateTimer = setInterval(() => {
			this.#checkAndUpdateHeader();
		}, 450);
	}
	/**
	* Stop periodic header update loop
	*/
	#stopHeaderUpdateLoop() {
		if (this.#headerUpdateTimer) {
			clearInterval(this.#headerUpdateTimer);
			this.#headerUpdateTimer = null;
		}
	}
	/**
	* Check if header needs update and trigger animation if not currently animating
	*/
	#checkAndUpdateHeader() {
		if (!this.#pendingHeaderText || this.#isAnimating) return;
		if (this.#statusText.textContent === this.#pendingHeaderText) {
			this.#pendingHeaderText = null;
			return;
		}
		const textToShow = this.#pendingHeaderText;
		this.#pendingHeaderText = null;
		this.#animateTextChange(textToShow);
	}
	/**
	* Animate text change with fade out/in effect
	*/
	#animateTextChange(newText) {
		this.#isAnimating = true;
		this.#statusText.classList.add(Panel_module_default.fadeOut);
		setTimeout(() => {
			this.#statusText.textContent = newText;
			this.#statusText.classList.remove(Panel_module_default.fadeOut);
			this.#statusText.classList.add(Panel_module_default.fadeIn);
			setTimeout(() => {
				this.#statusText.classList.remove(Panel_module_default.fadeIn);
				this.#isAnimating = false;
			}, 300);
		}, 150);
	}
	#updateStatusIndicator(type) {
		const variant = type === "running" ? "thinking" : type;
		this.#indicator.className = Panel_module_default.indicator;
		if (variant !== "idle" && variant !== "stopped") this.#indicator.classList.add(Panel_module_default[variant]);
	}
	#scrollToBottom() {
		setTimeout(() => {
			this.#historySection.scrollTop = this.#historySection.scrollHeight;
		}, 0);
	}
	/**
	* Render history directly from agent.history
	*
	* Renders:
	* 1. Task (first item, from agent.task)
	* 2. Reflection cards (evaluation, memory, next_goal)
	* 3. Tool execution with output
	* 4. Observations
	*/
	#renderHistory() {
		const items = [];
		const task = this.#agent.task;
		if (task) items.push(this.#createTaskCard(task));
		const history = this.#agent.history;
		for (const event of history) items.push(...this.#createHistoryCards(event));
		this.#historySection.innerHTML = items.join("");
		this.#scrollToBottom();
	}
	#createTaskCard(task) {
		return createCard({
			icon: "🎯",
			content: task,
			type: "input"
		});
	}
	/** Create cards for a history event */
	#createHistoryCards(event) {
		const cards = [];
		const meta = event.type === "step" && event.stepIndex !== void 0 ? this.#i18n.t("ui.panel.step", { number: (event.stepIndex + 1).toString() }) : void 0;
		if (event.type === "step") {
			if (event.reflection) {
				const lines = createReflectionLines(event.reflection);
				if (lines.length > 0) cards.push(createCard({
					icon: "🧠",
					content: lines,
					meta
				}));
			}
			const action = event.action;
			if (action) cards.push(...this.#createActionCards(action, meta));
		} else if (event.type === "observation") cards.push(createCard({
			icon: "👁️",
			content: event.content || "",
			meta,
			type: "observation"
		}));
		else if (event.type === "user_takeover") cards.push(createCard({
			icon: "👤",
			content: "User takeover",
			meta,
			type: "input"
		}));
		else if (event.type === "retry") {
			const retryInfo = `${event.message || "Retrying"} (${event.attempt}/${event.maxAttempts})`;
			cards.push(createCard({
				icon: "🔄",
				content: retryInfo,
				meta,
				type: "observation"
			}));
		} else if (event.type === "error") cards.push(createCard({
			icon: "❌",
			content: event.message || "Error",
			meta,
			type: "observation"
		}));
		return cards;
	}
	/** Create cards for an action */
	#createActionCards(action, meta) {
		const cards = [];
		if (action.name === "done") {
			const text = action.input.text || action.output || "";
			if (text) cards.push(createCard({
				icon: "🤖",
				content: text,
				meta,
				type: "output"
			}));
		} else if (action.name === "ask_user") {
			const input = action.input;
			const answer = action.output.replace(/^User answered:\s*/i, "");
			cards.push(createCard({
				icon: "❓",
				content: `Question: ${input.question || ""}`,
				meta,
				type: "question"
			}));
			cards.push(createCard({
				icon: "💬",
				content: `Answer: ${answer}`,
				meta,
				type: "input"
			}));
		} else {
			const toolText = this.#getToolExecutingText(action.name, action.input);
			cards.push(createCard({
				icon: "🔨",
				content: toolText,
				meta
			}));
			if (action.output?.length > 0) cards.push(createCard({
				icon: "🔨",
				content: action.output,
				meta,
				type: "output"
			}));
		}
		return cards;
	}
};
//#endregion
//#region src/PageAgent.ts
/**
* Copyright (C) 2025 Alibaba Group Holding Limited
* All rights reserved.
*/
/**
* Map the agent config language onto a language the panel UI actually ships.
* Unsupported languages fall back to English so the panel never renders
* untranslated keys.
*/
function resolvePanelLanguage(language) {
	return Object.keys(locales).find((candidate) => candidate === language) ?? "en-US";
}
var PageAgent = class extends PageAgentCore {
	panel;
	constructor(config) {
		const pageController = new PageController({
			...config,
			enableMask: config.enableMask ?? true
		});
		super({
			...config,
			pageController
		});
		this.panel = new Panel(this, {
			language: resolvePanelLanguage(config.language),
			promptForNextTask: config.promptForNextTask
		});
	}
};
//#endregion
export { PageAgent, PageAgentCore, tool };

//# sourceMappingURL=page-agent.js.map