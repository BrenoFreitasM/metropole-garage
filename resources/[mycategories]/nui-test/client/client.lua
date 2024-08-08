CreateThread(function ()
    while true do
        Wait(10)

        local playerId = PlayerPedId()
        local playerCoords = GetEntityCoords(playerId)
        local playerHeading = GetEntityHeading(playerId)

        SendNUIMessage({
            type    = 'position',
            x       = playerCoords.x,
            y       = playerCoords.y,
            z       = playerCoords.z,
            heading = playerHeading,
        })
    end
end)