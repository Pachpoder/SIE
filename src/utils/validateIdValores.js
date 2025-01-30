
export function validateIdValores(id) {
   switch (parseInt (id,10)) {
        case 1:
             return (
                 <>
                    <p>Estops son los valores</p>
                  </>
             )
        case 2:
            return (
                <>
                    <h2>Visión</h2>
                    <p>Consectetur adipiscing elit. Purusout phasellus malesuada lectus.</p>
                </>
            )
        case 3:
            return (
                <>
                    <h2>Valores</h2>
                    <p>Consectetur adipiscing elit. Purusout phasellus malesuada lectus.</p>
                </>
            )
   }
}