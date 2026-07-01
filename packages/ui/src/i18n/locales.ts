// English translations (base/reference language)
const enUS = {
	ui: {
		panel: {
			ready: 'Ready',
			thinking: 'Thinking...',
			taskInput: 'Enter new task, describe steps in detail, press Enter to submit',
			userAnswerPrompt: 'Please answer the question above, press Enter to submit',
			taskTerminated: 'Task terminated',
			taskCompleted: 'Task completed',
			userAnswer: 'User answer: {{input}}',
			question: 'Question: {{question}}',
			waitingPlaceholder: 'Waiting for task to start...',
			stop: 'Stop',
			close: 'Close',
			expand: 'Expand history',
			collapse: 'Collapse history',
			step: 'Step {{number}}',
		},
		tools: {
			clicking: 'Clicking element [{{index}}]...',
			inputting: 'Inputting text to element [{{index}}]...',
			selecting: 'Selecting option "{{text}}"...',
			scrolling: 'Scrolling page...',
			waiting: 'Waiting {{seconds}} seconds...',
			askingUser: 'Asking user...',
			done: 'Task done',
			clicked: '🖱️ Clicked element [{{index}}]',
			inputted: '⌨️ Inputted text "{{text}}"',
			selected: '☑️ Selected option "{{text}}"',
			scrolled: '🛞 Page scrolled',
			waited: '⌛️ Wait completed',
			executing: 'Executing {{toolName}}...',
			resultSuccess: 'success',
			resultFailure: 'failed',
			resultError: 'error',
		},
		errors: {
			elementNotFound: 'No interactive element found at index {{index}}',
			taskRequired: 'Task description is required',
			executionFailed: 'Task execution failed',
			notInputElement: 'Element is not an input or textarea',
			notSelectElement: 'Element is not a select element',
			optionNotFound: 'Option "{{text}}" not found',
		},
	},
} as const

// Chinese translations (must match the structure of enUS)
const zhCN = {
	ui: {
		panel: {
			ready: '准备就绪',
			thinking: '正在思考...',
			taskInput: '输入新任务，详细描述步骤，回车提交',
			userAnswerPrompt: '请回答上面问题，回车提交',
			taskTerminated: '任务已终止',
			taskCompleted: '任务结束',
			userAnswer: '用户回答: {{input}}',
			question: '询问: {{question}}',
			waitingPlaceholder: '等待任务开始...',
			stop: '终止',
			close: '关闭',
			expand: '展开历史',
			collapse: '收起历史',
			step: '步骤 {{number}}',
		},
		tools: {
			clicking: '正在点击元素 [{{index}}]...',
			inputting: '正在输入文本到元素 [{{index}}]...',
			selecting: '正在选择选项 "{{text}}"...',
			scrolling: '正在滚动页面...',
			waiting: '等待 {{seconds}} 秒...',
			askingUser: '正在询问用户...',
			done: '结束任务',
			clicked: '🖱️ 已点击元素 [{{index}}]',
			inputted: '⌨️ 已输入文本 "{{text}}"',
			selected: '☑️ 已选择选项 "{{text}}"',
			scrolled: '🛞 页面滚动完成',
			waited: '⌛️ 等待完成',
			executing: '正在执行 {{toolName}}...',
			resultSuccess: '成功',
			resultFailure: '失败',
			resultError: '错误',
		},
		errors: {
			elementNotFound: '未找到索引为 {{index}} 的交互元素',
			taskRequired: '任务描述不能为空',
			executionFailed: '任务执行失败',
			notInputElement: '元素不是输入框或文本域',
			notSelectElement: '元素不是选择框',
			optionNotFound: '未找到选项 "{{text}}"',
		},
	},
} as const

