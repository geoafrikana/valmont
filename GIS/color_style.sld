<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor xmlns="http://www.opengis.net/sld" version="1.0.0" xmlns:gml="http://www.opengis.net/gml" xmlns:sld="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc">
  <UserLayer>
    <sld:LayerFeatureConstraints>
      <sld:FeatureTypeConstraint/>
    </sld:LayerFeatureConstraints>
    <sld:UserStyle>
      <sld:Name>COLOR</sld:Name>
      <sld:FeatureTypeStyle>
        <sld:Rule>
          <sld:RasterSymbolizer>
            <sld:ChannelSelection>
              <sld:RedChannel>
                <sld:SourceChannelName>1</sld:SourceChannelName>
                <sld:ContrastEnhancement/>
              </sld:RedChannel>
              <sld:GreenChannel>
                <sld:SourceChannelName>2</sld:SourceChannelName>
                <sld:ContrastEnhancement/>
              </sld:GreenChannel>
              <sld:BlueChannel>
                <sld:SourceChannelName>3</sld:SourceChannelName>
                <sld:ContrastEnhancement/>
              </sld:BlueChannel>
            </sld:ChannelSelection>
          </sld:RasterSymbolizer>
        </sld:Rule>
      </sld:FeatureTypeStyle>
    </sld:UserStyle>
  </UserLayer>
</StyledLayerDescriptor>
