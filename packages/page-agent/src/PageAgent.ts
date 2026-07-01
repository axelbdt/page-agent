/**
 * Copyright (C) 2025 Alibaba Group Holding Limited
 * All rights reserved.
 */
import { type AgentConfig, PageAgentCore } from '@page-agent/core'
import { PageController, type PageControllerConfig } from '@page-agent/page-controller'
import {
	Panel,
	type PanelConfig,
	type SupportedLanguage as PanelLanguage,
	locales,
} from '@page-agent/ui'

export * from '@page-agent/core'

export type PageAgentConfig = AgentConfig & PageControllerConfig & Omit<PanelConfig, 'language'>

/**
 * Map the agent config language onto a language the panel UI actually ships.
 * Unsupported languages fall back to English so the panel never renders
 * untranslated keys.
 */
function resolvePanelLanguage(language: AgentConfig['language']): PanelLanguage {
	const panelLanguages = Object.keys(locales) as PanelLanguage[]
	return panelLanguages.find((candidate) => candidate === language) ?? 'en-US'
}

export class PageAgent extends PageAgentCore {
	panel: Panel

	constructor(config: PageAgentConfig) {
		const pageController = new PageController({
			...config,
			enableMask: config.enableMask ?? true,
		})

		super({ ...config, pageController })

		this.panel = new Panel(this, {
			language: resolvePanelLanguage(config.language),
			promptForNextTask: config.promptForNextTask,
		})
	}
}
