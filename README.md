# 🐱 Purrfect App 📱

**React Native CLI · TypeScript**

Una aplicación móvil moderna desarrollada con **React Native CLI** y **TypeScript** que permite explorar información clara y confiable sobre diferentes razas de gatos.  
La app cuenta con un manejo eficiente de datos usando **TanStack React Query**.

---

## ✨ Características

🐾 Listado completo de razas de gatos  
🔍 Búsqueda de razas por nombre  
📄 Visualización de información detallada por raza  
🚀 Consumo de datos optimizado con React Query  
📱 Uso de componentes nativos para iOS y Android  
🎨 Interfaz limpia y amigable para el usuario  
🔑 Manejo seguro de la API Key mediante variables de entorno

---

## 🛠️ Tecnologías utilizadas

- **Frontend:** React Native (CLI)
- **Lenguaje:** TypeScript/JavaScript
- **Navegación:** React Navigation (Native Stack)
- **Manejo de estado y datos:** TanStack React Query
- **Cliente HTTP:** Axios
- **Íconos:** react-native-vector-icons
- **Variables de entorno:** react-native-dotenv
- **Testing (opcional):** Jest + React Testing Library

---

## 🔗 API

Esta aplicación consume datos desde **The Cat API**:

- **Endpoint:** `https://api.thecatapi.com/v1/breeds`
- **Documentación:** https://developers.thecatapi.com/

La autenticación se maneja mediante una **API Key** enviada en los headers de la petición.

---

## ⚙️ Instalación

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/carolianabetancur/purrfect-app.git
cd purrfect-app
```

---

### 2️⃣ Instalar dependencias

```bash
npm install
```
---

### 3️⃣ Configurar variables de entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
CAT_API_KEY=live_XXXXXXXXXXXXXXXXXXXXXXXX
```

Asegúrate de que `react-native-dotenv` esté correctamente configurado.

---

## ▶️ Ejecución de la app

### iOS (Simulador)

```bash
npx react-native run-ios
```

> Requiere macOS, Xcode y CocoaPods instalados.

---

### Android (Emulador o dispositivo físico)

```bash
npx react-native run-android
```

> Asegúrate de tener un emulador activo o un dispositivo conectado.

---

## 🧪 Testing

Para ejecutar las pruebas:

```bash
npm test
```

---

## 📂 Estructura del proyecto

```txt
src/
├── api/          # Configuración de Axios y servicios API
├── assets/       # Imágenes y recursos estáticos
├── components/   # Componentes UI reutilizables
├── navigation/   # Configuración de navegación
├── screens/      # Pantallas (Home, Detail, etc.)
├── hooks/        # Hooks personalizados (React Query)
├── types/        # Tipos y modelos en TypeScript
└── constants/    # Constantes y textos de la app
```

---

## 🔄 Flujo de trabajo recomendado

1. Iniciar Metro Bundler:
   ```bash
   npx react-native start
   ```

2. Ejecutar la app:
   - `npx react-native run-ios`
   - `npx react-native run-android`

3. Recargar la app:
   - Presionar `r` en la terminal
   - O usar el menú del simulador/dispositivo