// French translations (must match the structure of enUS)
const frFR = {
	ui: {
		panel: {
			ready: 'Prêt',
			thinking: 'Réflexion...',
			taskInput:
				'Saisissez une nouvelle tâche, décrivez les étapes en détail, appuyez sur Entrée pour valider',
			userAnswerPrompt:
				'Veuillez répondre à la question ci-dessus, appuyez sur Entrée pour valider',
			taskTerminated: 'Tâche interrompue',
			taskCompleted: 'Tâche terminée',
			userAnswer: 'Réponse de l’utilisateur : {{input}}',
			question: 'Question : {{question}}',
			waitingPlaceholder: 'En attente du démarrage de la tâche...',
			stop: 'Arrêter',
			close: 'Fermer',
			expand: 'Afficher l’historique',
			collapse: 'Masquer l’historique',
			step: 'Étape {{number}}',
		},
		tools: {
			clicking: 'Clic sur l’élément [{{index}}]...',
			inputting: 'Saisie de texte dans l’élément [{{index}}]...',
			selecting: 'Sélection de l’option « {{text}} »...',
			scrolling: 'Défilement de la page...',
			waiting: 'Attente de {{seconds}} secondes...',
			askingUser: 'Question à l’utilisateur...',
			done: 'Tâche terminée',
			clicked: '🖱️ Élément cliqué [{{index}}]',
			inputted: '⌨️ Texte saisi « {{text}} »',
			selected: '☑️ Option sélectionnée « {{text}} »',
			scrolled: '🛞 Page défilée',
			waited: '⌛️ Attente terminée',
			executing: 'Exécution de {{toolName}}...',
			resultSuccess: 'réussi',
			resultFailure: 'échoué',
			resultError: 'erreur',
		},
		errors: {
			elementNotFound: 'Aucun élément interactif trouvé à l’index {{index}}',
			taskRequired: 'La description de la tâche est requise',
			executionFailed: 'Échec de l’exécution de la tâche',
			notInputElement: 'L’élément n’est pas un champ de saisie ou une zone de texte',
			notSelectElement: 'L’élément n’est pas une liste déroulante',
			optionNotFound: 'Option « {{text}} » introuvable',
		},
	},
} as const

// Spanish translations (must match the structure of enUS)
const esES = {
	ui: {
		panel: {
			ready: 'Listo',
			thinking: 'Pensando...',
			taskInput:
				'Introduce una nueva tarea, describe los pasos en detalle y pulsa Intro para enviar',
			userAnswerPrompt: 'Responde a la pregunta anterior y pulsa Intro para enviar',
			taskTerminated: 'Tarea interrumpida',
			taskCompleted: 'Tarea completada',
			userAnswer: 'Respuesta del usuario: {{input}}',
			question: 'Pregunta: {{question}}',
			waitingPlaceholder: 'Esperando a que empiece la tarea...',
			stop: 'Detener',
			close: 'Cerrar',
			expand: 'Mostrar historial',
			collapse: 'Ocultar historial',
			step: 'Paso {{number}}',
		},
		tools: {
			clicking: 'Haciendo clic en el elemento [{{index}}]...',
			inputting: 'Escribiendo texto en el elemento [{{index}}]...',
			selecting: 'Seleccionando la opción «{{text}}»...',
			scrolling: 'Desplazando la página...',
			waiting: 'Esperando {{seconds}} segundos...',
			askingUser: 'Preguntando al usuario...',
			done: 'Tarea finalizada',
			clicked: '🖱️ Elemento clicado [{{index}}]',
			inputted: '⌨️ Texto introducido «{{text}}»',
			selected: '☑️ Opción seleccionada «{{text}}»',
			scrolled: '🛞 Página desplazada',
			waited: '⌛️ Espera completada',
			executing: 'Ejecutando {{toolName}}...',
			resultSuccess: 'correcto',
			resultFailure: 'fallido',
			resultError: 'error',
		},
		errors: {
			elementNotFound: 'No se encontró ningún elemento interactivo en el índice {{index}}',
			taskRequired: 'La descripción de la tarea es obligatoria',
			executionFailed: 'Error al ejecutar la tarea',
			notInputElement: 'El elemento no es un campo de entrada ni un área de texto',
			notSelectElement: 'El elemento no es una lista desplegable',
			optionNotFound: 'Opción «{{text}}» no encontrada',
		},
	},
} as const

