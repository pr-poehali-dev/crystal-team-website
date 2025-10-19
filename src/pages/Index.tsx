import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Player {
  number: string;
  name: string;
  position: string;
  positionFull: string;
}

interface NewsItem {
  id: number;
  title: string;
  date: string;
  content: string;
}

const Index = () => {
  const [activeSection, setActiveSection] = useState<'home' | 'team' | 'news'>('home');

  const players: Player[] = [
    { number: '43', name: 'BAGA', position: 'GK', positionFull: 'Вратарь' },
    { number: '16', name: 'KEWS1K', position: 'PD', positionFull: 'Правый защитник' },
    { number: '12', name: 'extazy', position: 'LD', positionFull: 'Левый защитник' },
    { number: '7', name: 'F', position: 'CW', positionFull: 'Центральный нападающий' },
    { number: '17', name: 'max', position: 'PW', positionFull: 'Правый нападающий' },
  ];

  const news: NewsItem[] = [
    {
      id: 1,
      title: 'Победа в домашнем матче!',
      date: '15 октября 2024',
      content: 'Команда Кристалл одержала уверенную победу со счетом 5:2 в домашнем матче против соперников.',
    },
    {
      id: 2,
      title: 'Новый сезон - новые цели',
      date: '1 октября 2024',
      content: 'Команда начала подготовку к новому сезону. Впереди много интересных матчей и новых вызовов.',
    },
    {
      id: 3,
      title: 'Обновление состава',
      date: '20 сентября 2024',
      content: 'В команду влились новые игроки, которые уже показывают отличные результаты на тренировках.',
    },
  ];

  const scrollToSection = (section: 'home' | 'team' | 'news') => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-dark-ice">
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-crystal-blue to-accent-purple flex items-center justify-center">
                <span className="text-2xl font-bold text-white">K</span>
              </div>
              <h1 className="text-2xl font-bold text-white">КРИСТАЛЛ|IHL</h1>
            </div>
            <div className="flex gap-6">
              <Button
                variant="ghost"
                className="text-white hover:text-crystal-blue transition-colors"
                onClick={() => scrollToSection('home')}
              >
                Главная
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:text-crystal-blue transition-colors"
                onClick={() => scrollToSection('team')}
              >
                Команда
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:text-crystal-blue transition-colors"
                onClick={() => scrollToSection('news')}
              >
                Новости
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 ice-gradient opacity-90"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-crystal-blue rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-purple rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
          <Badge className="mb-6 bg-crystal-blue/20 text-white border-crystal-blue text-lg px-6 py-2">
            IHL SEASON 2024/2025
          </Badge>
          <h1 className="text-7xl md:text-9xl font-bold text-white mb-6 tracking-tight">
            КРИСТАЛЛ
          </h1>
          <p className="text-2xl md:text-3xl text-crystal-blue font-semibold mb-8">
            Сила. Скорость. Победа.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="bg-crystal-blue hover:bg-crystal-blue/90 text-white text-lg px-8"
              onClick={() => scrollToSection('team')}
            >
              <Icon name="Users" className="mr-2" size={20} />
              Наша команда
            </Button>
            <Button
              size="lg"
              className="bg-crystal-blue hover:bg-crystal-blue/90 text-white text-lg px-8"
              onClick={() => scrollToSection('news')}
            >
              <Icon name="Newspaper" className="mr-2" size={20} />
              Новости
            </Button>
          </div>
        </div>
      </section>

      <section id="team" className="min-h-screen py-20 bg-gradient-to-b from-dark-ice to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">СОСТАВ КОМАНДЫ</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-crystal-blue to-accent-purple mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {players.map((player, index) => (
              <Card
                key={player.number}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover-scale cursor-pointer overflow-hidden group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 relative">
                  <div className="absolute top-0 right-0 text-9xl font-bold text-white/5 group-hover:text-crystal-blue/10 transition-colors">
                    {player.number}
                  </div>
                  <div className="relative z-10">
                    <Badge className="mb-4 bg-crystal-blue text-white">
                      {player.position}
                    </Badge>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-4xl font-bold text-crystal-blue">#{player.number}</span>
                      <h3 className="text-3xl font-bold text-white">{player.name}</h3>
                    </div>
                    <p className="text-gray-400 text-lg">{player.positionFull}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="min-h-screen py-20 bg-gradient-to-b from-black to-dark-ice">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">НОВОСТИ</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-crystal-blue to-accent-purple mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {news.map((item, index) => (
              <Card
                key={item.id}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-crystal-blue to-accent-purple flex items-center justify-center flex-shrink-0">
                      <Icon name="Newspaper" className="text-white" size={28} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="border-crystal-blue text-crystal-blue">
                          {item.date}
                        </Badge>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-300 text-lg leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-black/50 border-t border-white/10 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Кристалл|IHL. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;