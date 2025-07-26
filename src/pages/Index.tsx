import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-semibold text-xl">VR Agency</div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Услуги</a>
              <a href="#cases" className="text-muted-foreground hover:text-foreground transition-colors">Кейсы</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
            </div>
            <Button size="sm">Консультация</Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Реклама нового<br />измерения
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Создаём иммерсивные маркетинговые кампании в виртуальной реальности 
            для технологических брендов и индустрии развлечений
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              Смотреть demo
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Наши проекты
            </Button>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-5xl mx-auto">
          <img 
            src="/img/d5e5d3c7-5ec9-4ef8-8188-841692af061f.jpg" 
            alt="VR Technology" 
            className="w-full rounded-2xl"
          />
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-muted-foreground">Реализованных проектов</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">340%</div>
              <div className="text-muted-foreground">Средний рост конверсии</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-muted-foreground">Международных наград</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр VR-решений для вашего бизнеса
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardHeader className="p-0 mb-6">
                <Icon name="Globe" size={48} className="mb-4" />
                <CardTitle className="text-2xl">360° Реклама</CardTitle>
                <CardDescription className="text-lg">
                  Создаём полностью иммерсивные рекламные кампании, где клиенты 
                  взаимодействуют с брендом в виртуальном пространстве
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="p-8">
              <CardHeader className="p-0 mb-6">
                <Icon name="Monitor" size={48} className="mb-4" />
                <CardTitle className="text-2xl">Виртуальные презентации</CardTitle>
                <CardDescription className="text-lg">
                  Интерактивные демонстрации продуктов в VR, позволяющие 
                  клиентам изучить товар до покупки
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="p-8">
              <CardHeader className="p-0 mb-6">
                <Icon name="Sparkles" size={48} className="mb-4" />
                <CardTitle className="text-2xl">Иммерсивные бренд-опыты</CardTitle>
                <CardDescription className="text-lg">
                  Уникальные виртуальные впечатления, создающие эмоциональную 
                  связь с вашим брендом
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="p-8">
              <CardHeader className="p-0 mb-6">
                <Icon name="Users" size={48} className="mb-4" />
                <CardTitle className="text-2xl">VR для мероприятий</CardTitle>
                <CardDescription className="text-lg">
                  Виртуальные конференции, презентации и корпоративные 
                  события нового поколения
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section id="cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Кейсы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Истории успеха наших клиентов
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <img 
                src="/img/a08bbe1a-5cb1-4ade-911b-ab7c9e6fe452.jpg" 
                alt="VR Meeting" 
                className="w-full rounded-xl mb-6"
              />
              <h3 className="text-2xl font-semibold mb-4">Виртуальные конференции TechCorp</h3>
              <p className="text-muted-foreground mb-4">
                Создали иммерсивную платформу для проведения корпоративных мероприятий. 
                Участие в событиях выросло на 400%.
              </p>
              <blockquote className="border-l-4 border-primary pl-4 italic">
                "VR Agency полностью изменили наш подход к корпоративным мероприятиям. 
                Теперь наши конференции посещают в 5 раз больше участников."
              </blockquote>
              <div className="mt-4 text-sm text-muted-foreground">
                — Алексей Морозов, CEO TechCorp
              </div>
            </div>

            <div>
              <img 
                src="/img/1a1f5349-290e-4602-b3d6-6dfc699416ca.jpg" 
                alt="VR Showroom" 
                className="w-full rounded-xl mb-6"
              />
              <h3 className="text-2xl font-semibold mb-4">360° шоурум LuxuryBrand</h3>
              <p className="text-muted-foreground mb-4">
                Разработали виртуальный шоурум для премиальных товаров. 
                Конверсия увеличилась на 250%.
              </p>
              <blockquote className="border-l-4 border-primary pl-4 italic">
                "Наши клиенты теперь могут детально изучить продукцию, не выходя 
                из дома. Это революция в luxury-ритейле."
              </blockquote>
              <div className="mt-4 text-sm text-muted-foreground">
                — Мария Волкова, Marketing Director LuxuryBrand
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Бесплатная консультация
            </h2>
            <p className="text-xl text-muted-foreground">
              Обсудим ваш проект и создадим уникальное VR-решение
            </p>
          </div>
          
          <Card className="p-8">
            <CardContent className="p-0 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Имя</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Компания</label>
                <Input placeholder="Название компании" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Сообщение</label>
                <Textarea 
                  placeholder="Расскажите о вашем проекте..."
                  rows={4}
                />
              </div>
              
              <Button className="w-full" size="lg">
                Записаться на консультацию
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                Ответим в течение 24 часов
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>360° Реклама</div>
                <div>VR Презентации</div>
                <div>Иммерсивные опыты</div>
                <div>VR Мероприятия</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>О нас</div>
                <div>Кейсы</div>
                <div>Карьера</div>
                <div>Блог</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>+7 (495) 123-45-67</div>
                <div>hello@vragency.ru</div>
                <div>Москва, Тверская 1</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Icon name="Twitter" size={20} />
                <Icon name="Linkedin" size={20} />
                <Icon name="Instagram" size={20} />
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 VR Agency. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;