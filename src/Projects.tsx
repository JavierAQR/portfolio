import Card from "./Card";
import ProjectsContainer from "./ProjectsContainer";

const Projects = () => {
  return (
    <>
      <ProjectsContainer name="Proyectos Individuales">
        <Card
          title="gestor de finanzas personales"
          description="Permite registrar transacciones de categorías personalizables,
          visualizar un historial en tablas dinámicas y establecer presupuestos.
          Además, integra gráficos estadísticos para el seguimiento correcto de
          las transacciones."
          img="gestor-finanzas"
          webName="gestor-finanzas"
          codeName="JavierAQR/gestor-finanzas"
          tags={[
            "React",
            "TypeScript",
            "react-hook-form",
            "echarts",
            "react-router",
            "zod",
          ]}
        />

        <Card
          title="adivina la palabra"
          description="Juego inspirado en Wordle que cuenta con modos de 1 y 2 jugadores (en local). El juego sigue la esencia clásica de adivinar la palabra oculta en 6 intentos. Con una interfaz limpia y responsive. Ideal para amantes de los puzzles y la competencia amistosa."
          img="word-game"
          webName="word-game-multi"
          codeName="JavierAQR/gestor-finanzas"
          tags={["React", "TypeScript", "Material UI"]}
        />
      </ProjectsContainer>

      <ProjectsContainer name="Proyectos Colaborativos">
        <Card
          title="veterinaria luas pets"
          description="Aplicativo para la gestión de una veterinaria local que cuenta con roles User y Admin. Los usuarios pueden acceder a reserva de citas, petshop y carrito de compras con sistema de pagos usando la API de Paypal. Los admins tienen acceso al inventario, gestion de usuarios y registro de ventas."
          img="LuasPets"
          codeName="JavierAQR/LuasPets"
          tags={[
            "Java",
            "TypeScript",
            "Angular",
            "MySQL",
            "Postman",
            "SpringBoot",
          ]}
        />

        <Card
          title="Tienda de ropa zephyra"
          description="E-commerce completo para venta de ropa moderna, con roles de Admin (gestión de inventario, tallas, ventas y usuarios) y User (catálogo interactivo, carrito de compras y autenticación segura), optimizado para una experiencia de compra fluida y escalable."
          img="Zephyra"
          codeName="CodeJA2/Zephyra"
          tags={["Java", "MySQL", "SpringBoot"]}
        />
      </ProjectsContainer>
    </>
  );
};

export default Projects;
