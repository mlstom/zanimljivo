/** @jsxImportSource react */

import { motion, AnimatePresence } from "framer-motion";
import { qwikify$ } from '@builder.io/qwik-react';
import { useEffect, useState } from "react";

const ReactAction = () => {
    const textList = [{ id: 1, akcija: 'Ovo je neka akcija 1' }, { id: 2, akcija: 'Ovo je neka akcija 2' }];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((index + 1) % textList.length);
        }, 2000);
        return () => clearInterval(intervalId);
    }, [index, textList.length]);

    return (
        <div className="w-full p-4 bg-[#999966] text-white h-10 overflow-hidden flex justify-center items-center">
            <AnimatePresence >
                <motion.div
                    key={textList[index].id}
                    initial={{ x: 1400 }}
                    animate={{ x: 0 }}
                    transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 50,
                        duration: 1.25
                    }}
                >
                    {textList[index].akcija}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export const Action = qwikify$(ReactAction);
