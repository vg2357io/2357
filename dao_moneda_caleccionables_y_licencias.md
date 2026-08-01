# Qubits, Coleccionables y Licencias del Ecosistema Entrelazados

Los **Qubits**, **Coleccionables** y **Licencias** forman la columna vertebral socioeconómica de Entrelazados: un sistema integral diseñado para acelerar el crecimiento del ecosistema, potenciar la difusión comunitaria, premiar la implicación de los usuarios y garantizar una gobernanza justa.

## Qubits y Gobernanza Anti-Ballenas

Los **Qubits** son la unidad monetaria y de gobernanza dentro de la economía interna de Entrelazados. Se utilizan para adquirir productos y servicios en la tienda, así como para votar en las decisiones clave del ecosistema.

### Mecanismo Anti-Ballenas: Curva de Voto Ponderado

Para evitar que usuarios con alta liquidez monopolicen el poder de decisión mediante la compra masiva de Qubits en la venta directa, el ecosistema descarta el modelo lineal de «1 Qubit = 1 Voto». En su lugar, aplica una función de **coste acumulativo basada en números primos**.

### La Fórmula de Coste

El coste acumulado de Qubits que un usuario debe abonar para emitir una cantidad $n$ de votos en una misma propuesta se define por la siguiente ecuación progresiva:

$$Coste_{Voto_n} = (23 \times p_n) + Coste_{Voto_{n-1}}$$

*Donde $p_n$ es el número primo correspondiente al nivel del voto solicitado ($p_1 = 2, p_2 = 3, p_3 = 5, p_4 = 7, p_5 = 11, \dots$) y $Coste_{Voto_0} = 0$.*

### Matriz de Esfuerzo de Voto

Siguiendo esta función, la progresión exacta de coste es:

* **1 Voto:** $0 + (23 \times 2) =$ **46 Qubits**
* **2 Votos:** $46 + (23 \times 3) =$ **115 Qubits**
* **3 Votos:** $115 + (23 \times 5) =$ **230 Qubits**
* **4 Votos:** $230 + (23 \times 7) =$ **391 Qubits**

> **Justificación Técnica:** Mientras que un usuario común puede aportar 1 voto de manera accesible con solo 46 Qubits, una ballena que posea 1.000 Qubits obtendrá un máximo de 5 votos netos en la misma propuesta. Esto diluye el impacto de la especulación monetaria y devuelve el control a la masa crítica comunitaria.

## Coleccionables

Los **Coleccionables** son activos vinculados a la cuenta del usuario que actúan como llaves de acceso e identidad dentro de la plataforma.

* **Gobernanza Restringida:** Desbloquean votaciones exclusivas asociadas al concepto o *radge* del coleccionable.
* **Reputación y Relación:** Un coleccionable tipo *radge* habilita la obtención de reputación y permite definir formalmente la naturaleza de la relación entre el usuario y dicho *radge*.

## Licencias Vitalicias

Cada licencia aplica su multiplicador (M) a los Qubits obtenidos por cupón.

Las Licencias son pases permanentes. Cuentan con una asignación global de **2 millones de Qubits/año** (166.660/mes), equivalentes a **19,57 Qubits por divisor unitario/mes** (Estos no aplican multiplicador).

> **Cálculo del Divisor Unitario:**
> $Divisor = (2.357 \times 3) + (257 \times 5) + (23 \times 7) = 7.071 + 1.285 + 161 = 8.517$

### Tabla Comparativa de Licencias

| Licencia | M      | Unidades Máx. | Qubits / Mes | Rol en discord | Nivel interacciones | Slots Radge         |
| --- |--------| --- | --- | --- | --- |---------------------|
| **Revelada** | **x7** | 23 | 137 | Si | 1 | 1x Alfa             |
| **Voluntaria** | **x5** | 257 | 98 | Si | 2 | 1x Beta             |
| **Equilibrada** | **x3** | 2.357 | 59 | Si | 3 | 1x Gamma y 1x Delta |
| **Consciente** | **x2** | 10.235.737 | 0 | Si | 4 | 1x Épsilon          |

## Utilidades y Casos de Uso

Los Qubits otorgan acceso directo al ecosistema comercial y participativo:

* **Canje de Coleccionables:**
* **Pack básico:** 73 Qubits/quincenal *(mensual hasta el eclipse fundamental)*.
* **Pack premium:** 257 Qubits/quincenal *(mensual hasta el eclipse fundamental)*.
* **Coleccionable Equilibrado:** 23 Qubits/mes.
* **Coleccionable Voluntario:** 53 Qubits/mes.


