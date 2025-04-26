import { useState } from 'react';
import { ArrowLeft, FileText, Globe, Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const Resources = () => {
  const [activeTab, setActiveTab] = useState<'pdf' | 'website'>('pdf');
  const [websiteUrl, setWebsiteUrl] = useState('https://maobedkova.github.io/');
  
  return (
    <div className="min-h-screen bg-gradient-sections p-6">
        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-8 text-transparent bg-gradient-green bg-clip-text">
          Resume
        </h1>

        {/* Resources Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-gradient-sections gap-6 mb-8">
          {/* PDF Card */}
          <div 
            className={cn(
              "glass-panel bg-surface/50 rounded-2xl p-6 flex flex-col items-center cursor-pointer transition-all duration-300",
              activeTab === 'pdf' ? "ring-2 ring-primary shadow-lg" : "hover:shadow-md"
            )}
            onClick={() => setActiveTab('pdf')}
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-xl font-semibold mb-2">One-Page Resume</h2>
            <p className="text-gray-400 text-center text-sm">
              View my concise resume with key achievements and skills
            </p>
          </div>

          {/* Website Card */}
          <div 
            className={cn(
              "glass-panel bg-surface/50 rounded-2xl p-6 flex flex-col items-center cursor-pointer transition-all duration-300",
              activeTab === 'website' ? "ring-2 ring-primary shadow-lg" : "hover:shadow-md"
            )}
            onClick={() => setActiveTab('website')}
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Globe className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Full Resume</h2>
            <p className="text-gray-400 text-center text-sm">
              Explore my detailed resume website with an extensive list on work places and projects
            </p>
          </div>
        </div>

        {/* Content Area */}
        {activeTab === 'pdf' && (
          <div className="space-y-6">
            <div className="border-b border-accent p-4 flex justify-between items-center glass-panel bg-surface/50 rounded-2xl">
              <h2 className="text-xl font-semibold text-transparent bg-gradient-green bg-clip-text flex items-center">
                <FileText className="w-5 h-5 mr-2 text-primary" />
                Resume PDF
              </h2>
              <a 
                href="/CV_NLP_AI_MariaObedkova.pdf" 
                download 
                className="inline-flex items-center px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-sm transition-colors"
              >
                <Download className="w-4 h-4 mr-1.5" />
                Download PDF
              </a>
            </div>
            
            <div className="p-4 glass-panel bg-surface/50 rounded-2xl">
              <div className="border border-accent rounded-lg overflow-hidden aspect-[3/4]">
                <embed 
                  src="/CV_NLP_AI_MariaObedkova.pdf" 
                  type="application/pdf"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'website' && (
          <div className="space-y-6">
            <div className="border-b border-accent p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 glass-panel bg-surface/50 rounded-2xl">
              <h2 className="text-xl font-semibold text-transparent bg-gradient-green bg-clip-text flex items-center">
                <Globe className="w-5 h-5 mr-2 text-primary" />
                Resume Website
              </h2>
              
              <div className="flex items-center space-x-3">
                <div className="relative flex-1 min-w-[200px]">
                  <input
                    type="url"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    className="w-full px-4 py-2 bg-accent border border-accent-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary pr-10"
                    placeholder="https://example.com"
                  />
                </div>
                
                <a 
                  href={websiteUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-sm transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-1.5" />
                  Open
                </a>
              </div>
            </div>
            
            <div className="p-4 glass-panel bg-surface/50 rounded-2xl">
              <div className="border border-accent rounded-lg overflow-hidden aspect-video">
                <iframe
                  src={websiteUrl}
                  className="w-full h-full"
                  title="Resume Website"
                  sandbox="allow-same-origin allow-scripts"
                />
              </div>
              
              <p className="text-sm text-gray-400 mt-3 italic">
                Note: Some websites may block being displayed in iframes due to security settings.
              </p>
            </div>
          </div>
        )}
        
        {/* Back button */}
        <div className="mt-12 flex justify-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-dark to-primary hover:from-primary hover:to-primary-light text-white px-6 py-3 rounded-[1.5rem] transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
    </div>
  );
};

export default Resources;
