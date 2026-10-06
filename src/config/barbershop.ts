/**
 * Configuração central da Arllon Fernandes Barbearia
 * Edite textos, links, imagens e endereços neste arquivo de forma rápida e segura.
 */

export interface BarbershopConfig {
  name: string;
  shortName: string;
  taglines: {
    primary: string;
    secondary: string;
  };
  logo: {
    src: string;
    alt: string;
  };
  links: {
    booking: {
      id: string;
      title: string;
      description: string;
      url: string;
      badgeText: string;
      isHighlighted: boolean;
    };
    whatsapp: {
      id: string;
      title: string;
      description: string;
      url: string;
      phoneNumberFormatted: string;
    };
    instagram: {
      id: string;
      title: string;
      description: string;
      url: string;
      handle: string;
    };
  };
  location: {
    title: string;
    address: string;
    street: string;
    neighborhood: string;
    cityState: string;
    cep: string;
    embedMapUrl: string;
    directionsUrl: string;
  };
  hours: {
    title: string;
    schedule: string;
  };
}

export const BARBERSHOP_CONFIG: BarbershopConfig = {
  name: 'Arllon Fernandes Barbearia',
  shortName: 'Arllon Fernandes',
  taglines: {
    primary: 'Tradição, cuidado e estilo em cada detalhe.',
    secondary: 'Sua imagem, nosso compromisso',
  },
  logo: {
    src: 'https://i.postimg.cc/9f9gyfcT/Emblema-Azul-com-Navalha-Branca.png',
    alt: 'Logomarca Arllon Fernandes Barbearia - Emblema Azul com Navalha Branca',
  },
  links: {
    booking: {
      id: 'booking',
      title: 'Agendar horário',
      description: 'Escolha serviço, profissional e horário no AppBarber',
      url: 'https://sites.appbarber.com.br/arllonfernandesbarbeariao',
      badgeText: 'Agendamento Online',
      isHighlighted: true,
    },
    whatsapp: {
      id: 'whatsapp',
      title: 'Chamar no WhatsApp',
      description: 'Atendimento direto, dúvidas e informações rápidas',
      url: 'https://wa.link/b6b88i',
      phoneNumberFormatted: 'WhatsApp Oficial',
    },
    instagram: {
      id: 'instagram',
      title: 'Siga no Instagram',
      description: '@arllonfernandesbarbearia • Cortes, dia a dia e novidades',
      url: 'https://www.instagram.com/arllonfernandesbarbearia',
      handle: '@arllonfernandesbarbearia',
    },
  },
  location: {
    title: 'Onde estamos',
    address: 'Rua Campos da Paz, 46, Rio Comprido, Rio de Janeiro - RJ, CEP 20250-460',
    street: 'Rua Campos da Paz, 46',
    neighborhood: 'Rio Comprido',
    cityState: 'Rio de Janeiro - RJ',
    cep: '20250-460',
    embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.1304206048576!2d-43.21108202491203!3d-22.923522838468937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997fae0af6ef95%3A0xc11ed1b624f3de12!2sR.%20Campos%20da%20Paz%2C%2046%20-%20Rio%20Comprido%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020250-460!5e1!3m2!1spt-BR!2sbr!4v1791291494187!5m2!1spt-BR!2sbr',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Rua+Campos+da+Paz,+46,+Rio+Comprido,+Rio+de+Janeiro+-+RJ,+20250-460',
  },
  hours: {
    title: 'Horário de Atendimento',
    schedule: 'Terça a Sábado das 09h às 20h',
  },
};
