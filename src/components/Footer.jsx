import React, { useState } from 'react';
import logo from '../assets/new-logo.png';

const Footer = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const termsContent = `
    <p className="mb-4">
      Bienvenido a 4K Préstamos. Al acceder y utilizar nuestros servicios, usted acepta cumplir con los siguientes términos y condiciones. Por favor, léalos detenidamente.
    </p>
    <h4 className="text-lg font-semibold mb-2">1. Uso de los Servicios</h4>
    <p className="mb-4">
      Nuestros servicios están diseñados para facilitar la conexión entre usuarios que buscan financiamiento y proveedores de préstamos. No somos una entidad financiera directa, sino una plataforma que le ayuda a encontrar las mejores opciones de préstamo según su perfil y necesidades. Usted es responsable de la exactitud de la información que nos proporciona.
    </p>
    <h4 className="text-lg font-semibold mb-2">2. Elegibilidad</h4>
    <p className="mb-4">
      Para utilizar nuestros servicios, debe ser mayor de edad legal en la República Dominicana y tener la capacidad legal para celebrar contratos. Nos reservamos el derecho de verificar su elegibilidad.
    </p>
    <h4 className="text-lg font-semibold mb-2">3. Privacidad</h4>
    <p className="mb-4">
      Su privacidad es de suma importancia para nosotros. Nuestra Política de Privacidad, que forma parte de estos Términos y Condiciones, describe cómo recopilamos, usamos y protegemos su información personal. Al aceptar estos términos, usted también acepta nuestra Política de Privacidad.
    </p>
    <h4 className="text-lg font-semibold mb-2">4. Modificaciones</h4>
    <p className="mb-4">
      Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Le notificaremos sobre cualquier cambio significativo. El uso continuado de nuestros servicios después de dichas modificaciones constituirá su aceptación de los nuevos términos.
    </p>
    <p>
      Para cualquier pregunta o aclaración sobre estos términos, no dude en contactarnos.
    </p>
  `;

  const privacyContent = `
    <p className="mb-4">
      En 4K Préstamos, la privacidad de nuestros usuarios es una prioridad fundamental. Esta política describe cómo recopilamos, utilizamos y protegemos su información personal.
    </p>
    <h4 className="text-lg font-semibold mb-2">1. Información que Recopilamos</h4>
    <p className="mb-4">
      Recopilamos información que usted nos proporciona directamente, como nombre, información de contacto, detalles financieros y cualquier otra información necesaria para procesar su solicitud de préstamo. También podemos recopilar información automáticamente, como su dirección IP y datos de uso del sitio web, para mejorar nuestros servicios.
    </p>
    <h4 className="text-lg font-semibold mb-2">2. Uso de la Información</h4>
    <p className="mb-4">
      Utilizamos su información para: procesar y gestionar sus solicitudes de préstamo; mejorar nuestros servicios y la experiencia del usuario; comunicarnos con usted sobre su solicitud o servicios relevantes; cumplir con obligaciones legales y regulatorias; y prevenir fraudes y actividades ilegales.
    </p>
    <h4 className="text-lg font-semibold mb-2">3. Compartir Información</h4>
    <p className="mb-4">
      Podemos compartir su información con proveedores de préstamos y socios financieros para facilitar su solicitud. También podemos compartirla con proveedores de servicios de terceros que nos asisten en la operación de nuestro negocio, siempre bajo estrictos acuerdos de confidencialidad. No vendemos ni alquilamos su información personal a terceros para fines de marketing.
    </p>
    <h4 className="text-lg font-semibold mb-2">4. Seguridad de la Información</h4>
    <p className="mb-4">
      Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra accesos no autorizados, divulgación, alteración o destrucción. Sin embargo, ninguna transmisión por internet o almacenamiento electrónico es 100% segura, por lo que no podemos garantizar una seguridad absoluta.
    </p>
    <h4 className="text-lg font-semibold mb-2">5. Sus Derechos</h4>
    <p className="mb-4">
      Usted tiene derecho a acceder, corregir, actualizar o solicitar la eliminación de su información personal. Para ejercer estos derechos, por favor contáctenos.
    </p>
    <p>
      Al utilizar nuestros servicios, usted acepta la recopilación y el uso de su información según lo descrito en esta Política de Privacidad.
    </p>
  `;

  return (
    <footer className="bg-background dark:bg-dark-surface text-text dark:text-dark-text py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <img src={logo} alt="4K Préstamos Logo" className="h-76 w-auto" />
            </div>
            <p className="text-textSubtle dark:text-dark-textSubtle">
              Soluciones financieras rápidas y confiables en República Dominicana.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-text dark:text-dark-text">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-textSubtle dark:text-dark-textSubtle">
                <i className="fas fa-phone mr-3 text-primary dark:text-accent"></i>
                <a href="tel:+17655807206" className="hover:text-primary dark:hover:text-accent transition-colors duration-300">
                  +1 (765) 580-7206
                </a>
              </li>
              <li className="flex items-center text-textSubtle dark:text-dark-textSubtle">
                <i className="fab fa-whatsapp mr-3 text-primary dark:text-accent"></i>
                <a href="https://wa.me/17655807206" className="hover:text-primary dark:hover:text-accent transition-colors duration-300">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center text-textSubtle dark:text-dark-textSubtle">
                <i className="fas fa-envelope mr-3 text-primary dark:text-accent"></i>
                <a href="mailto:info@prestamos4k.com" className="hover:text-primary dark:hover:text-accent transition-colors duration-300">
                  info@prestamos4k.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-text dark:text-dark-text">Legal</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => setShowTerms(!showTerms)} 
                  className="text-textSubtle dark:text-dark-textSubtle hover:text-primary dark:hover:text-accent transition-colors duration-300 text-sm w-full text-left flex justify-between items-center"
                >
                  Términos y Condiciones
                  <i className={`fas ${showTerms ? 'fa-chevron-up' : 'fa-chevron-down'} text-xs ml-2`}></i>
                </button>
                {showTerms && (
                  <div 
                    className="mt-4 text-text dark:text-dark-text bg-white dark:bg-dark-surface p-4 rounded-md shadow-inner"
                    dangerouslySetInnerHTML={{ __html: termsContent }}
                  ></div>
                )}
              </li>
              <li>
                <button 
                  onClick={() => setShowPrivacy(!showPrivacy)} 
                  className="text-textSubtle dark:text-dark-textSubtle hover:text-primary dark:hover:text-accent transition-colors duration-300 text-sm w-full text-left flex justify-between items-center"
                >
                  Política de Privacidad
                  <i className={`fas ${showPrivacy ? 'fa-chevron-up' : 'fa-chevron-down'} text-xs ml-2`}></i>
                </button>
                {showPrivacy && (
                  <div 
                    className="mt-4 text-text dark:text-dark-text bg-white dark:bg-dark-surface p-4 rounded-md shadow-inner"
                    dangerouslySetInnerHTML={{ __html: privacyContent }}
                  ></div>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border dark:border-dark-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-textSubtle dark:text-dark-textSubtle text-sm">
              © 2025 4K Préstamos. Todos los derechos reservados.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="https://www.facebook.com/profile.php?id=61576719756268" target="_blank" rel="noopener noreferrer" aria-label="Facebook PRESTAMOS 4K" className="text-primary hover:text-accent text-2xl transition-colors duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com/prestamos4k" target="_blank" rel="noopener noreferrer" aria-label="Instagram PRESTAMOS 4K" className="text-primary hover:text-accent text-2xl transition-colors duration-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;