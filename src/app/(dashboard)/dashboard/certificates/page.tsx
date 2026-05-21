"use client";

import React from "react";
import { 
  Award, 
  Download, 
  ExternalLink,
  ShieldCheck,
  QrCode,
  Share2,
  Database,
  Link as LinkIcon,
  CheckCircle2,
  Calendar,
  Clock,
  Hexagon
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";

const certificates = [
  {
    id: "CRED-782-X92",
    course: "Full-Stack React Development",
    platform: "Credify Certified",
    date: "May 12, 2026",
    hours: 42,
    blockchainHash: "0x7a2...f4e1",
    score: 98,
    nftId: "#8821",
    status: "Verified",
    rarity: "Legendary",
  },
  {
    id: "CRED-441-B12",
    course: "Advanced System Design",
    platform: "Credify Certified",
    date: "April 28, 2026",
    hours: 28,
    blockchainHash: "0x3b1...c9d2",
    score: 94,
    nftId: "#4502",
    status: "Verified",
    rarity: "Epic",
  },
  {
    id: "CRED-129-L05",
    course: "Blockchain Fundamentals",
    platform: "Credify Certified",
    date: "March 15, 2026",
    hours: 15,
    blockchainHash: "0x9d5...a2b8",
    score: 89,
    nftId: "#1209",
    status: "Verified",
    rarity: "Rare",
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function CertificateVault() {
  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
            Certificate Vault
            <Badge variant="outline" className="text-[10px] uppercase tracking-widest bg-blue-500/10 text-blue-400 border-blue-500/20">
              {certificates.length} Assets
            </Badge>
          </h1>
          <p className="text-muted-foreground">
            Manage your blockchain-backed educational credentials and NFT badges.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="border-white/5 bg-white/5 hover:bg-white/10 text-white h-11">
            <Share2 className="w-4 h-4 mr-2" />
            Share Profile
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white h-11 px-6 shadow-lg shadow-blue-600/20">
            <Award className="w-4 h-4 mr-2" />
            Claim New
          </Button>
        </div>
      </div>

      {/* Grid */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {certificates.map((cert) => (
          <motion.div key={cert.id} variants={item}>
            <Card className="group relative overflow-hidden border-white/5 bg-white/[0.03] backdrop-blur-xl transition-all hover:border-blue-500/30 hover:bg-white/[0.05]">
              {/* Rarity Indicator */}
              <div className={cn(
                "absolute top-0 right-0 px-4 py-1 text-[10px] font-bold uppercase tracking-widest rounded-bl-xl z-10",
                cert.rarity === "Legendary" ? "bg-amber-500 text-black" :
                cert.rarity === "Epic" ? "bg-purple-500 text-white" : "bg-blue-500 text-white"
              )}>
                {cert.rarity}
              </div>

              {/* Card Header with Glass Design */}
              <CardHeader className="relative pb-4">
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-blue-500/10 to-transparent -z-10" />
                <div className="flex justify-between items-start mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 shadow-inner group-hover:scale-110 transition-transform">
                    <Hexagon className={cn(
                      "w-8 h-8",
                      cert.rarity === "Legendary" ? "text-amber-400" :
                      cert.rarity === "Epic" ? "text-purple-400" : "text-blue-400"
                    )} />
                    <Award className="absolute w-4 h-4 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-muted-foreground uppercase tracking-tighter">Credibility Score</div>
                    <div className="text-lg font-bold text-emerald-400">{cert.score}</div>
                  </div>
                </div>
                <CardTitle className="text-xl leading-tight text-white group-hover:text-blue-400 transition-colors">
                  {cert.course}
                </CardTitle>
                <CardDescription className="flex items-center gap-2 text-muted-foreground mt-1">
                  <Database className="w-3 h-3" /> {cert.platform}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div className="text-[10px] text-muted-foreground uppercase flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> Issued
                    </div>
                    <div className="text-sm font-medium text-white">{cert.date}</div>
                  </div>
                  <div className="space-y-1 text-right">
                    <div className="text-[10px] text-muted-foreground uppercase flex items-center gap-1 justify-end">
                      <Clock className="w-3 h-3" /> Effort
                    </div>
                    <div className="text-sm font-medium text-white">{cert.hours} Hours</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-2">
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <LinkIcon className="w-3 h-3" /> Blockchain Hash
                    </span>
                    <span className="text-blue-400 font-mono">{cert.blockchainHash}</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> NFT Token ID
                    </span>
                    <span className="text-white font-mono">{cert.nftId}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="grid grid-cols-2 gap-2 pt-2">
                <Button variant="ghost" className="bg-white/5 border border-white/5 text-xs text-white hover:bg-white/10 h-10">
                  <Download className="w-3.5 h-3.5 mr-2" />
                  Assets
                </Button>
                <Link href={`/verify/${cert.id}`} className="w-full">
                  <Button className="w-full bg-blue-600/10 border border-blue-500/20 text-blue-400 hover:bg-blue-600/20 text-xs h-10 group/btn">
                    <QrCode className="w-3.5 h-3.5 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Verify
                  </Button>
                </Link>
              </CardFooter>

              {/* Hover Glow Effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
