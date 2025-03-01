
import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resources = () => {
  const [activeTab, setActiveTab] = useState<'pdf' | 'website'>('pdf');
  const [websiteUrl, setWebsiteUrl] = useState('https://example.com');
  
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header with back button */}
        <div className="mb-10 flex items-center">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary-light transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-8 text-transparent bg-gradient-green bg-clip-text">
          Resources
        </h1>

        {/* Tab Navigation */}
        <div className="flex mb-6 border-b border-accent">
          <button
            onClick={() => setActiveTab('pdf')}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === 'pdf' 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-gray-400 hover:text-primary'
            }`}
          >
            PDF Viewer
          </button>
          <button
            onClick={() => setActiveTab('website')}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === 'website' 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-gray-400 hover:text-primary'
            }`}
          >
            Website Preview
          </button>
        </div>

        {/* Content Area */}
        <div className="glass-panel rounded-lg p-6">
          {activeTab === 'pdf' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-transparent bg-gradient-green bg-clip-text">
                Resume & Publications
              </h2>
              
              <div className="bg-accent rounded-lg p-4 mb-6">
                <p className="text-gray-300 mb-4">
                  Below you can view my resume and published research papers.
                </p>
                
                {/* Sample PDF Embed */}
                <div className="border border-accent rounded-lg overflow-hidden aspect-[3/4] bg-surface-dark">
                  <embed 
                    src="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" 
                    type="application/pdf"
                    className="w-full h-full"
                  />
                </div>
                
                <p className="text-sm text-gray-400 mt-2">
                  Note: You can upload and link to your own PDF files to replace this example.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'website' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-transparent bg-gradient-green bg-clip-text">
                Website Preview
              </h2>
              
              <div className="mb-4">
                <label htmlFor="website-url" className="block text-gray-300 mb-2">
                  Enter website URL:
                </label>
                <div className="flex">
                  <input
                    id="website-url"
                    type="url"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    className="flex-grow px-4 py-2 bg-accent border border-accent-light rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="https://example.com"
                  />
                  <button 
                    className="px-4 py-2 bg-primary text-white rounded-r-md hover:bg-primary-dark transition-colors"
                    onClick={() => setWebsiteUrl(websiteUrl)}
                  >
                    Load
                  </button>
                </div>
              </div>
              
              <div className="border border-accent rounded-lg overflow-hidden aspect-video bg-surface-dark">
                <iframe
                  src={websiteUrl}
                  className="w-full h-full"
                  title="Website Preview"
                  sandbox="allow-same-origin allow-scripts"
                />
              </div>
              
              <p className="text-sm text-gray-400">
                Note: Some websites may block being displayed in iframes due to security settings.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resources;
