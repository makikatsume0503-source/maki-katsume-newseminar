import React from 'react';

export const Conclusion: React.FC = () => {
    return (
        <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center">
                <div className="w-[800px] h-[800px] border border-white/20 rounded-full animate-[spin_60s_linear_infinite]"></div>
                <div className="w-[600px] h-[600px] border border-white/20 rounded-full animate-[spin_40s_linear_infinite_reverse] absolute"></div>
            </div>

            <div className="container mx-auto px-4 max-w-3xl relative z-10">
                <h2 className="text-2xl md:text-4xl font-bold mb-10 leading-tight">
                    境界線がなくなる時代の<br />
                    <span className="text-secondary">「真の生存戦略」</span>
                </h2>

                <div className="space-y-6 text-base md:text-lg font-light leading-relaxed text-slate-200">
                    <p>
                        私が考えるに、<br className="block md:hidden" />
                        2026年以降AIはさらに進化します。<br />
                        「ライター」や「デザイナー」という呼び名に<br />
                        もう意味はなくなるかもしれません。
                    </p>
                    <p>
                        その時、最後に生き残り<br className="block md:hidden" />
                        選ばれ続けるのは誰か。
                    </p>
                    <p className="font-bold text-white text-lg md:text-xl py-4">
                        それは、<span className="border-b-2 border-secondary">『何を伝えるか』という本質を見極め、</span><br className="hidden md:block" />
                        AIを最高のアシスタントとして使いこなす<br className="hidden md:block" />
                        『次世代のコンテンツ提供者』です。
                    </p>
                    <p>
                        指示待ちのライターを卒業し、AIというパートナーを手に入れて、コンテンツの価値を何倍にも高めていきませんか？ ライティングスキル・リサーチ力という最強の土台を持っているあなたなら、必ずAIを味方にして飛躍できます。
                    </p>
                </div>

                <div className="mt-12 text-secondary font-bold text-lg md:text-xl leading-relaxed">
                    その第一歩を、<br className="block md:hidden" />
                    この2時間で一緒に<br className="block md:hidden" />
                    踏み出しましょう。
                </div>
            </div>
        </section>
    );
};
