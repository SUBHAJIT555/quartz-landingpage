"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/Container";
import Globe3DDemoThird from "@/components/ui/3d-globe-demo-3";

export function NotForEveryoneSection() {
  return (
    <section id="why" className="scroll-mt-24 py-16 pb-24">
      <Container className="max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="rounded-3xl"
        >
          <Globe3DDemoThird />
        </motion.div>
      </Container>
    </section>
  );
}
