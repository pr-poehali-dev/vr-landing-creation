import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const services = [
    {
      icon: "Globe",
      title: "360° Реклама",
      description: "Создаём полностью иммерсивные рекламные кампании, где клиенты взаимодействуют с брендом в виртуальном пространстве"
    },
    {
      icon: "Monitor",
      title: "Виртуальные Презентации",
      description: "Интерактивные демонстрации продуктов в VR, позволяющие клиентам изучить товар до покупки"
    },
    {
      icon: "Sparkles",
      title: "Иммерсивные Бренд-Опыты", 
      description: "Уникальные виртуальные впечатления, создающие эмоциональную связь с вашим брендом"
    },
    {
      icon: "Users",
      title: "VR для Мероприятий",
      description: "Виртуальные конференции, презентации и корпоративные события нового поколения"
    }
  ];

  const testimonials = [
    {
      name: "Алексей Морозов",
      company: "TechCorp",
      text: "VR Agency полностью изменили наш подход к маркетингу. Конверсия выросла на 340%",
      rating: 5
    },
    {
      name: "Мария Волкова", 
      company: "LuxuryBrand",
      text: "Виртуальный шоурум превзошёл все ожидания. Клиенты в восторге от нового опыта",
      rating: 5
    },
    {
      name: "Дмитрий Петров",
      company: "EventPro",
      text: "Благодаря VR-мероприятиям мы охватили в 5 раз больше участников",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground dark">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-heading font-bold glow-text text-primary">
            VR AGENCY
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#cases" className="hover:text-primary transition-colors">Кейсы</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/80 text-primary-foreground font-medium">
            Консультация
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
        <div className="absolute inset-0 bg-vr-gradient opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6 glow-text">
              Реклама<br />
              <span className="bg-gradient-to-r from-neon-cyan to-neon-pink bg-clip-text text-transparent">
                Нового Измерения
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
              Создаём иммерсивные маркетинговые кампании в виртуальной реальности 
              для технологических брендов и индустрии развлечений
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-4 text-lg animate-glow">
                <Icon name="Play" className="mr-2" />
                Смотреть Demo
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg">
                Наши Проекты
              </Button>
            </div>
          </div>
          
          <div className="mt-16 animate-float">
            <img 
              src="/img/d5e5d3c7-5ec9-4ef8-8188-841692af061f.jpg" 
              alt="VR Technology" 
              className="mx-auto w-full max-w-2xl rounded-2xl neon-border"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 glow-text">
              Инновации. Креатив. <span className="text-primary">VR-Стратегии</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Мы — пионеры виртуальной рекламы. Создаём опыт, который невозможно забыть, 
              и помогаем брендам выделиться в мире бесконечного контента.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardHeader>
                <Icon name="Zap" size={48} className="text-primary mb-4" />
                <CardTitle className="text-xl">15+ Проектов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Успешно реализованных VR-кампаний для ведущих брендов</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardHeader>
                <Icon name="TrendingUp" size={48} className="text-secondary mb-4" />
                <CardTitle className="text-xl">340% ROI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Средний рост конверсии клиентов после внедрения VR-решений</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardHeader>
                <Icon name="Award" size={48} className="text-accent mb-4" />
                <CardTitle className="text-xl">5 Наград</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Международных премий за инновации в области VR-маркетинга</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 glow-text">
              Наши <span className="text-primary">Услуги</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр VR-решений для вашего бизнеса
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20 group">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon name={service.icon as any} size={32} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cases/Testimonials Section */}
      <section id="cases" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 glow-text">
              Клиенты о <span className="text-primary">Нас</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Истории успеха наших партнёров
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-primary fill-primary" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-primary">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <img 
                src="/img/a08bbe1a-5cb1-4ade-911b-ab7c9e6fe452.jpg" 
                alt="VR Meeting" 
                className="w-full rounded-xl neon-border"
              />
              <h3 className="text-xl font-semibold">Виртуальные Конференции</h3>
              <p className="text-muted-foreground">Проводите корпоративные мероприятия в иммерсивном пространстве</p>
            </div>
            <div className="space-y-4">
              <img 
                src="/img/1a1f5349-290e-4602-b3d6-6dfc699416ca.jpg" 
                alt="VR Showroom" 
                className="w-full rounded-xl neon-border"
              />
              <h3 className="text-xl font-semibold">360° Шоурумы</h3>
              <p className="text-muted-foreground">Позвольте клиентам исследовать ваши продукты в виртуальной реальности</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 glow-text">
                Записаться на <span className="text-primary">Консультацию</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Обсудим ваш проект и создадим уникальное VR-решение
              </p>
            </div>
            
            <Card className="bg-card border-border neon-border">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Бесплатная Консультация</CardTitle>
                <CardDescription className="text-center">
                  Заполните форму, и мы свяжемся с вами в течение 24 часов
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Имя</label>
                    <Input 
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-input border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input 
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-input border-border focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Компания</label>
                  <Input 
                    placeholder="Название компании"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="bg-input border-border focus:border-primary"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем проекте..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-input border-border focus:border-primary"
                  />
                </div>
                
                <Button 
                  className="w-full bg-primary hover:bg-primary/80 text-primary-foreground py-3 text-lg animate-glow"
                  size="lg"
                >
                  <Icon name="Send" className="mr-2" />
                  Записаться на Консультацию
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  Или свяжитесь с нами: <span className="text-primary">+7 (495) 123-45-67</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-heading font-bold glow-text text-primary mb-4">
                VR AGENCY
              </div>
              <p className="text-muted-foreground">
                Реклама нового измерения для брендов будущего
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>360° Реклама</p>
                <p>VR Презентации</p>
                <p>Иммерсивные Опыты</p>
                <p>VR Мероприятия</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>О нас</p>
                <p>Кейсы</p>
                <p>Карьера</p>
                <p>Блог</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>+7 (495) 123-45-67</p>
                <p>hello@vragency.ru</p>
                <p>Москва, Тверская 1</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 VR Agency. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;