import React, { useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { Toolbar } from '../Toolbar/Toolbar';
import { ImageViewer } from './ImageViewer';
import { CameraView } from '../Camera/CameraView';

interface SceneViewerProps {
  fanName: string;
}

export function SceneViewer({ fanName }: SceneViewerProps) {
  const [isToolbarOpen, setIsToolbarOpen] = useState(false);
  const [cameraError, setCameraError] = useState<Error | null>(null);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900">
      {!cameraError && <CameraView onError={setCameraError} />}
      <ImageViewer fanName={fanName} />
      
      <button
        onClick={() => setIsToolbarOpen(!isToolbarOpen)}
        className={`fixed bottom-4 right-4 z-50 rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20 ${
          isToolbarOpen ? 'rotate-180' : ''
        }`}
      >
        <ChevronUp className="h-6 w-6 text-white" />
      </button>

      <Toolbar isOpen={isToolbarOpen} currentFan={fanName} />
    </div>
  );
}