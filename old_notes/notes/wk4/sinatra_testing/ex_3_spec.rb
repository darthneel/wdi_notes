# ===================================================
# ========= BEFORE RUNNING THIS TEST SUITE ==========
# ===================================================
# == 1. Make sure your Sinatra server is running. ===
# ===================================================
# == 2. It's accepting connections on port 4567. ====
# ===================================================
# ===================================================

require 'httparty'

describe "Ex_3" do 

  # before :each do
  BASE_URL = "http://127.0.0.1:4567"
  # end

  describe "/" do 
    it "should display 'Good Morning'" do 
      doc = HTTParty.get(BASE_URL)
      expect(doc.parsed_response).to eq("Good Morning");
    end
  end

  describe "/:anything_i_type_here" do 
    it "should display 'anything_i_type_here'" do 
      doc = HTTParty.get(BASE_URL+"/anything_i_type_here")
      expect(doc.parsed_response).to eq("Welcome to \"anything_i_type_here\"");
    end
  end

  describe "/happy" do 
    it "should display 'happy'" do 
      doc = HTTParty.get(BASE_URL+"/happy")
      expect(doc.parsed_response).to eq("Welcome to \"happy\"");
    end
  end

  describe "/excited" do 
    it "should display 'excited'" do 
      doc = HTTParty.get(BASE_URL+"/excited")
      expect(doc.parsed_response).to eq("Welcome to \"excited\"");
    end
  end

  describe "/monday" do 
    it "should display 'monday'" do 
      doc = HTTParty.get(BASE_URL+"/monday")
      expect(doc.parsed_response).to eq("Welcome to \"monday\"");
    end
  end

end