* **Créditos de Interacción:**
* **Ram:** 757 Qubits.
* **Bala:** 373 Qubits. (No se pueden usar en Ram)
* **Tzira:** 257 Qubits. (No se pueden usar en Ram ni en Bala)


* **Personalización:**
* Añadir una de las 23 facetas de equilibrio a un *radge* original: **5.233 Qubits**.


* **Derechos de Gobernanza:**
* La tenencia de Qubits determina la capacidad de voto del usuario (**los Qubits no se consumen al votar**).
* **Votaciones Comunitarias:** Abiertas a todos los integrantes.
* **Votaciones Específicas:** Requieren poseer el coleccionable correspondiente.

## Distribución del Token (Plan a 5 Años)

* **Suministro Total:** 25.000.000 Qubits.
* **Custodia e Infraestructura:** Inicialmente centralizados en [hub.2357.io](https://hub.2357.io) mediante *weLore*. A partir de **2029**, se activará un sistema mixto donde todos los activos podrán descentralizarse.
* **Inicio de Distribución:** Finales de 2026 con el lanzamiento de Ram.

### Reglas de Emisión

1. **Cupones:** Cada cupón otorga **13 Qubits**. Las licencias aplican su multiplicador (x2, x3, x5 o x7) eligiendo siempre la mejor opción disponible.
2. **Tickets:** Cada ticket concede **1.000 Qubits**.

### Reparto General del Supply

* **10M (40%):** Comunidad / Licencias vitalicias de mecenas.
* **5M (20%):** Venta directa.
* **4M (16%):** Cupones.
* **3M (12%):** Equilibrio.
* **2M (8%):** Embajadores.
* **1M (4%):** Equipo del ecosistema.

### Calendario Anual de Distribución

#### Cupones

* **Año 1:** 30.500 cupones (0,40 M Qubits)
* **Año 2:** 46.150 cupones (0,60 M Qubits)
* **Año 3:** 61.500 cupones (0,80 M Qubits)
* **Año 4:** 76.900 cupones (1,00 M Qubits)
* **Año 5:** 92.300 cupones (1,20 M Qubits)

#### Embajadores (Tickets de 1.000 Qubits)

* **Año 1:** 200 tickets | 0,20 M Qubits *(20 personas/mes)*
* **Año 2:** 300 tickets | 0,30 M Qubits *(30 personas/mes)*
* **Año 3:** 400 tickets | 0,40 M Qubits *(40 personas/mes)*
* **Año 4:** 500 tickets | 0,50 M Qubits *(50 personas/mes)*
* **Año 5:** 600 tickets | 0,60 M Qubits *(60 personas/mes)*

#### Equipo del Ecosistema

* **Año 1:** 25 tickets | 0,025 M Qubits *(2 personas/mes)*
* **Año 2:** 75 tickets | 0,075 M Qubits *(6 personas/mes)*
* **Año 3:** 200 tickets | 0,200 M Qubits *(20 personas/mes)*
* **Año 4:** 300 tickets | 0,300 M Qubits *(30 personas/mes)*
* **Año 5:** 400 tickets | 0,400 M Qubits *(40 personas/mes)*

#### Venta Directa

Se realiza una apertura mensual. Cada usuario puede adquirir un máximo de 3 tickets por mes a un precio variable. Durante el primer año hay un cupo de 50 tickets/mes.

* **Año 1:** 500 tickets (0,50 M Qubits)
* **Año 2:** 750 tickets (0,75 M Qubits)
* **Año 3:** 1.000 tickets (1,00 M Qubits)
* **Año 4:** 1.250 tickets (1,25 M Qubits)
* **Año 5:** 1.500 tickets (1,50 M Qubits)

## Mecanismos Económicos y Deflacionarios

**Quema de Qubits (*Burn*):**
* **No distribuidos:** Los Qubits que no hayan sido asignados al cierre de cada mes durante el periodo de 5 años serán quemados de forma permanente.
* **Ingresos de la tienda:** El gremio quema automáticamente el **30%** de los Qubits gastados por los usuarios en productos y servicios.

**Sistema de Referidos:**
* Si un usuario realiza una compra teniendo un referido asignado, el **20%** de los Qubits gastados se transfieren al referente.

**Bloqueo Temporal:**
* Entre el **50% y el 70%** de los Qubits utilizados en compras dentro de la tienda se mantendrán bloqueados temporalmente, por parte del gremio, hasta la finalización del programa de distribución de 5 años.
