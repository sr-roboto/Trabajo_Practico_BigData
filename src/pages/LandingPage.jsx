import React from 'react';

import grafico1 from '../assets/images/grafico1.png';
import grafico2 from '../assets/images/grafico2.png';
import grafico3 from '../assets/images/grafico3.png';
import grafico4 from '../assets/images/grafico4.png';
import grafico5 from '../assets/images/grafico5.png';
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
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              amet cupiditate praesentium impedit dolor, vitae, nesciunt
              possimus ex sit magni accusamus corporis deserunt iste quod
              expedita recusandae molestiae, officia nobis.
            </p>
            <div className="flex justify-center">
              <img
                src={grafico4}
                alt="Gráfico de distribución de delitos por hora"
                width={700}
                height={400}
                className="rounded-lg"
              />
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
