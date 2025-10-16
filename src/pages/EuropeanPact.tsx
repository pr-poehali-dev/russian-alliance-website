import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function EuropeanPact() {
  const [membersOpen, setMembersOpen] = useState(false);
  const [assistantsOpen, setAssistantsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#F0FFFE] to-[#E0F7FA]">
      <div className="fixed top-6 left-6 z-50">
        <Link to="/">
          <Button 
            variant="outline" 
            size="lg"
            className="bg-white/90 hover:bg-white border-primary/20 font-montserrat font-semibold shadow-lg"
          >
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Назад
          </Button>
        </Link>
      </div>

      <div className="fixed top-6 right-6 z-50 flex gap-3">
        <Sheet open={membersOpen} onOpenChange={setMembersOpen}>
          <SheetTrigger asChild>
            <Button 
              variant="default" 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              ЧЛЕНЫ
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px] bg-white/95 backdrop-blur-sm">
            <SheetHeader>
              <SheetTitle className="font-montserrat text-2xl font-bold text-foreground">
                Члены Пакта
              </SheetTitle>
            </SheetHeader>
            <ScrollArea className="h-[calc(100vh-120px)] mt-6 pr-4">
              <div className="space-y-3">
                {[
                  { name: 'Российский Союз', period: '2155-2188', color: 'bg-country-russia' },
                  { name: 'Румынское Королевство', period: '2157-2180', color: 'bg-red-700' },
                  { name: 'Сербия', period: '2163-2179', color: 'bg-blue-800' },
                  { name: 'Болгарское Царство', period: '2160-2170', color: 'bg-green-700' }
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
                      <div className="text-primary font-montserrat font-medium text-sm">{entry.period}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>

        <Sheet open={assistantsOpen} onOpenChange={setAssistantsOpen}>
          <SheetTrigger asChild>
            <Button 
              variant="default" 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-primary-foreground font-montserrat font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              ПОМОЩНИКИ
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px] bg-white/95 backdrop-blur-sm">
            <SheetHeader>
              <SheetTitle className="font-montserrat text-2xl font-bold text-foreground">
                Помощники Пакта
              </SheetTitle>
            </SheetHeader>
            <ScrollArea className="h-[calc(100vh-120px)] mt-6 pr-4">
              <div className="space-y-3">
                {[
                  { name: 'Венгерствия', period: '2162-2171', color: 'bg-red-600' },
                  { name: 'Германия', period: '2161-2168', color: 'bg-yellow-600' },
                  { name: 'Эстония', period: '2156-2160', color: 'bg-blue-600' }
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
                      <div className="text-muted-foreground font-montserrat font-medium text-sm">{entry.period}</div>
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
            <Icon name="Shield" size={48} className="text-primary" />
          </div>
          <h1 className="font-montserrat font-extrabold text-5xl md:text-6xl mb-4 text-foreground tracking-tight">
            Европейский Союзный Пакт
          </h1>
          <div className="flex items-center justify-center gap-4 text-muted-foreground text-lg md:text-xl font-medium mb-4">
            <div className="flex items-center gap-2">
              <Icon name="Calendar" size={20} className="text-primary" />
              <span>2155 - 2188</span>
            </div>
          </div>
          <p className="text-primary font-montserrat font-semibold text-xl">
            Основатель: Российский Союз
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Card className="bg-white/90 backdrop-blur-sm border-primary/20 p-8 text-center hover:shadow-xl transition-all duration-300 animate-fade-in">
            <Icon name="Users" size={40} className="text-primary mx-auto mb-3" />
            <div className="font-montserrat font-bold text-3xl text-foreground mb-2">4 члена</div>
            <p className="text-muted-foreground font-medium">Полноправные участники</p>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-primary/20 p-8 text-center hover:shadow-xl transition-all duration-300 animate-fade-in">
            <Icon name="HandHelping" size={40} className="text-primary mx-auto mb-3" />
            <div className="font-montserrat font-bold text-3xl text-foreground mb-2">3 помощника</div>
            <p className="text-muted-foreground font-medium">Государства-партнёры</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          <Card className="bg-white/80 backdrop-blur-sm border-primary/10 p-8 animate-scale-in">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Users" size={32} className="text-primary" />
              <h2 className="font-montserrat font-bold text-2xl text-foreground">
                Члены Пакта
              </h2>
            </div>
            <div className="space-y-4">
              {[
                { name: 'Российский Союз', period: '2155-2188', color: 'bg-country-russia', years: 33 },
                { name: 'Румынское Королевство', period: '2157-2180', color: 'bg-red-700', years: 23 },
                { name: 'Сербия', period: '2163-2179', color: 'bg-blue-800', years: 16 },
                { name: 'Болгарское Царство', period: '2160-2170', color: 'bg-green-700', years: 10 }
              ].map((entry, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-white/50 hover:bg-white/80 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full ${entry.color}`} />
                    <div>
                      <h3 className="font-montserrat font-semibold text-foreground">
                        {entry.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{entry.period}</p>
                    </div>
                  </div>
                  <div className="text-primary font-montserrat font-bold text-sm">
                    {entry.years} лет
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-primary/10 p-8 animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-3 mb-6">
              <Icon name="HandHelping" size={32} className="text-primary" />
              <h2 className="font-montserrat font-bold text-2xl text-foreground">
                Помощники Пакта
              </h2>
            </div>
            <div className="space-y-4">
              {[
                { name: 'Венгерствия', period: '2162-2171', color: 'bg-red-600', years: 9 },
                { name: 'Германия', period: '2161-2168', color: 'bg-yellow-600', years: 7 },
                { name: 'Эстония', period: '2156-2160', color: 'bg-blue-600', years: 4 }
              ].map((entry, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-white/50 hover:bg-white/80 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full ${entry.color}`} />
                    <div>
                      <h3 className="font-montserrat font-semibold text-foreground">
                        {entry.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{entry.period}</p>
                    </div>
                  </div>
                  <div className="text-muted-foreground font-montserrat font-bold text-sm">
                    {entry.years} лет
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-primary/10 p-8 md:p-12 animate-fade-in">
          <div className="flex items-center gap-4 mb-6">
            <Icon name="Info" size={40} className="text-primary" />
            <h2 className="font-montserrat font-bold text-3xl text-foreground">
              О Европейском Союзном Пакте
            </h2>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              Европейский Союзный Пакт был создан в 2155 году по инициативе Российского Союза как механизм стабилизации и сотрудничества в европейском регионе.
            </p>
            <p className="text-lg">
              Пакт объединял как полноправных членов, так и государства-помощники, которые участвовали в совместных экономических и оборонительных проектах. Альянс просуществовал 33 года и был распущен в 2188 году после достижения своих основных целей.
            </p>
            <p className="text-lg">
              За время существования Пакта его члены реализовали множество инфраструктурных проектов, торговых соглашений и программ культурного обмена, способствовавших укреплению связей между странами Восточной Европы и Балкан.
            </p>
          </div>
        </Card>
      </div>

      <footer className="py-8 text-center text-muted-foreground border-t border-primary/10 mt-16">
        <p className="font-montserrat">© 2160 Информационный портал Российского Союза</p>
      </footer>
    </div>
  );
}
