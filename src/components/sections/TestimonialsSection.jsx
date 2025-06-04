import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'María Rodríguez',
      role: 'Emprendedora',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      quote: 'Gracias a Préstamos 4K pude expandir mi negocio. El proceso fue rápido y transparente.',
      rating: 5
    },
    {
      name: 'Juan Pérez',
      role: 'Profesional',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      quote: 'La mejor experiencia en préstamos que he tenido. Tasas justas y atención personalizada.',
      rating: 5
    },
    {
      name: 'Ana Martínez',
      role: 'Estudiante',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      quote: 'Me ayudaron a financiar mis estudios. El trato fue excelente y las condiciones muy favorables.',
      rating: 5
    }
  ];

  const stats = [
    { number: '10K+', label: 'Clientes Satisfechos' },
    { number: 'RD$500M+', label: 'Préstamos Otorgados' },
    { number: '98%', label: 'Tasa de Aprobación' },
    { number: '24/7', label: 'Soporte al Cliente' }
  ];

  return (
    <section id="testimonios" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Lo que dicen nuestros <span className="text-primary">Clientes</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Miles de dominicanos han confiado en nosotros para sus necesidades financieras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card rounded-2xl p-8 hover-glow transition-all duration-300 backdrop-blur-[10px]">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-primary/20"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{testimonial.quote}</p>
              <div className="flex text-yellow-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center glass-card rounded-2xl p-6 hover-glow backdrop-blur-[10px]">
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 