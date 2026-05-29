/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import Message from './components/Message';
import Gallery from './components/Gallery';
import AudioPlayer from './components/AudioPlayer';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-blue-light/50 selection:text-white">
      <ScrollProgress />
      <Hero />
      <Message />
      <Gallery />
      <AudioPlayer />
      
      <footer className="py-8 text-center text-white/70 border-t border-white/20 text-sm mt-12 bg-black/5">
        <p>&copy; 2026. Designed with love.</p>
      </footer>
    </div>
  );
}