// Portuguese (Brazil) translations (must match the structure of enUS)
const ptBR = {
	ui: {
		panel: {
			ready: 'Pronto',
			thinking: 'Pensando...',
			taskInput:
				'Digite uma nova tarefa, descreva as etapas em detalhes e pressione Enter para enviar',
			userAnswerPrompt: 'Responda à pergunta acima e pressione Enter para enviar',
			taskTerminated: 'Tarefa interrompida',
			taskCompleted: 'Tarefa concluída',
			userAnswer: 'Resposta do usuário: {{input}}',
			question: 'Pergunta: {{question}}',
			waitingPlaceholder: 'Aguardando o início da tarefa...',
			stop: 'Parar',
			close: 'Fechar',
			expand: 'Mostrar histórico',
			collapse: 'Ocultar histórico',
			step: 'Etapa {{number}}',
		},
		tools: {
			clicking: 'Clicando no elemento [{{index}}]...',
			inputting: 'Inserindo texto no elemento [{{index}}]...',
			selecting: 'Selecionando a opção "{{text}}"...',
			scrolling: 'Rolando a página...',
			waiting: 'Aguardando {{seconds}} segundos...',
			askingUser: 'Perguntando ao usuário...',
			done: 'Tarefa concluída',
			clicked: '🖱️ Elemento clicado [{{index}}]',
			inputted: '⌨️ Texto inserido "{{text}}"',
			selected: '☑️ Opção selecionada "{{text}}"',
			scrolled: '🛞 Página rolada',
			waited: '⌛️ Espera concluída',
			executing: 'Executando {{toolName}}...',
			resultSuccess: 'sucesso',
			resultFailure: 'falhou',
			resultError: 'erro',
		},
		errors: {
			elementNotFound: 'Nenhum elemento interativo encontrado no índice {{index}}',
			taskRequired: 'A descrição da tarefa é obrigatória',
			executionFailed: 'Falha na execução da tarefa',
			notInputElement: 'O elemento não é um campo de entrada nem uma área de texto',
			notSelectElement: 'O elemento não é uma lista suspensa',
			optionNotFound: 'Opção "{{text}}" não encontrada',
		},
	},
} as const

// Italian translations (must match the structure of enUS)
const itIT = {
	ui: {
		panel: {
			ready: 'Pronto',
			thinking: 'Sto pensando...',
			taskInput:
				'Inserisci una nuova attività, descrivi i passaggi in dettaglio e premi Invio per inviare',
			userAnswerPrompt: 'Rispondi alla domanda qui sopra e premi Invio per inviare',
			taskTerminated: 'Attività interrotta',
			taskCompleted: 'Attività completata',
			userAnswer: 'Risposta dell’utente: {{input}}',
			question: 'Domanda: {{question}}',
			waitingPlaceholder: 'In attesa dell’avvio dell’attività...',
			stop: 'Interrompi',
			close: 'Chiudi',
			expand: 'Mostra cronologia',
			collapse: 'Nascondi cronologia',
			step: 'Passaggio {{number}}',
		},
		tools: {
			clicking: 'Clic sull’elemento [{{index}}]...',
			inputting: 'Inserimento del testo nell’elemento [{{index}}]...',
			selecting: 'Selezione dell’opzione «{{text}}»...',
			scrolling: 'Scorrimento della pagina...',
			waiting: 'Attesa di {{seconds}} secondi...',
			askingUser: 'Richiesta all’utente...',
			done: 'Attività completata',
			clicked: '🖱️ Elemento cliccato [{{index}}]',
			inputted: '⌨️ Testo inserito «{{text}}»',
			selected: '☑️ Opzione selezionata «{{text}}»',
			scrolled: '🛞 Pagina scorsa',
			waited: '⌛️ Attesa completata',
			executing: 'Esecuzione di {{toolName}}...',
			resultSuccess: 'riuscito',
			resultFailure: 'non riuscito',
			resultError: 'errore',
		},
		errors: {
			elementNotFound: 'Nessun elemento interattivo trovato all’indice {{index}}',
			taskRequired: 'La descrizione dell’attività è obbligatoria',
			executionFailed: 'Esecuzione dell’attività non riuscita',
			notInputElement: 'L’elemento non è un campo di input o un’area di testo',
			notSelectElement: 'L’elemento non è un elenco a discesa',
			optionNotFound: 'Opzione «{{text}}» non trovata',
		},
	},
} as const

// Type definitions generated from English base structure (but with string values)
type DeepStringify<T> = {
	[K in keyof T]: T[K] extends string ? string : T[K] extends object ? DeepStringify<T[K]> : T[K]
}

export type TranslationSchema = DeepStringify<typeof enUS>

// Utility type: Extract all nested paths from translation object
type NestedKeyOf<ObjectType extends object> = {
	[Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
		? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
		: `${Key}`
}[keyof ObjectType & (string | number)]

// Extract all possible key paths from translation structure
export type TranslationKey = NestedKeyOf<TranslationSchema>

// Parameterized translation types
export type TranslationParams = Record<string, string | number>

export const locales = {
	'en-US': enUS,
	'zh-CN': zhCN,
	'fr-FR': frFR,
	'es-ES': esES,
	'pt-BR': ptBR,
	'it-IT': itIT,
} as const

export type SupportedLanguage = keyof typeof locales
