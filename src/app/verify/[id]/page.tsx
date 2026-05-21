"use client";

import React from "react";
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  Database,
  Link as LinkIcon,
  Calendar,
  User,
  Fingerprint,
  QrCode,
  Hexagon,
  Share2
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useParams } from "next/navigation";

// Mock data for demonstration - in a real app, this would be fetched from Firestore/Blockchain
const getCertificateData = (id: string) => {
  return {
    id: id || "CRED-782-X92",
    course: "Full-Stack React Development",
    recipient: "Alex Chen",
    issuer: "Credify Education",
    date: "May 12, 2026",
    hours: 42,
    score: 98,
    blockchain: "Polygon Mainnet",
    hash: "0x7a2...f4e1",
    nftId: "#8821",
    status: "Verified",
    trustScore: 99.4,
    metadata: {
      type: "ERC-721",
      standard: "Credify-V2",
      minted: "2026-05-12T14:22:01Z"
    }
  };
};

export default function VerificationPage() {
  const params = useParams();
  const cert = getCertificateData(params.id as string);

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white selection:bg-blue-500/30 overflow-x-hidden relative">
      {/* Background glow effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-4xl mx-auto px-6 py-12 md:py-24">
        {/* Verification Status Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-2">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">Authenticity Verified</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient">
            Credential Verification
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Official blockchain-backed proof of educational achievement issued by Credify.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-12">
          {/* Main Certificate Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-7"
          >
            <Card className="relative overflow-hidden border-white/10 bg-white/[0.02] backdrop-blur-2xl p-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500" />
              <CardHeader className="text-center pb-8 pt-10">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <Hexagon className="w-24 h-24 text-blue-500/20 fill-blue-500/5" strokeWidth={1} />
                    <Award className="absolute inset-0 m-auto w-10 h-10 text-blue-400" />
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border-2 border-dashed border-blue-500/20 rounded-full"
                    />
                  </div>
                </div>
                <CardTitle className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {cert.course}
                </CardTitle>
                <CardDescription className="text-blue-400 font-medium">
                  {cert.issuer}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-8 pb-10">
                <div className="flex flex-col items-center justify-center space-y-1 py-4 border-y border-white/5">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Presented To</span>
                  <span className="text-xl font-semibold text-white uppercase tracking-tight">{cert.recipient}</span>
                </div>

                <div className="grid grid-cols-2 gap-8 px-4">
                  <div className="space-y-1">
                    <span className="text-[10px] text-muted-foreground uppercase flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> Issue Date
                    </span>
                    <p className="text-sm font-medium text-white">{cert.date}</p>
                  </div>
                  <div className="space-y-1 text-right">
                    <span className="text-[10px] text-muted-foreground uppercase flex items-center gap-1 justify-end">
                      <Fingerprint className="w-3 h-3" /> Credential ID
                    </span>
                    <p className="text-sm font-mono text-white">{cert.id}</p>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="bg-white/5 flex items-center justify-between p-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <div className="text-left">
                    <p className="text-[10px] text-muted-foreground uppercase font-bold">Trust Score</p>
                    <p className="text-sm font-bold text-emerald-400">{cert.trustScore}% Secure</p>
                  </div>
                </div>
                <Button variant="ghost" className="h-9 gap-2 text-muted-foreground hover:text-white hover:bg-white/5">
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Verification Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-5 space-y-6"
          >
            {/* Blockchain Proof */}
            <Card className="border-white/5 bg-white/[0.03] backdrop-blur-xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold text-white flex items-center gap-2">
                  <Database className="w-4 h-4 text-blue-400" />
                  Blockchain Proof
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 rounded-lg bg-black/40 border border-white/5 space-y-3">
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="text-muted-foreground">Network</span>
                    <span className="text-white font-medium">{cert.blockchain}</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="text-muted-foreground">Transaction Hash</span>
                    <span className="text-blue-400 font-mono">{cert.hash}</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="text-muted-foreground">NFT Token</span>
                    <span className="text-white font-mono">{cert.nftId}</span>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-9 text-xs">
                  <ExternalLink className="w-3.5 h-3.5 mr-2" />
                  View on Explorer
                </Button>
              </CardContent>
            </Card>

            {/* Issuer Verification */}
            <Card className="border-white/5 bg-white/[0.03] backdrop-blur-xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Issuer Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-tight">Verified Issuer</p>
                    <p className="text-[10px] text-muted-foreground">Credify Education Authority</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* QR Verification */}
            <div className="p-6 rounded-xl border border-white/5 bg-gradient-to-br from-white/[0.05] to-transparent flex flex-col items-center gap-4">
              <div className="p-4 bg-white rounded-xl">
                <QrCode className="w-20 h-20 text-black" />
              </div>
              <p className="text-[10px] text-muted-foreground text-center px-4 leading-relaxed">
                Scan this code to verify this credential on any mobile device.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer Meta */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground"
        >
          <div className="flex items-center gap-2 text-xs">
            <LinkIcon className="w-3 h-3" />
            <span>Permanent URL: credify.app/verify/{cert.id}</span>
          </div>
          <div className="flex items-center gap-6 text-xs uppercase tracking-widest font-semibold">
            <span>Powered by Credify</span>
            <span>Web3 Secured</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
