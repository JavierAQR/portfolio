import { useState } from "react";
import { IoClose } from "react-icons/io5";
import SectionTitle from "./SectionTitle";

interface Certificate {
  img: string;
  label: string;
}

interface ExperienceItemProps {
  role: string;
  company: string;
  location: string;
  period: string;
  stack: string;
  points: string[];
  featured?: boolean;
  certificates?: Certificate[];
  onOpenCertificate: (cert: Certificate) => void;
}

const ExperienceItem = ({
  role,
  company,
  location,
  period,
  stack,
  points,
  featured,
  certificates,
  onOpenCertificate,
}: ExperienceItemProps) => {
  return (
    <article
      data-aos="fade-up"
      className={`flex flex-col gap-3 rounded-2xl ${
        featured
          ? "bg-[#3b82c425] border border-cyan-500/30 p-6"
          : "bg-[#3b82c415] p-4"
      }`}
    >
      <div className="flex flex-wrap justify-between items-baseline gap-2">
        <div>
          <h3
            className={
              featured
                ? "text-xl font-bold text-white"
                : "text-base font-semibold text-[#e4e4e4]"
            }
          >
            {role}
          </h3>
          <p className={featured ? "text-cyan-400" : "text-sm text-[#a8a8a8]"}>
            {company}
          </p>
        </div>
        <div className="text-right text-xs text-[#a8a8a8]">
          <p className="text-xs text-[#a8a8a8]">{period}</p>
          <p className="text-xs text-[#a8a8a8]">{location}</p>
        </div>
      </div>
      <p className="text-xs text-[#a8a8a8]">{stack}</p>
      <ul
        className={`flex flex-col gap-1 pl-4 list-disc text-[#e4e4e4] ${
          featured ? "text-sm" : "text-xs"
        }`}
      >
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      {certificates && certificates.length > 0 && (
        <div className="flex gap-3 flex-wrap pt-2">
          {certificates.map((cert) => (
            <button
              key={cert.img}
              type="button"
              title={cert.label}
              onClick={() => onOpenCertificate(cert)}
              className="group w-20 h-14 rounded-lg overflow-hidden border border-cyan-500/20 cursor-pointer"
            >
              <img
                src={`img/certificates/${cert.img}.jpg`}
                alt={cert.label}
                className="w-full h-full object-cover group-hover:scale-110 duration-200"
              />
            </button>
          ))}
        </div>
      )}
    </article>
  );
};

const Experience = () => {
  const [openCert, setOpenCert] = useState<Certificate | null>(null);

  return (
    <section className="w-full flex flex-col gap-6" id="experience">
      <SectionTitle title="Experiencia" />

      <ExperienceItem
        featured
        role="Analista Programador Jr."
        company="Refinansa Perú SAC"
        location="Surquillo, Lima"
        period="Marzo 2026 – Actualidad"
        stack="Laravel · Vue · PostgreSQL"
        points={[
          "Desarrollo backend y frontend de sistemas web internos para la gestión de expedientes y procesos de la empresa.",
          "Responsable del despliegue y configuración de los sistemas en la infraestructura propia de la empresa.",
          "Apoyo mi flujo de desarrollo con herramientas de IA (Claude) para entregar soluciones más rápido y con mejor calidad.",
        ]}
        onOpenCertificate={setOpenCert}
      />

      <div className="flex flex-col gap-3">
        <ExperienceItem
          role="Practicante Programador Jr."
          company="A.M Code"
          location="Lima, Perú"
          period="Julio 2025 – Febrero 2026"
          stack="Node.js · React · PostgreSQL"
          points={[
            "Aplicaciones web fullstack para clientes reales, con APIs REST, autenticación y generación de reportes.",
          ]}
          certificates={[
            { img: "am-code-practicas", label: "Certificado de prácticas – A.M Code" },
          ]}
          onOpenCertificate={setOpenCert}
        />
        <ExperienceItem
          role="Practicante Programador Jr."
          company="Neonhouseled SAC"
          location="Lima, Perú"
          period="Abril 2025 – Julio 2025"
          stack="Laravel · React · Next.js · MySQL"
          points={[
            "Desarrollo backend y frontend en equipo ágil; reconocido dos veces como Colaborador del Mes.",
          ]}
          certificates={[
            { img: "neonhouseled-practicas", label: "Certificado de prácticas – Neonhouseled" },
            { img: "neonhouseled-cr", label: "Carta de recomendación – Neonhouseled" },
            { img: "neonhouseled-reconocimiento-1", label: "Reconocimiento – Colaborador del Mes" },
            { img: "neonhouseled-reconocimiento-2", label: "Reconocimiento – Colaborador del Mes" },
          ]}
          onOpenCertificate={setOpenCert}
        />
      </div>

      {openCert && (
        <div
          className="fixed inset-0 z-30 flex items-center justify-center bg-black/80 p-6"
          onClick={() => setOpenCert(null)}
        >
          <button
            type="button"
            className="absolute top-6 right-6 text-white text-3xl cursor-pointer"
            onClick={() => setOpenCert(null)}
          >
            <IoClose />
          </button>
          <figure
            className="flex flex-col items-center gap-3 max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`img/certificates/${openCert.img}.jpg`}
              alt={openCert.label}
              className="max-h-[80vh] rounded-xl shadow-2xl"
            />
            <figcaption className="text-sm text-[#e4e4e4]">
              {openCert.label}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
};

export default Experience;