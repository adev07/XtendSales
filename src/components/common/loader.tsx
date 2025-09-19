import React from 'react';
import { motion } from 'framer-motion';
import { Loader2, Zap, Sparkles } from 'lucide-react';

interface LoaderProps {
    variant?: 'default' | 'minimal' | 'branded';
    size?: 'sm' | 'md' | 'lg';
    message?: string;
}

const Loader: React.FC<LoaderProps> = ({
    variant = 'default',
    size = 'md',
    message = 'Loading...'
}) => {
    const sizeClasses = {
        sm: 'w-6 h-6',
        md: 'w-8 h-8',
        lg: 'w-12 h-12'
    };

    const containerClasses = {
        sm: 'gap-2',
        md: 'gap-3',
        lg: 'gap-4'
    };

    const textClasses = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg'
    };

    if (variant === 'minimal') {
        return (
            <div className="flex items-center justify-center p-4">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className={`${sizeClasses[size]} text-primary`}
                >
                    <Loader2 className="w-full h-full" />
                </motion.div>
            </div>
        );
    }

    if (variant === 'branded') {
        return (
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
                <div className="flex flex-col items-center gap-6 p-8">
                    {/* Animated Logo/Brand Element */}
                    <div className="relative">
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 180, 360]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-xl flex items-center justify-center"
                        >
                            <Zap className="w-8 h-8 text-primary-foreground" />
                        </motion.div>

                        {/* Floating particles */}
                        <motion.div
                            animate={{
                                y: [-10, 10, -10],
                                opacity: [0.5, 1, 0.5]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute -top-2 -right-2"
                        >
                            <Sparkles className="w-4 h-4 text-primary" />
                        </motion.div>

                        <motion.div
                            animate={{
                                y: [10, -10, 10],
                                opacity: [0.5, 1, 0.5]
                            }}
                            transition={{
                                duration: 1.8,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5
                            }}
                            className="absolute -bottom-2 -left-2"
                        >
                            <Sparkles className="w-3 h-3 text-primary/70" />
                        </motion.div>
                    </div>

                    {/* Loading Text */}
                    <div className="text-center">
                        <motion.h3
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="text-xl font-semibold text-foreground mb-2"
                        >
                            XtendSales
                        </motion.h3>
                        <motion.p
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 1.2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.3
                            }}
                            className="text-muted-foreground"
                        >
                            {message}
                        </motion.p>
                    </div>

                    {/* Progress Dots */}
                    <div className="flex gap-2">
                        {[0, 1, 2].map((index) => (
                            <motion.div
                                key={index}
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.5, 1, 0.5]
                                }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    delay: index * 0.2
                                }}
                                className="w-2 h-2 bg-primary rounded-full"
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // Default variant
    return (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
            <div className={`flex flex-col items-center ${containerClasses[size]}`}>
                {/* Spinning loader */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className={`${sizeClasses[size]} text-primary`}
                >
                    <Loader2 className="w-full h-full" />
                </motion.div>

                {/* Loading message */}
                <motion.p
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className={`${textClasses[size]} text-muted-foreground text-center`}
                >
                    {message}
                </motion.p>
            </div>
        </div>
    );
};

export default Loader;
