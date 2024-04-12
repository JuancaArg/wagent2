const messages = {
	es: {
	  translations: {
		signup: {
		  title: "Registrarse",
		  toasts: {
			success: "Usuario creado correctamente :D!",
			fail: "Eror al crear usuario :(, verifique los datos",
		  },
		  form: {
			name: "Nombre",
			email: "Email",
			password: "Contraseña",
		  },
		  buttons: {
			submit: "Registrar",
			login: "Ya tienes una cuenta? Ingresa :D",
		  },
		},
		login: {
		  title: "Login",
		  form: {
			email: "Email",
			password: "Contraseña",
		  },
		  buttons: {
			submit: "Entrar",
			register: "Aun no tienes cuenta :(? Registrarte",
		  },
		},
		companies: {
		  title: "Registrar Empresa",
		  form: {
			name: "Nombre de Empresa",
			plan: "Plan",
			token: "Token",
			submit: "Registrar",
			success: "Empresa registrada :D",
		  },
		},
		auth: {
		  toasts: {
			success: "Se inicio correctamente :D",
		  },
		  token: "Token",
		},
		dashboard: {
		  charts: {
			perDay: {
			  title: "Tickets de hoy: ",
			},
		  },
		},
		connections: {
		  title: "WhatsApps",
		  toasts: {
			deleted: "El whatsapp se elimino correctamente :D",
		  },
		  confirmationModal: {
			deleteTitle: "Eliminar",
			deleteMessage: "¿Estás seguro? Esta acción no se puede revertir.",
			disconnectTitle: "Desconectar",
			disconnectMessage:
			  "¿Está seguro? Deberá escanear el código QR nuevamente.",
		  },
		  buttons: {
			add: "Agregar WhatsApp",
			disconnect: "Desconectar",
			tryAgain: "Intentar nuevamente",
			qrcode: "QR CODE",
			newQr: "Nuevo QR CODE",
			connecting: "Conectando",
		  },
		  toolTips: {
			disconnected: {
			  title: "No se pudo iniciar sesión :(",
			  content:
				"Asegúrese de que su teléfono esté conectado a Internet e inténtelo nuevamente o solicite un nuevo código QR",
			},
			qrcode: {
			  title: "Esperando que se lea el código QR",
			  content:
				"Haz clic en el botón 'CÓDIGO QR' y escanea el Código QR con tu celular para iniciar la sesión",
			},
			connected: {
			  title: "Whatsapp conectado :D!",
			},
			timeout: {
			  title: "Conexión perdida :(",
			  content:
				"Asegúrese de que su teléfono esté conectado a Internet y WhatsApp esté abierto, o haga clic en el botón 'Desconectar' para obtener un nuevo código QR.",
			},
		  },
		  table: {
			name: "Nombres",
			status: "Status",
			lastUpdate: "Última actualización",
			default: "Predeterminado",
			actions: "Acciones",
			session: "Sesión",
		  },
		},
		whatsappModal: {
		  title: {
			add: "Agregar WhatsApp",
			edit: "Editar WhatsApp",
		  },
		  form: {
			name: "Nombre",
			default: "Por Defecto",
			sendIdQueue: "Fila",
			timeSendQueue: "Redireccionar a la fila en X minutos",
			queueRedirection: "Redireccionar a Fila",
			queueRedirectionDesc:
			  "Seleccionar Fila que se redireccionara a los contactos",
			prompt: "Prompt",
		  },
		  buttons: {
			okAdd: "Agregar",
			okEdit: "Guardar",
			cancel: "Cancelar",
		  },
		  success: "Se guardo correctamente :D",
		},
		qrCode: {
		  message: "Escanea el QrCode para iniciar la sesión",
		},
		contacts: {
		  title: "Contactos",
		  toasts: {
			deleted: "¡Contacto eliminado exitosamente!",
		  },
		  searchPlaceholder: "Buscar...",
		  confirmationModal: {
			deleteTitle: "Eliminar ",
			importTitlte: "Importar contactos",
			deleteMessage:
			  "¿Estás seguro de que deseas eliminar este contacto? Se perderán todos los servicios relacionados.",
			importMessage:
			  "¿Quieres importar todos los contactos desde tu teléfono?",
		  },
		  buttons: {
			import: "Importar contactos",
			add: "Adicionar contacto",
		  },
		  table: {
			name: "Nombre",
			whatsapp: "WhatsApp",
			email: "Email",
			actions: "Acciones",
		  },
		},
		promptModal: {
		  form: {
			name: "Nombre",
			prompt: "Prompt",
			voice: "Voz",
			max_tokens: "Tokens máximos en respuesta",
			temperature: "Temperatura",
			apikey: "API Key",
			max_messages: "Mensajes máximos en el historial",
			voiceKey: "Clave API de voz",
			voiceRegion: "Región de voz",
		  },
		  success: "Prompt guardado correctamente :D",
		  title: {
			add: "Agregar Prompt",
			edit: "Editar Prompt",
		  },
		  buttons: {
			okAdd: "Agregar",
			okEdit: "Guardar",
			cancel: "Cancelar",
		  },
		},
		prompts: {
		  title: "Prompts",
		  table: {
			name: "Nombre",
			queue: "Setor/Fila",
			max_tokens: "Tokens maximo de respuesta",
			actions: "Acciones",
		  },
		  confirmationModal: {
			deleteTitle: "Excluir",
			deleteMessage: "¿Estás seguro? ¡Esta acción no se puede revertir!",
		  },
		  buttons: {
			add: "Agregar Prompt",
		  },
		},
		contactModal: {
		  title: {
			add: "Agregar contacto",
			edit: "Editar contacto",
		  },
		  form: {
			mainInfo: "Datos del contacto",
			extraInfo: "Información adicional",
			name: "Nombre",
			number: "Número de Whatsapp",
			email: "Correo electrónico",
			extraName: "Nombre del campo",
			extraValue: "Valor",
		  },
		  buttons: {
			addExtraInfo: "Agregar información adicional",
			okAdd: "Agregar",
			okEdit: "Guardar",
			cancel: "Cancelar",
		  },
		  success: "Contacto guardado exitosamente.",
		},
		queueModal: {
		  title: {
			add: "Agregar fila",
			edit: "Editar fila",
		  },
		  form: {
			name: "Nombre",
			color: "Color",
			greetingMessage: "Mensaje de saludo",
			complationMessage: "Mensaje de finalización",
			outOfHoursMessage: "Mensaje fuera de horario",
			ratingMessage: "Mensaje de calificación",
			token: "Token",
			orderQueue: "Orden de la fila (Bot)",
		  },
		  buttons: {
			okAdd: "Agregar",
			okEdit: "Guardar",
			cancel: "Cancelar",
		  },
		},
		userModal: {
		  title: {
			add: "Agregar usuario",
			edit: "Editar usuario",
		  },
		  form: {
			name: "Nombre",
			email: "Correo electrónico",
			password: "Contraseña",
			profile: "Perfil",
			whatsapp: "Conexión predeterminada",
			greetingMessage: "Mensaje de saludo",
			transferMessage: "Mensaje de transferencia",
		  },
		  buttons: {
			okAdd: "Agregar",
			okEdit: "Guardar",
			cancel: "Cancelar",
		  },
		  success: "Usuario guardado exitosamente.",
		},
		scheduleModal: {
		  title: {
			add: "Nuevo Agendamiento",
			edit: "Editar Agendamiento",
		  },
		  form: {
			body: "Mensaje",
			contact: "Contacto",
			sendAt: "Fecha de Agendamiento",
			sentAt: "Fecha de Envío",
		  },
		  buttons: {
			okAdd: "Agregar",
			okEdit: "Guardar",
			cancel: "Cancelar",
		  },
		  success: "Agendamiento guardado exitosamente.",
		},
		tagModal: {
		  title: {
			add: "Nueva Etiqueta",
			edit: "Editar Etiqueta",
		  },
		  form: {
			name: "Nombre",
			color: "Color",
		  },
		  buttons: {
			okAdd: "Agregar",
			okEdit: "Guardar",
			cancel: "Cancelar",
		  },
		  success: "Etiqueta guardada exitosamente.",
		},
		chat: {
		  noTicketMessage:
			"No hay ningún ticket seleccionado para comenzar la conversación.",
		},
		uploads: {
		  titles: {
			titleUploadMsgDragDrop:
			  "ARRASTRA Y SUELTA ARCHIVOS EN EL CAMPO ABAJO",
			titleFileList: "Lista de archivo(s)",
		  },
		},
		ticketsManager: {
		  buttons: {
			newTicket: "Nuevo",
		  },
		},
		ticketsQueueSelect: {
		  placeholder: "Filas",
		},
		tickets: {
		  toasts: {
			deleted: "El ticket en el que estabas ha sido eliminado.",
		  },
		  notification: {
			message: "Mensaje de",
		  },
		  tabs: {
			open: { title: "Abiertos" },
			closed: { title: "Resueltos" },
			search: { title: "Búsqueda" },
		  },
		  search: {
			placeholder: "Buscar tickets y mensajes",
		  },
		  buttons: {
			showAll: "Mostrar todos",
		  },
		},
		transferTicketModal: {
		  title: "Transferir Ticket",
		  fieldLabel: "Escriba para buscar usuarios",
		  fieldQueueLabel: "Transferir a fila",
		  fieldQueuePlaceholder: "Seleccione una fila",
		  noOptions: "Ningún usuario encontrado con ese nombre",
		  buttons: {
			ok: "Transferir",
			cancel: "Cancelar",
		  },
		},
		ticketsList: {
		  pendingHeader: "Pendientes",
		  assignedHeader: "En atención",
		  noTicketsTitle: "¡Nada aquí!",
		  noTicketsMessage:
			"No se encontraron tickets con este estado o término de búsqueda",
		  buttons: {
			accept: "Aceptar",
			closed: "Cerrar",
			reopen: "Reabrir",
		  },
		},
		newTicketModal: {
		  title: "Crear Ticket",
		  fieldLabel: "Escriba para buscar el contacto",
		  add: "Agregar",
		  buttons: {
			ok: "Guardar",
			cancel: "Cancelar",
		  },
		},
		mainDrawer: {
		  listItems: {
			dashboard: "Tablero",
			Tarefas: "Tareas",
			connections: "Whatsapp Conectados",
			tickets: "Tickets",
			quickMessages: "Respuestas Rápidas",
			contacts: "Contactos",
			queues: "Colas y Chatbot",
			tags: "Etiquetas",
			administration: "Administración",
			users: "Usuarios",
			settings: "Configuraciones",
			helps: "Ayuda",
			messagesAPI: "API de Mensajes",
			schedules: "Agendamientos",
			campaigns: "Campañas",
			announcements: "Anuncios",
			chats: "Chat Interno",
			financeiro: "Finanzas",
			files: "Lista de archivos",
			prompts: "OpenAI",
		  },
		  appBar: {
			user: {
			  profile: "Perfil",
			  logout: "Cerrar sesión",
			},
		  },
		},
		files: {
		  title: "Lista de archivos",
		  table: {
			name: "Nombre",
			contacts: "Contactos",
			actions: "Acción",
		  },
		  toasts: {
			deleted: "¡Lista eliminada exitosamente!",
			deletedAll: "¡Todas las listas se han eliminado exitosamente!",
		  },
		  buttons: {
			add: "Agregar",
			deleteAll: "Eliminar todos",
		  },
		  confirmationModal: {
			deleteTitle: "Eliminar",
			deleteAllTitle: "Eliminar todos",
			deleteMessage: "¿Estás seguro de que deseas eliminar esta lista?",
			deleteAllMessage:
			  "¿Estás seguro de que deseas eliminar todas las listas?",
		  },
		},
		messagesAPI: {
		  title: "API de Mensajes",
		  textMessage: {
			number: "Número",
			body: "Mensaje",
			token: "Token registrado",
		  },
		  mediaMessage: {
			number: "Número",
			body: "Nombre del archivo",
			media: "Archivo",
			token: "Token registrado",
		  },
		},
		notifications: {
		  noTickets: "Ninguna notificación.",
		},
		quickMessages: {
		  title: "Respuestas Rápidas",
		  searchPlaceholder: "Buscar...",
		  noAttachment: "Sin adjunto",
		  confirmationModal: {
			deleteTitle: "Eliminación",
			deleteMessage: "¡Esta acción es irreversible! ¿Desea continuar?",
		  },
		  buttons: {
			add: "Agregar",
			attach: "Adjuntar Archivo",
			cancel: "Cancelar",
			edit: "Editar",
		  },
		  toasts: {
			success: "Atajo agregado correctamente.",
			deleted: "Atajo eliminado correctamente.",
		  },
		  dialog: {
			title: "Mensaje Rápido",
			shortcode: "Atajo",
			message: "Respuesta",
			save: "Guardar",
			cancel: "Cancelar",
			allowEdit: "Permitir editar",
			add: "Agregar",
			edit: "Editar",
			allowView: "Permitir vista",
		  },
		  table: {
			shortcode: "Atajo",
			message: "Mensaje",
			actions: "Acciones",
			mediaName: "Nombre del Archivo",
			status: "Estado",
		  },
		},
		messageVariablesPicker: {
		  label: "Variables disponibles",
		  vars: {
			contactFirstName: "Primer Nombre",
			contactName: "Nombre del Contacto",
			greeting: "Saludo",
			protocolNumber: "Número de Protocolo",
			date: "Fecha",
			hour: "Hora",
		  },
		},
		contactLists: {
		  title: "Listas de Contactos",
		  table: {
			name: "Nombre",
			contacts: "Contactos",
			actions: "Acciones",
		  },
		  buttons: {
			add: "Nueva Lista",
		  },
		  dialog: {
			name: "Nombre",
			company: "Empresa",
			okEdit: "Editar",
			okAdd: "Agregar",
			add: "Agregar",
			edit: "Editar",
			cancel: "Cancelar",
		  },
		  confirmationModal: {
			deleteTitle: "Eliminar",
			deleteMessage: "Esta acción no se puede revertir.",
		  },
		  toasts: {
			deleted: "Registro eliminado.",
		  },
		},
		contactListItems: {
		  title: "Contactos",
		  searchPlaceholder: "Buscar",
		  buttons: {
			add: "Nuevo",
			lists: "Listas",
			import: "Importar",
		  },
		  dialog: {
			name: "Nombre",
			number: "Número",
			whatsapp: "Whatsapp",
			email: "Correo electrónico",
			okEdit: "Editar",
			okAdd: "Agregar",
			add: "Agregar",
			edit: "Editar",
			cancel: "Cancelar",
		  },
		  table: {
			name: "Nombre",
			number: "Número",
			whatsapp: "Whatsapp",
			email: "Correo electrónico",
			actions: "Acciones",
		  },
		  confirmationModal: {
			deleteTitle: "Eliminar",
			deleteMessage: "Esta acción no se puede revertir.",
			importMessage:
			  "¿Deseas importar los contactos de esta hoja de cálculo?",
			importTitlte: "Importar",
		  },
		  toasts: {
			deleted: "Registro eliminado",
		  },
		},
		campaigns: {
		  title: "Campañas",
		  searchPlaceholder: "Buscar",
		  buttons: {
			add: "Nueva Campaña",
			contactLists: "Listas de Contactos",
		  },
		  table: {
			name: "Nombre",
			whatsapp: "whatsapp",
			contactList: "Lista de Contactos",
			status: "Estado",
			scheduledAt: "Programada para",
			completedAt: "Completada",
			confirmation: "Confirmación",
			actions: "Acciones",
		  },
		  dialog: {
			new: "Nueva Campaña",
			update: "Editar Campaña",
			readonly: "Solo lectura",
			form: {
			  name: "Nombre",
			  message1: "Mensaje 1",
			  message2: "Mensaje 2",
			  message3: "Mensaje 3",
			  message4: "Mensaje 4",
			  message5: "Mensaje 5",
			  confirmationMessage1: "Mensaje de Confirmación 1",
			  confirmationMessage2: "Mensaje de Confirmación 2",
			  confirmationMessage3: "Mensaje de Confirmación 3",
			  confirmationMessage4: "Mensaje de Confirmación 4",
			  confirmationMessage5: "Mensaje de Confirmación 5",
			  messagePlaceholder: "Contenido del mensaje",
			  whatsapp: "whatsapp",
			  status: "Estado",
			  scheduledAt: "Programada para",
			  confirmation: "Confirmación",
			  contactList: "Lista de Contacto",
			  tagList: "Lista de Etiquetas",
			  fileList: "Lista de Archivos",
			},
			buttons: {
			  add: "Agregar",
			  edit: "Actualizar",
			  okadd: "OK",
			  cancel: "Cancelar Disparos",
			  restart: "Reiniciar Disparos",
			  close: "Cerrar",
			  attach: "Adjuntar Archivo",
			},
		  },
		  confirmationModal: {
			deleteTitle: "Eliminar",
			deleteMessage: "Esta acción no se puede revertir.",
		  },
		  toasts: {
			success: "Operación realizada con éxito",
			cancel: "Campaña cancelada",
			restart: "Campaña reiniciada",
			deleted: "Registro eliminado",
		  },
		},
  
		announcements: {
		  active: "Activo",
		  inactive: "Inactivo",
		  title: "Anuncios",
		  searchPlaceholder: "Buscar",
		  buttons: {
			add: "Nuevo Anuncio",
			contactLists: "Listas de Anuncios",
		  },
		  table: {
			priority: "Prioridad",
			title: "Título",
			text: "Texto",
			mediaName: "Archivo",
			status: "Estado",
			actions: "Acciones",
		  },
		  dialog: {
			edit: "Edición de Anuncio",
			add: "Nuevo Anuncio",
			update: "Editar Anuncio",
			readonly: "Solo Lectura",
			form: {
			  priority: "Prioridad",
			  title: "Título",
			  text: "Texto",
			  mediaPath: "Archivo",
			  status: "Estado",
			},
			buttons: {
			  add: "Agregar",
			  edit: "Actualizar",
			  okadd: "OK",
			  cancel: "Cancelar",
			  close: "Cerrar",
			  attach: "Adjuntar Archivo",
			},
		  },
		  confirmationModal: {
			deleteTitle: "Eliminar",
			deleteMessage: "¡Esta acción no se puede revertir!",
		  },
		  toasts: {
			success: "Operación realizada con éxito",
			deleted: "Registro eliminado",
		  },
		},
		campaignsConfig: {
		  title: "Configuraciones de Campañas",
		},
		queues: {
		  title: "Colas y Chatbot",
		  table: {
			name: "Nombre",
			color: "Color",
			greeting: "Mensaje de saludo",
			actions: "Acciones",
			orderQueue: "Orden de la cola (bot)",
		  },
		  buttons: {
			add: "Agregar cola",
		  },
		  confirmationModal: {
			deleteTitle: "Eliminar",
			deleteMessage:
			  "¿Está seguro? ¡Esta acción no se puede revertir! Los tickets en esta cola seguirán existiendo, pero no tendrán ninguna cola asignada.",
		  },
		},
		queueSelect: {
		  inputLabel: "Colas",
		},
		users: {
		  title: "Usuarios",
		  table: {
			name: "Nombre",
			email: "Correo electrónico",
			profile: "Perfil",
			actions: "Acciones",
		  },
		  buttons: {
			add: "Agregar usuario",
		  },
		  toasts: {
			deleted: "Usuario eliminado exitosamente.",
		  },
		  confirmationModal: {
			deleteTitle: "Eliminar",
			deleteMessage:
			  "Todos los datos del usuario se perderán. Los tickets abiertos de este usuario serán movidos a la cola.",
		  },
		},
		helps: {
		  title: "Centro de Ayuda",
		},
		schedules: {
		  title: "Agendamientos",
		  confirmationModal: {
			deleteTitle:
			  "¿Estás seguro de que deseas eliminar este Agendamiento?",
			deleteMessage: "Esta acción no se puede revertir.",
		  },
		  table: {
			contact: "Contacto",
			body: "Mensaje",
			sendAt: "Fecha de Agendamiento",
			sentAt: "Fecha de Envío",
			status: "Estado",
			actions: "Acciones",
		  },
		  buttons: {
			add: "Nuevo Agendamiento",
		  },
		  toasts: {
			deleted: "Agendamiento eliminado exitosamente.",
		  },
		},
  
		tags: {
		  title: "Etiquetas",
		  confirmationModal: {
			deleteTitle: "¿Estás seguro de que deseas eliminar esta etiqueta?",
			deleteMessage: "Esta acción no se puede revertir.",
		  },
		  table: {
			name: "Nombre",
			color: "Color",
			tickets: "Registros Etiquetados",
			actions: "Acciones",
		  },
		  buttons: {
			add: "Nueva Etiqueta",
		  },
		  toasts: {
			deleted: "Etiqueta eliminada exitosamente.",
		  },
		},
		settings: {
		  success: "Configuraciones guardadas exitosamente.",
		  title: "Configuraciones",
		  settings: {
			userCreation: {
			  name: "Creación de usuario",
			  options: {
				enabled: "Habilitado",
				disabled: "Deshabilitado",
			  },
			},
		  },
		},
		messagesList: {
		  header: {
			assignedTo: "Asignado a:",
			buttons: {
			  return: "Devolver",
			  resolve: "Resolver",
			  reopen: "Reabrir",
			  accept: "Aceptar",
			},
		  },
		},
  
		messagesInput: {
		  placeholderOpen: "Escribe un mensaje",
		  placeholderClosed:
			"Reabra o acepte este ticket para enviar un mensaje.",
		  signMessage: "Firmar",
		},
		contactDrawer: {
		  header: "Datos de contacto",
		  buttons: {
			edit: "Editar contacto",
		  },
		  extraInfo: "Otra información",
		},
		fileModal: {
		  title: {
			add: "Agregar lista de archivos",
			edit: "Editar lista de archivos",
		  },
		  buttons: {
			okAdd: "Guardar",
			okEdit: "Editar",
			cancel: "Cancelar",
			fileOptions: "Agregar archivo",
		  },
		  form: {
			name: "Nombre de la lista de archivos",
			message: "Detalles de la lista",
			fileOptions: "Lista de archivos",
			extraName: "Mensaje para enviar con el archivo",
			extraValue: "Valor de la opción",
		  },
		  success: "¡Lista de archivos guardada exitosamente!",
		},
		ticketOptionsMenu: {
		  schedule: "Agendamiento",
		  delete: "Eliminar",
		  transfer: "Transferir",
		  registerAppointment: "Observaciones del contacto",
		  appointmentsModal: {
			title: "Observaciones del contacto",
			textarea: "Observación",
			placeholder: "Ingrese aquí la información que desea registrar",
		  },
		  confirmationModal: {
			title: "Eliminar el ticket del contacto",
			message:
			  "¡Atención! Todos los mensajes relacionados con el ticket se perderán.",
		  },
		  buttons: {
			delete: "Eliminar",
			cancel: "Cancelar",
		  },
		},
		confirmationModal: {
		  buttons: {
			confirm: "Aceptar",
			cancel: "Cancelar",
		  },
		},
		messageOptionsMenu: {
		  delete: "Eliminar",
		  reply: "Responder",
		  confirmationModal: {
			title: "¿Eliminar mensaje?",
			message: "Esta acción no se puede revertir.",
		  },
		},
		backendErrors: {
		  ERR_NO_OTHER_WHATSAPP:
			"Debe haber al menos un WhatsApp predeterminado.",
		  ERR_NO_DEF_WAPP_FOUND:
			"No se encontró ningún WhatsApp predeterminado. Verifique la página de Whatsapps Conectados.",
		  ERR_WAPP_NOT_INITIALIZED:
			"Esta sesión de WhatsApp no ha sido inicializada. Verifique la página de Whatsapps Conectados.",
		  ERR_WAPP_CHECK_CONTACT:
			"No se pudo verificar el contacto de WhatsApp. Verifique la página de Whatsapps Conectados.",
		  ERR_WAPP_INVALID_CONTACT: "Este no es un número de WhatsApp válido.",
		  ERR_WAPP_DOWNLOAD_MEDIA:
			"No se pudo descargar medios de WhatsApp. Verifique la página de Whatsapps Conectados.",
		  ERR_INVALID_CREDENTIALS:
			"Error de autenticación. Por favor, inténtelo de nuevo.",
		  ERR_SENDING_WAPP_MSG:
			"Error al enviar mensaje de WhatsApp. Verifique la página de Whatsapps Conectados.",
		  ERR_DELETE_WAPP_MSG: "No se pudo eliminar el mensaje de WhatsApp.",
		  ERR_OTHER_OPEN_TICKET:
			"Ya existe un ticket abierto para este contacto.",
		  ERR_SESSION_EXPIRED:
			"Sesión expirada. Por favor, inicie sesión nuevamente.",
		  ERR_USER_CREATION_DISABLED:
			"La creación de usuario ha sido deshabilitada por el administrador.",
		  ERR_NO_PERMISSION: "No tiene permiso para acceder a este recurso.",
		  ERR_DUPLICATED_CONTACT: "Ya existe un contacto con este número.",
		  ERR_NO_SETTING_FOUND:
			"No se encontró ninguna configuración con este ID.",
		  ERR_NO_CONTACT_FOUND: "No se encontró ningún contacto con este ID.",
		  ERR_NO_TICKET_FOUND: "No se encontró ningún ticket con este ID.",
		  ERR_NO_USER_FOUND: "No se encontró ningún usuario con este ID.",
		  ERR_NO_WAPP_FOUND: "No se encontró ningún WhatsApp con este ID.",
		  ERR_CREATING_MESSAGE: "Error al crear mensaje en la base de datos.",
		  ERR_CREATING_TICKET: "Error al crear ticket en la base de datos.",
		  ERR_FETCH_WAPP_MSG:
			"Error al recuperar el mensaje de WhatsApp, puede que sea muy antiguo.",
		  ERR_QUEUE_COLOR_ALREADY_EXISTS:
			"Este color ya está en uso, elija otro.",
		  ERR_WAPP_GREETING_REQUIRED:
			"El mensaje de saludo es obligatorio cuando hay más de una cola.",
		},
		Generales:{
			Atendimento: "Atención Clientes",
			Gerência: "Reportes",
			Configurações: "Configuración",
			listas_de_contatos: "Lista de contactos",
			Listagem: "Listado",
			Tarefas: "Tareas"
		}
	  },
	},
  };

  export { messages };
  
