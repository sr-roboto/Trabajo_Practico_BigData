import React from 'react';

import grafico1 from '../assets/images/grafico1.png';
import grafico2 from '../assets/images/grafico2.png';
import grafico3 from '../assets/images/grafico3.png';
import grafico4 from '../assets/images/grafico4.png';
import grafico5 from '../assets/images/grafico5.png';
import LightweightChart from '../components/LightweightChart';

import NavBar from '../components/NavBar';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-300">
      {/* Encabezado */}
      <NavBar />
      {/* Contenido principal */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Sección 1: Número de muertes por día del mes */}
          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              🔍 Número de muertes por día del mes
            </h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
              reiciendis modi atque laborum officiis omnis, numquam harum rem
              hic dignissimos cupiditate sunt quasi fugit, perspiciatis sapiente
              pariatur dolor quos nobis.
            </p>
            <div className="flex justify-center">
              <img
                src={grafico1}
                alt="Gráfico comparativo entre robos y hurtos"
                width={700}
                height={400}
                className="rounded-lg"
              />
            </div>
          </section>

          {/* Sección 2: Top 10 barrios con más siniestros viales */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              🔍 Top 10 barrios con más siniestros viales
            </h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              perferendis atque autem quam eligendi deleniti error vitae, nihil
              ullam culpa dignissimos eius veniam unde quisquam facere est quasi
              enim libero!
            </p>
            <div className="flex justify-center">
              <img
                src={grafico2}
                alt="Gráfico comparativo entre robos y hurtos"
                width={700}
                height={400}
                className="rounded-lg"
              />
            </div>
          </section>

          {/* Sección 3: Comparativa: Robo vs Hurto */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              📊 Comparativa: Robo vs Hurto
            </h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              autem commodi ipsa. Beatae a impedit magnam, tempora eaque
              quisquam nostrum ullam ad quia soluta nam harum explicabo
              mollitia? Odio, consequatur?
            </p>
            <div className="flex justify-center">
              <img
                src={grafico3}
                alt="Gráfico de evolución mensual de delitos"
                width={700}
                height={400}
                className="rounded-lg"
              />
            </div>
          </section>

          {/* Sección 4: Evolución mensual de delitos */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              🕒 Evolución mensual de delitos
            </h2>
            <p className="text-gray-600 mb-4">
              Este gráfico muestra la evolución mensual de delitos en una
              determinada área geográfica, permitiendo visualizar cómo han
              variado los diferentes tipos de delitos a lo largo del tiempo.
              Cada punto en la gráfica representa el número de incidentes
              registrados en un mes específico, con la diferencia en la altura
              del área destacando los aumentos o disminuciones en la incidencia
              delictiva.
            </p>
            <h3 className="text-gray-800 font-bold mb-2.5">
              ¿Cómo nos ayuda analizar estos datos?
            </h3>
            <div className="ml-5">
              <ol className="list-decimal pl-5 text-pretty md:text-balance">
                <li className="mb-2">
                  <strong className="font-semibold ">
                    Identificación de patrones estacionales:
                  </strong>{' '}
                  <span className="text-gray-600">
                    Podemos observar si hay meses con mayor incidencia de
                    delitos, lo que podría estar relacionado con factores
                    estacionales (por ejemplo, las vacaciones, eventos
                    especiales o cambios climáticos).
                  </span>
                </li>
                <li className="mb-2">
                  <strong className="font-semibold">
                    Detección de picos de actividad delictiva:
                  </strong>{' '}
                  <span className="text-gray-600">
                    Los picos en la gráfica indican períodos en los que los
                    delitos aumentan significativamente, lo que puede ser una
                    señal de que se requiere una intervención más enfocada en
                    esos momentos.
                  </span>
                </li>
                <li className="mb-2">
                  <strong className="font-semibold">
                    Evaluación de la efectividad de políticas públicas:
                  </strong>{' '}
                  <span className="text-gray-600">
                    Al observar cómo varían los delitos a lo largo del tiempo,
                    podemos medir si las medidas de seguridad o políticas
                    implementadas están teniendo un impacto positivo, reduciendo
                    la criminalidad en ciertos meses.
                  </span>
                </li>
                <li className="mb-2">
                  <strong className="font-semibold">
                    Análisis de comportamiento territorial:
                  </strong>{' '}
                  <span className="text-gray-600">
                    Si agrupamos los delitos por barrios o áreas, podríamos
                    identificar si ciertos lugares experimentan incrementos o
                    disminuciones significativas en la actividad delictiva, lo
                    que permitiría una asignación más efectiva de recursos
                    policiales y prevención.
                  </span>
                </li>
                <li className="mb-2">
                  <strong className="font-semibold">
                    Predicción de futuras tendencias:
                  </strong>{' '}
                  <span className="text-gray-600">
                    Al observar las tendencias de meses anteriores, se pueden
                    hacer predicciones sobre futuros aumentos o disminuciones,
                    ayudando a planificar recursos y estrategias de prevención.
                  </span>
                </li>
              </ol>
            </div>

            <div className="w-full flex justify-center">
              <div className="w-full max-w-3xl">
                <LightweightChart />
              </div>
            </div>
          </section>

          {/* Sección 5: Delitos por franja horaria*/}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              🗺️ Delitos por franja horaria
            </h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              architecto error iusto alias soluta fuga provident officiis
              expedita aliquid excepturi est temporibus necessitatibus
              accusantium blanditiis, voluptate ratione doloremque at cumque.
            </p>
            <div className="flex justify-center">
              <img
                src={grafico5}
                alt="Mapa de calor de delitos por comuna"
                width={700}
                height={400}
                className="rounded-lg"
              />
            </div>
          </section>
        </div>
      </main>

      {/* Pie de página */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © 2024 Informe de Análisis de Delitos. Todos los datos presentados
            son de carácter público.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
