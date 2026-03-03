import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, PenTool } from 'lucide-react';

export const DigitalTwin: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest text-sm">NotebookLM</span>
                    <h2 className="text-2xl md:text-4xl font-bold mt-2 text-slate-800">
                        NotebookLMで作る<br className="block md:hidden" /><span className="text-primary border-b-4 border-secondary/50">「デジタル分身」</span>
                    </h2>
                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                        あなたの文章をAIに記憶させることで、<br />AIは単なるツールから「パートナー」へと進化します。
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <FeatureItem
                            icon={<Brain className="w-6 h-6 text-secondary" />}
                            title="あなたの文章をAIに読み込ませる"
                            description="これまであなたが書いてきたブログ、SNSの投稿、過去の原稿。これらをNotebookLMに読み込ませることで、「あなたらしい表現」「大切にしている視点」をAIが学習します。"
                        />
                        <FeatureItem
                            icon={<Sparkles className="w-6 h-6 text-secondary" />}
                            title="自分自身のクローンが執筆の手助けをしてくれる"
                            description="ただのAI出力ではなく、あなたの文体やトーン＆マナーを再現。自分が書くような文章をAIに書かせる体験ができます。"
                        />
                        <FeatureItem
                            icon={<PenTool className="w-6 h-6 text-secondary" />}
                            title="効率と個性を両立した執筆術"
                            description="「自分ならどう書くか」をAIが提案してくれることで、執筆スピードは劇的に向上しながらも、あなたらしさは失われません。"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full -ml-12 -mb-12 blur-2xl"></div>

                        <h3 className="text-xl font-bold mb-6 text-center text-primary">AIをパートナーにするプロセス</h3>
                        <div className="space-y-4">
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500">1</div>
                                <p className="text-sm text-slate-700">過去記事データの選定と準備</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500">2</div>
                                <p className="text-sm text-slate-700">NotebookLMへのデータインポート</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500">3</div>
                                <p className="text-sm text-slate-700">文体と思考プロセスのチューニング</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-secondary/30 flex items-center gap-3 bg-secondary/5">
                                <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold">4</div>
                                <p className="text-sm font-bold text-primary">あなた専用AIアシスタントの誕生</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const FeatureItem = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="flex gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center border border-primary/10">
            {icon}
        </div>
        <div>
            <h3 className="font-bold text-lg text-slate-800 mb-2">{title}</h3>
            <p className="text-slate-600 leading-relaxed text-sm">{description}</p>
        </div>
    </div>
);
