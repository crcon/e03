import { useEffect, useRef } from 'react';
import { 
  Handshake, 
  Landmark,
  Wallet,
  Settings,
  TrendingUp
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const advantages = [
  {
    icon: Landmark,
    title: '资源优势互补',
    description: '合作方提供土地、指标、地方关系等核心资源',
  },
  {
    icon: Wallet,
    title: '资金专业输出',
    description: '易储能源提供全额资金及专业技术运营服务',
  },
  {
    icon: Settings,
    title: '标准化流程',
    description: '按里程碑节点验收，分阶段支付开发费',
  },
  {
    icon: TrendingUp,
    title: '利益共享机制',
    description: '项目权益平稳交割，实现双方共赢',
  },
];

const JointDevelopment = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const advantagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Intro animation
      gsap.fromTo(
        introRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: introRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Advantages animation
      const advantageCards = advantagesRef.current?.querySelectorAll('.advantage-card');
      if (advantageCards) {
        gsap.fromTo(
          advantageCards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: advantagesRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="joint-development"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#f5f5f5] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#e6f7f5]/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-white text-[#00b49d] text-sm font-medium rounded-full mb-4 shadow-sm">
            合作模式详解
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            联合开发<span className="text-[#00b49d]">模式</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            易储能源与具备属地资源优势的合作方强强联手，共同推进独立储能项目落地
          </p>
        </div>

        {/* Introduction */}
        <div ref={introRef} className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00b49d] to-[#005c4b] flex items-center justify-center flex-shrink-0">
              <Handshake className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">模式概述</h3>
              <p className="text-gray-600 leading-relaxed">
                联合开发模式是指易储能源与具备属地资源优势的合作方（如地方国企、新能源开发商、园区平台等）强强联手，
                共同推进独立储能项目落地的创新合作机制。在该模式下，双方分工明确、优势互补，实现项目权益的平稳交割与利益共享。
              </p>
            </div>
          </div>

          {/* Division of Labor */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#f5f5f5] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#00b49d] flex items-center justify-center">
                  <Landmark className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900">合作方（出资源）</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                依托本土优势，负责落实项目前期的核心资源，包括但不限于土地选址、获取发改委备案、
                争取电网接入指标及协调地方行政审批手续。
              </p>
            </div>
            <div className="bg-[#f5f5f5] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#005c4b] flex items-center justify-center">
                  <Wallet className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900">易储能源（出资金与专业）</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                作为项目开发主导方，负责提供全额项目建设资金，并输出专业的技术方案、工程建设管理（EPC对接）、
                并网调度及全生命周期的电力交易与资产运营服务。
              </p>
            </div>
          </div>
        </div>

        {/* Advantages */}
        <div ref={advantagesRef} className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            模式优势
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((item, index) => (
              <div
                key={index}
                className="advantage-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#00b49d]/30"
              >
                <div className="w-12 h-12 rounded-xl bg-[#e6f7f5] flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#00b49d]" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default JointDevelopment;
