import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

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
  },
  {
    name: 'Нигер',
    color: 'bg-orange-600',
    description: 'Африканский партнёр с растущей экономикой и богатыми природными ресурсами. Обеспечивает стратегическое присутствие альянса в Западной Африке.'
  }
];

export default function Index() {
  const [open, setOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [powerOpen, setPowerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#F0FFFE] to-[#E0F7FA]">
      <div className="fixed top-6 right-6 z-50 flex gap-3">
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

        <Sheet open={historyOpen} onOpenChange={setHistoryOpen}>
          <SheetTrigger asChild>
            <Button 
              variant="default" 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-primary-foreground font-montserrat font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              ИСТОРИЯ
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px] bg-white/95 backdrop-blur-sm">
            <SheetHeader>
              <SheetTitle className="font-montserrat text-2xl font-bold text-foreground">
                История Альянса
              </SheetTitle>
            </SheetHeader>
            <ScrollArea className="h-[calc(100vh-120px)] mt-6 pr-4">
              <Tabs defaultValue="current" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="current">Текущие члены</TabsTrigger>
                  <TabsTrigger value="former">Бывшие члены</TabsTrigger>
                </TabsList>
                
                <TabsContent value="current" className="space-y-3">
                  <Card className="bg-primary/10 p-4 border-primary/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon name="Calendar" size={20} className="text-primary" />
                      <p className="font-montserrat font-bold text-lg text-foreground">Основание: 2105</p>
                    </div>
                  </Card>
                  
                  {[
                    { name: 'Россия', year: 2105, color: 'bg-country-russia' },
                    { name: 'Беларусь', year: 2105, color: 'bg-country-belarus' },
                    { name: 'Казахстан', year: 2130, color: 'bg-country-kazakhstan' },
                    { name: 'Узбекистан', year: 2140, color: 'bg-country-uzbekistan' },
                    { name: 'Украина', year: 2140, color: 'bg-country-ukraine' },
                    { name: 'Таджикистан', year: 2141, color: 'bg-country-tajikistan' },
                    { name: 'Кыргызстан', year: 2142, color: 'bg-country-kyrgyzstan' },
                    { name: 'Туркменистан', year: 2144, color: 'bg-country-turkmenistan' },
                    { name: 'Афганистан', year: 2145, color: 'bg-country-afghanistan' },
                    { name: 'Сирия', year: 2146, color: 'bg-country-syria' },
                    { name: 'Куба', year: 2146, color: 'bg-country-cuba' },
                    { name: 'Венесуэла', year: 2147, color: 'bg-country-venezuela' },
                    { name: 'Нигер', year: 2160, color: 'bg-orange-600' }
                  ].map((entry, index) => (
                    <Card 
                      key={index}
                      className="bg-white border-primary/10 p-4 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${entry.color}`} />
                          <h3 className="font-montserrat font-semibold text-foreground">
                            {entry.name}
                          </h3>
                        </div>
                        <div className="text-primary font-montserrat font-bold">{entry.year}</div>
                      </div>
                    </Card>
                  ))}
                </TabsContent>
                
                <TabsContent value="former" className="space-y-3">
                  {[
                    { name: 'Авторитарная Эстония', period: '2154-2156', color: 'bg-blue-700' }
                  ].map((entry, index) => (
                    <Card 
                      key={index}
                      className="bg-white border-muted p-4 hover:shadow-lg transition-all duration-300 opacity-80"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${entry.color}`} />
                          <h3 className="font-montserrat font-semibold text-muted-foreground">
                            {entry.name}
                          </h3>
                        </div>
                        <div className="text-muted-foreground font-montserrat font-medium text-sm">{entry.period}</div>
                      </div>
                    </Card>
                  ))}
                </TabsContent>
              </Tabs>
            </ScrollArea>
          </SheetContent>
        </Sheet>

        <Sheet open={powerOpen} onOpenChange={setPowerOpen}>
          <SheetTrigger asChild>
            <Button 
              variant="default" 
              size="lg"
              className="bg-destructive hover:bg-destructive/90 text-white font-montserrat font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              МОЩЬ
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px] bg-white/95 backdrop-blur-sm">
            <SheetHeader>
              <SheetTitle className="font-montserrat text-2xl font-bold text-foreground">
                Сила Стран Альянса
              </SheetTitle>
              <p className="text-muted-foreground text-sm">Данные от 2159 года</p>
            </SheetHeader>
            <ScrollArea className="h-[calc(100vh-120px)] mt-6 pr-4">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-5 mb-6">
                  <TabsTrigger value="all" className="text-xs">Все</TabsTrigger>
                  <TabsTrigger value="europe" className="text-xs">Европа</TabsTrigger>
                  <TabsTrigger value="asia" className="text-xs">Азия</TabsTrigger>
                  <TabsTrigger value="america" className="text-xs">Америка</TabsTrigger>
                  <TabsTrigger value="africa" className="text-xs">Африка</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-3">
                  {[
                    { name: 'Россия', force: '1.35 млн', color: 'bg-country-russia', percent: 100, region: 'europe' },
                    { name: 'Украина', force: '720 тыс', color: 'bg-country-ukraine', percent: 53, region: 'europe' },
                    { name: 'Казахстан', force: '650 тыс', color: 'bg-country-kazakhstan', percent: 48, region: 'asia' },
                    { name: 'Венесуэла', force: '~400 тыс', color: 'bg-country-venezuela', percent: 30, region: 'america' },
                    { name: 'Узбекистан', force: '325 тыс', color: 'bg-country-uzbekistan', percent: 24, region: 'asia' },
                    { name: 'Нигер', force: '~212 тыс', color: 'bg-orange-600', percent: 16, region: 'africa' },
                    { name: 'Куба', force: '~210 тыс', color: 'bg-country-cuba', percent: 16, region: 'america' },
                    { name: 'Беларусь', force: '201 тыс', color: 'bg-country-belarus', percent: 15, region: 'europe' },
                    { name: 'Таджикистан', force: '140 тыс', color: 'bg-country-tajikistan', percent: 10, region: 'asia' },
                    { name: 'Афганистан', force: '137 тыс', color: 'bg-country-afghanistan', percent: 10, region: 'asia' },
                    { name: 'Кыргызстан', force: '100 тыс', color: 'bg-country-kyrgyzstan', percent: 7, region: 'asia' },
                    { name: 'Сирия', force: '85 тыс', color: 'bg-country-syria', percent: 6, region: 'asia' },
                    { name: 'Туркменистан', force: '28 тыс', color: 'bg-country-turkmenistan', percent: 2, region: 'asia' }
                  ].map((entry, index) => (
                    <Card 
                      key={index}
                      className="bg-white border-primary/10 p-4 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${entry.color}`} />
                            <h3 className="font-montserrat font-semibold text-foreground">
                              {entry.name}
                            </h3>
                          </div>
                          <div className="font-montserrat font-bold text-primary">{entry.force}</div>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <div 
                            className={`h-full ${entry.color} transition-all duration-500`}
                            style={{ width: `${entry.percent}%` }}
                          />
                        </div>
                      </div>
                    </Card>
                  ))}
                  <Card className="bg-primary/10 p-4 border-primary/20 mt-6">
                    <div className="flex items-center gap-2">
                      <Icon name="Info" size={20} className="text-primary" />
                      <p className="text-sm text-muted-foreground">
                        Общая численность активного военного состава альянса составляет более 4.5 млн человек
                      </p>
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="europe" className="space-y-3">
                  {[
                    { name: 'Россия', force: '1.35 млн', color: 'bg-country-russia', percent: 100 },
                    { name: 'Украина', force: '720 тыс', color: 'bg-country-ukraine', percent: 53 },
                    { name: 'Беларусь', force: '201 тыс', color: 'bg-country-belarus', percent: 15 }
                  ].map((entry, index) => (
                    <Card 
                      key={index}
                      className="bg-white border-primary/10 p-4 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${entry.color}`} />
                            <h3 className="font-montserrat font-semibold text-foreground">
                              {entry.name}
                            </h3>
                          </div>
                          <div className="font-montserrat font-bold text-primary">{entry.force}</div>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <div 
                            className={`h-full ${entry.color} transition-all duration-500`}
                            style={{ width: `${entry.percent}%` }}
                          />
                        </div>
                      </div>
                    </Card>
                  ))}
                  <Card className="bg-primary/10 p-4 border-primary/20 mt-6">
                    <div className="flex items-center gap-2">
                      <Icon name="Info" size={20} className="text-primary" />
                      <p className="text-sm text-muted-foreground">
                        Европа: ~2.27 млн военнослужащих
                      </p>
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="asia" className="space-y-3">
                  {[
                    { name: 'Казахстан', force: '650 тыс', color: 'bg-country-kazakhstan', percent: 100 },
                    { name: 'Узбекистан', force: '325 тыс', color: 'bg-country-uzbekistan', percent: 50 },
                    { name: 'Таджикистан', force: '140 тыс', color: 'bg-country-tajikistan', percent: 22 },
                    { name: 'Афганистан', force: '137 тыс', color: 'bg-country-afghanistan', percent: 21 },
                    { name: 'Кыргызстан', force: '100 тыс', color: 'bg-country-kyrgyzstan', percent: 15 },
                    { name: 'Сирия', force: '85 тыс', color: 'bg-country-syria', percent: 13 },
                    { name: 'Туркменистан', force: '28 тыс', color: 'bg-country-turkmenistan', percent: 4 }
                  ].map((entry, index) => (
                    <Card 
                      key={index}
                      className="bg-white border-primary/10 p-4 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${entry.color}`} />
                            <h3 className="font-montserrat font-semibold text-foreground">
                              {entry.name}
                            </h3>
                          </div>
                          <div className="font-montserrat font-bold text-primary">{entry.force}</div>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <div 
                            className={`h-full ${entry.color} transition-all duration-500`}
                            style={{ width: `${entry.percent}%` }}
                          />
                        </div>
                      </div>
                    </Card>
                  ))}
                  <Card className="bg-primary/10 p-4 border-primary/20 mt-6">
                    <div className="flex items-center gap-2">
                      <Icon name="Info" size={20} className="text-primary" />
                      <p className="text-sm text-muted-foreground">
                        Азия: ~1.47 млн военнослужащих
                      </p>
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="america" className="space-y-3">
                  {[
                    { name: 'Венесуэла', force: '~400 тыс', color: 'bg-country-venezuela', percent: 100 },
                    { name: 'Куба', force: '~210 тыс', color: 'bg-country-cuba', percent: 53 }
                  ].map((entry, index) => (
                    <Card 
                      key={index}
                      className="bg-white border-primary/10 p-4 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${entry.color}`} />
                            <h3 className="font-montserrat font-semibold text-foreground">
                              {entry.name}
                            </h3>
                          </div>
                          <div className="font-montserrat font-bold text-primary">{entry.force}</div>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <div 
                            className={`h-full ${entry.color} transition-all duration-500`}
                            style={{ width: `${entry.percent}%` }}
                          />
                        </div>
                      </div>
                    </Card>
                  ))}
                  <Card className="bg-primary/10 p-4 border-primary/20 mt-6">
                    <div className="flex items-center gap-2">
                      <Icon name="Info" size={20} className="text-primary" />
                      <p className="text-sm text-muted-foreground">
                        Америка: ~610 тыс военнослужащих
                      </p>
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="africa" className="space-y-3">
                  {[
                    { name: 'Нигер', force: '~212 тыс', color: 'bg-orange-600', percent: 100 }
                  ].map((entry, index) => (
                    <Card 
                      key={index}
                      className="bg-white border-primary/10 p-4 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${entry.color}`} />
                            <h3 className="font-montserrat font-semibold text-foreground">
                              {entry.name}
                            </h3>
                          </div>
                          <div className="font-montserrat font-bold text-primary">{entry.force}</div>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <div 
                            className={`h-full ${entry.color} transition-all duration-500`}
                            style={{ width: `${entry.percent}%` }}
                          />
                        </div>
                      </div>
                    </Card>
                  ))}
                  <Card className="bg-primary/10 p-4 border-primary/20 mt-6">
                    <div className="flex items-center gap-2">
                      <Icon name="Info" size={20} className="text-primary" />
                      <p className="text-sm text-muted-foreground">
                        Африка: ~212 тыс военнослужащих
                      </p>
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>
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
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-4 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            Российский Союз
          </h2>
          <p className="text-primary font-montserrat font-semibold text-xl md:text-2xl mb-2 tracking-wide">
            ПРИВИЛЕГИИ ВСЕХ СТРАН ОБЪЕДИНЯЮТСЯ
          </p>
          <p className="text-muted-foreground text-lg md:text-xl font-medium">
            Информационный портал • 2160 год
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in">
          <Card className="bg-white/90 backdrop-blur-sm border-primary/20 p-6 text-center hover:shadow-xl transition-all duration-300">
            <Icon name="Users" size={40} className="text-primary mx-auto mb-3" />
            <div className="font-montserrat font-bold text-3xl text-foreground mb-1">390+ млн</div>
            <p className="text-muted-foreground font-medium">Население союза</p>
          </Card>
          <Card className="bg-white/90 backdrop-blur-sm border-primary/20 p-6 text-center hover:shadow-xl transition-all duration-300">
            <Icon name="TrendingUp" size={40} className="text-primary mx-auto mb-3" />
            <div className="font-montserrat font-bold text-3xl text-foreground mb-1">$8.7+ трлн</div>
            <p className="text-muted-foreground font-medium">Совокупный ВВП</p>
          </Card>
          <Card className="bg-white/90 backdrop-blur-sm border-primary/20 p-6 text-center hover:shadow-xl transition-all duration-300">
            <Icon name="Shield" size={40} className="text-primary mx-auto mb-3" />
            <div className="font-montserrat font-bold text-3xl text-foreground mb-1">Единство</div>
            <p className="text-muted-foreground font-medium">Коллективная защита</p>
          </Card>
        </div>

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
              Альянс Российский Союз — единое государственное образование, объединяющее четырнадцать территорий в могущественную федерацию. Мы — не просто альянс, мы — одна страна с общей судьбой и едиными целями.
            </p>
            <p className="text-lg">
              С населением более <span className="font-bold text-foreground">390 миллионов человек</span> и совокупным ВВП свыше <span className="font-bold text-foreground">$8.7 триллиона</span>, Российский Союз является одной из ведущих мировых держав. Наша сила — в единстве регионов, охватывающих территории от Восточной Европы до Центральной Азии, Африки и Латинской Америки.
            </p>
            <p className="text-lg">
              Союз построен на принципах коллективной безопасности: угроза одной территории — это угроза всему Союзу. Мы готовы противостоять любым внешним вызовам, защищая суверенитет и благополучие каждого гражданина. Вместе мы строим безопасный и процветающий мир.
            </p>
            <p className="text-lg">
              Единое экономическое пространство, общая оборонная система, интегрированная инфраструктура и свободное движение граждан — вот фундамент нашего общего будущего.
            </p>
          </div>
        </Card>

        <div className="mt-8 text-center animate-fade-in">
          <Link to="/european-pact">
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/90 hover:bg-white border-primary/20 font-montserrat font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Icon name="Shield" size={24} className="mr-2" />
              Европейский Союзный Пакт
            </Button>
          </Link>
        </div>
      </div>

      <div className="bg-gradient-to-b from-background to-primary/5 py-16 mt-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Icon name="Map" size={40} className="text-primary" />
            </div>
            <h2 className="font-montserrat font-bold text-4xl text-foreground mb-2">
              Глобальное Присутствие
            </h2>
            <p className="text-muted-foreground text-lg">
              Распределение военной мощи Российского Союза по регионам
            </p>
          </div>

          <Card className="bg-white/90 backdrop-blur-sm border-primary/20 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-lg border-2 border-blue-200">
                <Icon name="MapPin" size={32} className="text-blue-600 mx-auto mb-3" />
                <div className="font-montserrat font-bold text-2xl text-blue-900 mb-1">Европа</div>
                <p className="text-blue-700 font-semibold text-lg">~2.27 млн</p>
                <p className="text-blue-600 text-sm mt-2">3 страны</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100/50 rounded-lg border-2 border-green-200">
                <Icon name="MapPin" size={32} className="text-green-600 mx-auto mb-3" />
                <div className="font-montserrat font-bold text-2xl text-green-900 mb-1">Азия</div>
                <p className="text-green-700 font-semibold text-lg">~1.47 млн</p>
                <p className="text-green-600 text-sm mt-2">7 стран</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100/50 rounded-lg border-2 border-red-200">
                <Icon name="MapPin" size={32} className="text-red-600 mx-auto mb-3" />
                <div className="font-montserrat font-bold text-2xl text-red-900 mb-1">Америка</div>
                <p className="text-red-700 font-semibold text-lg">~610 тыс</p>
                <p className="text-red-600 text-sm mt-2">2 страны</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-lg border-2 border-orange-200">
                <Icon name="MapPin" size={32} className="text-orange-600 mx-auto mb-3" />
                <div className="font-montserrat font-bold text-2xl text-orange-900 mb-1">Африка</div>
                <p className="text-orange-700 font-semibold text-lg">~212 тыс</p>
                <p className="text-orange-600 text-sm mt-2">1 страна</p>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 border-2 border-primary/20">
              <div className="absolute top-4 right-4 flex gap-2">
                <Icon name="Globe" size={24} className="text-primary animate-pulse" />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/80 rounded-lg border border-blue-200 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="font-montserrat font-semibold text-foreground">Европа</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-blue-700">~2.27 млн</div>
                    <div className="text-xs text-muted-foreground">50.4% от общей мощи</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/80 rounded-lg border border-green-200 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-montserrat font-semibold text-foreground">Азия</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-700">~1.47 млн</div>
                    <div className="text-xs text-muted-foreground">32.7% от общей мощи</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/80 rounded-lg border border-red-200 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="font-montserrat font-semibold text-foreground">Америка</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-red-700">~610 тыс</div>
                    <div className="text-xs text-muted-foreground">13.6% от общей мощи</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/80 rounded-lg border border-orange-200 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="font-montserrat font-semibold text-foreground">Африка</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-orange-700">~212 тыс</div>
                    <div className="text-xs text-muted-foreground">4.7% от общей мощи</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <div className="flex items-center gap-3">
                  <Icon name="Info" size={20} className="text-primary" />
                  <div>
                    <p className="font-montserrat font-bold text-foreground">Общая численность: 4.5+ млн</p>
                    <p className="text-sm text-muted-foreground">Данные актуальны на 2159 год • 13 активных членов альянса</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <footer className="py-8 text-center text-muted-foreground border-t border-primary/10 mt-0">
        <p className="font-montserrat">© 2160 Альянс Российский Союз</p>
      </footer>
    </div>
  );
}