import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

interface Country {
  name: string;
  color: string;
  description: string;
}

const countries: Country[] = [
  {
    name: 'Россия',
    color: 'bg-country-russia',
    description: 'Ведущая держава альянса, центр политической и экономической интеграции. Обеспечивает технологическое развитие и координацию стратегических инициатив союза.'
  },
  {
    name: 'Беларусь',
    color: 'bg-country-belarus',
    description: 'Стратегический партнёр с развитой промышленностью и высокотехнологичным производством. Важный логистический хаб для транзита и торговли.'
  },
  {
    name: 'Украина',
    color: 'bg-country-ukraine',
    description: 'Аграрный и индустриальный центр с мощным научным потенциалом. Ключевой участник энергетической безопасности альянса.'
  },
  {
    name: 'Казахстан',
    color: 'bg-country-kazakhstan',
    description: 'Крупнейшая центральноазиатская республика с богатыми природными ресурсами. Мост между Европой и Азией в рамках интеграционных проектов.'
  },
  {
    name: 'Узбекистан',
    color: 'bg-country-uzbekistan',
    description: 'Динамично развивающаяся экономика региона с растущим экспортным потенциалом. Центр культурного наследия и туризма.'
  },
  {
    name: 'Таджикистан',
    color: 'bg-country-tajikistan',
    description: 'Горная республика с развитой гидроэнергетикой. Поставщик чистой энергии и важный партнёр в области безопасности.'
  },
  {
    name: 'Кыргызстан',
    color: 'bg-country-kyrgyzstan',
    description: 'Стратегический горный регион с уникальной природой. Развивает туристический сектор и зелёную экономику.'
  },
  {
    name: 'Туркменистан',
    color: 'bg-country-turkmenistan',
    description: 'Один из крупнейших производителей природного газа. Ключевой энергетический партнёр альянса с богатыми углеводородными запасами.'
  },
  {
    name: 'Афганистан',
    color: 'bg-country-afghanistan',
    description: 'Стабилизирующийся регион с богатым культурным наследием. Развивает инфраструктуру и торговые связи с соседями.'
  },
  {
    name: 'Сирия',
    color: 'bg-country-syria',
    description: 'Восстанавливающееся государство с древней историей. Важный партнёр в ближневосточном регионе и центр культурного диалога.'
  },
  {
    name: 'Венесуэла',
    color: 'bg-country-venezuela',
    description: 'Латиноамериканский партнёр с крупнейшими запасами нефти. Обеспечивает присутствие альянса в Западном полушарии.'
  },
  {
    name: 'Куба',
    color: 'bg-country-cuba',
    description: 'Островное государство с развитой медициной и образованием. Стратегический форпост альянса в Карибском бассейне.'
  }
];

export default function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#F0FFFE] to-[#E0F7FA]">
      <div className="fixed top-6 right-6 z-50">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button 
              variant="default" 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              СОСТАВ
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px] bg-white/95 backdrop-blur-sm">
            <SheetHeader>
              <SheetTitle className="font-montserrat text-2xl font-bold text-foreground">
                Состав Альянса
              </SheetTitle>
            </SheetHeader>
            <ScrollArea className="h-[calc(100vh-120px)] mt-6 pr-4">
              <div className="space-y-3">
                {countries.map((country, index) => (
                  <Card 
                    key={index}
                    className={`${country.color} p-4 border-none shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-white/40" />
                      <h3 className="font-montserrat font-bold text-lg text-white drop-shadow-sm">
                        {country.name}
                      </h3>
                    </div>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <header className="text-center mb-16 pt-8 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon name="Globe" size={48} className="text-primary" />
          </div>
          <h1 className="font-montserrat font-extrabold text-6xl md:text-7xl mb-4 text-foreground tracking-tight">
            Альянс
          </h1>
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            Российский Союз
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl font-medium">
            Информационный портал • 2160 год
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {countries.map((country, index) => (
            <Card 
              key={index}
              className="bg-white/80 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 ${country.color}`} />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-4 h-4 rounded-full ${country.color}`} />
                  <h3 className="font-montserrat font-bold text-xl text-foreground">
                    {country.name}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {country.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-primary/10 p-8 md:p-12 animate-fade-in">
          <div className="flex items-center gap-4 mb-6">
            <Icon name="Handshake" size={40} className="text-primary" />
            <h2 className="font-montserrat font-bold text-3xl text-foreground">
              О Российском Союзе
            </h2>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              Альянс Российский Союз — крупнейшее межгосударственное объединение, основанное на принципах взаимной поддержки, экономической интеграции и культурного сотрудничества.
            </p>
            <p className="text-lg">
              В состав альянса входят двенадцать суверенных государств, объединённых общими стратегическими целями и стремлением к совместному процветанию. Союз охватывает территории от Восточной Европы до Центральной Азии и Латинской Америки.
            </p>
            <p className="text-lg">
              Основные направления сотрудничества включают развитие единого экономического пространства, научно-технический обмен, энергетическую безопасность и совместные инфраструктурные проекты.
            </p>
          </div>
        </Card>
      </div>

      <footer className="py-8 text-center text-muted-foreground border-t border-primary/10 mt-16">
        <p className="font-montserrat">© 2160 Альянс Российский Союз</p>
      </footer>
    </div>
  );
}
